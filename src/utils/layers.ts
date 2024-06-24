import mapboxgl from "mapbox-gl";
import { pulsingDot, nopulsingDot } from "./pulsing_dot";
import { writable } from "svelte/store";
import ListPropertyService from "../service/list_property/list_property";
import * as turf from "@turf/turf";
import {
  property_clicked,
  property_count,
  property_liked,
} from "../store/property";
import { property_list } from "../store/property";
import type { Feature } from "../service/list_property/type";
import { mapStore } from "../store/map";
import { navigate } from "svelte-routing";

// POI Icon
import BelanjaIcon from "../assets/images/poi/belanja.png";
import FaskesIcon from "../assets/images/poi/faskes.png";
import IbadahIcon from "../assets/images/poi/ibadah.png";
import RestaurantIcon from "../assets/images/poi/restaurant.png";
import SekolahIcon from "../assets/images/poi/sekolah.png";
import TransportasiIcon from "../assets/images/poi/transportasi.png";
import { isLogged } from "../store/auth";

const poiIcon = {
  belanja: BelanjaIcon,
  faskes: FaskesIcon,
  ibadah: IbadahIcon,
  restoran: RestaurantIcon,
  sekolah: SekolahIcon,
  transportasi: TransportasiIcon,
};

// Popup
let popup: mapboxgl.Popup;

const popupStore = writable(
  new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  })
);

popupStore.subscribe((value) => {
  popup = value;
});

// Property List
let propertyLists: Feature[] = [];

property_list.subscribe((value) => {
  propertyLists = value;
});

// Maps
let map: mapboxgl.Map;

mapStore.subscribe((value) => {
  map = value;
});

// Draw Mode
let drawMode: string = "";

const drawModeStore = writable(drawMode);

drawModeStore.subscribe((value) => {
  drawMode = value;
});

// Authenticated
let authenticated: boolean = false;

isLogged.subscribe((value) => {
  authenticated = value;
});

// Layer Poi
const PoiLayer = () => {
  for (const key in poiIcon) {
    if (poiIcon.hasOwnProperty(key)) {
      const icon = poiIcon[key as keyof typeof poiIcon]; // Add index signature to allow indexing with a string
      map.loadImage(icon, (error, image) => {
        if (error) throw error;
        map.addImage(key.toLocaleUpperCase(), image as any);
      });
    }
  }

  map.addLayer({
    id: "poi",
    type: "symbol",
    source: "maps_soaraja",
    "source-layer": "jakarta_poi",
    layout: {
      "icon-image": ["get", "kategori"],
      "icon-allow-overlap": true,
      "icon-size": 0.8,
      "text-field": ["get", "nama"],
      "text-offset": [1, 0],
      "text-anchor": "left",
      "text-size": 12,
    },
    filter: ["==", ["get", "kategori"], ""],
  });

  // Layer Poi Clicked

  // Layer Poi Hover
  map.on("mouseenter", "poi", () => {
    map.getCanvas().style.cursor = "pointer";
  });

  // Layer Poi Hover
  map.on("mouseleave", "poi", () => {
    map.getCanvas().style.cursor = "";
  });
};

// Layer NJOP
const njopDetectedStore = writable(false);

let njopDetected: boolean;

njopDetectedStore.subscribe((value) => {
  njopDetected = value;
});

const NJOPLayer = () => {
  map.addLayer({
    id: "njop",
    type: "fill",
    source: "maps_soaraja",
    "source-layer": "jakarta_njop_new",
    paint: {
      "fill-color": "#000000",
      "fill-opacity": 0,
    },
  });

  map.on("click", "njop", (e) => {
    // Get value njop detected
    const { min, max } = e.features?.[0].properties as {
      min: number;
      max: number;
    };

    if (njopDetected) {
      popup
        .setLngLat(e.lngLat)
        .setHTML(
          `<div class="text-sm font-bold">NJOP</div><div class="text-xs">Rp. ${min.toLocaleString()} - Rp. ${max.toLocaleString()}</div>`
        )
        .addTo(map);
    }
  });
};

// Layer Property
const PropertyLayer = () => {
  map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });
  map.addImage("nopulsing-dot", nopulsingDot, { pixelRatio: 2 });
  let objectNameClicked: string = "";

  map.addSource("property", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [],
    },
  });

  map.addLayer({
    id: "property_layer",
    type: "symbol",
    source: "property",
    layout: {
      "icon-image": [
        "case",
        ["==", ["get", "list_id"], objectNameClicked],
        "pulsing-dot",
        "nopulsing-dot",
      ],
      "icon-allow-overlap": true,
      "icon-size": 0.25,
      "icon-ignore-placement": true,
      "icon-optional": true,
      "icon-rotation-alignment": "map",
      "icon-rotate": 0,
      "icon-padding": 0,
      "icon-keep-upright": false,
      "icon-offset": [0, 0],
      "icon-anchor": "center",
      "icon-pitch-alignment": "map",
      "text-field": ["get", "harga"],
      "text-offset": [1, 0],
      "text-anchor": "left",
      "text-size": 12,
    },
  });

  // Layer Property Clicked
  map.on("click", "property_layer", (e): void => {
    if (e.features && e.features[0] && e.features[0].properties) {
      objectNameClicked = e.features[0].properties.list_id;

      map.setLayoutProperty("property_layer", "icon-image", [
        "case",
        ["==", ["get", "list_id"], objectNameClicked],
        "pulsing-dot",
        "nopulsing-dot",
      ]);

      property_clicked.set(objectNameClicked);
      navigate(`/detail/${objectNameClicked}`, { replace: true, state: {} });

      pulsingDot.render();
      setInterval(() => {
        map.triggerRepaint();
      }, 100);
    }
  });

  // Layer Property Hover
  map.on("mouseenter", "property_layer", () => {
    map.getCanvas().style.cursor = "pointer";
  });

  // Layer Property Hover
  map.on("mouseleave", "property_layer", () => {
    map.getCanvas().style.cursor = "";
  });
};

const PropertyByBoundingBox = (
  map: mapboxgl.Map,
  bbox: mapboxgl.LngLatBounds
) => {
  const service = new ListPropertyService();

  // Set Property Like List
  let like_list: Number[] = [];

  // Check if isLogin
  if (authenticated) {
    service.getLikeProperty().then((data) => {
      data.data.forEach((property) => {
        if (property.listing.list_id !== undefined) {
          like_list.push(property.listing.list_id);
        }
      });

      property_liked.set(like_list);
    });
  }

  const { _ne, _sw } = bbox;

  const param = {
    bbox: {
      min_x: _sw.lng,
      min_y: _sw.lat,
      max_x: _ne.lng,
      max_y: _ne.lat,
    },
  };

  service.listPropertyGeoJSON(param).then((data) => {
    // Set Property List
    property_list.set(data.features);

    // Set Property Count
    if (data.features !== null) {
      property_count.set(data.features.length);
    } else {
      property_count.set(0);
    }

    // Add Property to Map
    const propertySource = map.getSource("property") as mapboxgl.GeoJSONSource;
    propertySource.setData(data as any);
  });
};

const drawAction = async (
  e: any,
  map: mapboxgl.Map,
  service: ListPropertyService
) => {
  // get polygon
  let polygon = e.features[0].geometry.coordinates;

  // Modify Polygon if Draw Circle
  if (drawMode === "draw_circle") {
    let center_point = turf.point(polygon[0][0]);

    let buffer = turf.buffer(
      center_point,
      e.features[0].properties.circleRadius,
      { units: "kilometers" } as any
    );

    polygon = buffer.geometry.coordinates;
  }

  // get list property
  const data = await service.listPropertyGeoJSON({ polygon });

  // Set Property List
  property_list.set(data.features);

  // Set Property Count
  if (data.features !== null) {
    property_count.set(data.features.length);
  } else {
    property_count.set(0);
  }

  // Add Property to Map
  const propertySource = map.getSource("property") as mapboxgl.GeoJSONSource;
  propertySource.setData(data as any);
};

// Fly To
const triggerClick = (id: number) => {
  const property = propertyLists.find(
    (property) => property.properties.list_id === id
  );
  const coordinates = property?.geometry.coordinates;

  if (coordinates && map) {
    map.fire("click", {
      lngLat: {
        lng: coordinates[0],
        lat: coordinates[1],
      },
      point: map.project({
        lng: coordinates[0],
        lat: coordinates[1],
      }),
    });
  }
};

export {
  PoiLayer,
  NJOPLayer,
  PropertyLayer,
  PropertyByBoundingBox,
  njopDetectedStore,
  popupStore,
  drawModeStore,
  drawAction,
  triggerClick,
};
