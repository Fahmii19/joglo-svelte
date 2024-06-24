<script lang="ts">
  import { onMount, setContext } from "svelte";
  import PoiFilter from "./PoiFilter.svelte";
  import MapboxDraw from "@mapbox/mapbox-gl-draw";
  import * as MapboxDrawGeodesic from "mapbox-gl-draw-geodesic";
  import Toolbox from "./Toolbox.svelte";
  import { mapbox, key, mapStore, markerStore } from "../store/map";
  import type mapboxgl from "mapbox-gl";
  import MeasureDistance from "../utils/measure_distance";
  import {
    NJOPLayer,
    PoiLayer,
    PropertyByBoundingBox,
    PropertyLayer,
    drawAction,
    drawModeStore,
  } from "../utils/layers";
  import ListPropertyService from "../service/list_property/list_property";

  let map: mapboxgl.Map;
  let marker: mapboxgl.Marker;
  let draw: MapboxDraw;
  let geolocate: mapboxgl.GeolocateControl;
  let measureDistance: MeasureDistance;
  let container: string | HTMLElement;
  let listPropertyService = new ListPropertyService();

  // Set Context
  setContext(key, {
    getMap: () => map,
    getDraw: () => draw,
    getGeolocate: () => geolocate,
    getMeasureDistance: () => measureDistance,
  });

  // Onload Map
  const onLoadMap = () => {
    map = new mapbox.Map({
      container: container,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [106.7718667, -6.1722842],
      zoom: 14,
      preserveDrawingBuffer: true,
    });

    // set Map to Store
    mapStore.set(map);

    // Add Geolocate Control
    geolocate = new mapbox.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserLocation: true,
      showAccuracyCircle: false,
    });

    map.addControl(geolocate);

    // Add Draw Control
    let modes = MapboxDraw.modes;
    modes = MapboxDrawGeodesic.enable(modes);
    draw = new MapboxDraw({
      modes: modes as any,
    });

    map.addControl(draw);

    // Add Marker
    marker = new mapbox.Marker();
    markerStore.set(marker);

    // Change Cursor on Draw Mode
    map.on("draw.modechange", (e) => {
      if (
        e.mode === "draw_circle" ||
        e.mode === "draw_polygon" ||
        e.mode === "draw_line_string"
      ) {
        map.getCanvas().style.cursor = "crosshair";
      } else {
        map.getCanvas().style.cursor = "";
      }
    });

    // Measure Distance
    measureDistance = new MeasureDistance() as any;
    map.addControl(measureDistance as any, "top-right");

    // Add Layer
    map.on("load", () => {
      // Add Source Maps Soaraja
      map.addSource("maps_soaraja", {
        type: "vector",
        tiles: ["https://maps.joglopro.com/maps/soaraja/{z}/{x}/{y}.pbf"],
      });

      // Layer Area Jakarta
      map.addLayer({
        id: "area_jakarta",
        type: "line",
        source: "maps_soaraja",
        "source-layer": "jakarta_batas",
        paint: {
          "line-color": "rgba(213,168,97,1)",
          "line-width": 1,
        },
      });

      map.addLayer({
        id: "area_jakarta_fill",
        type: "fill",
        source: "maps_soaraja",
        "source-layer": "jakarta_batas",
        paint: {
          "fill-opacity": 0.0,
        },
      });

      // POI Layer
      PoiLayer();

      // NJOP Layer
      NJOPLayer();

      // Property Layer
      PropertyLayer();

      PropertyByBoundingBox(map, map.getBounds());

      map.on("moveend", () => {
        drawModeStore.subscribe((value) => {
          if (value === "") {
            PropertyByBoundingBox(map, map.getBounds());
          }
        });
      });

      map.on("zoomend", () => {
        drawModeStore.subscribe((value) => {
          if (value === "") {
            PropertyByBoundingBox(map, map.getBounds());
          }
        });
      });

      // Geolocate Event
      geolocate.on("geolocate", (e) => {
        drawModeStore.subscribe((value) => {
          if (value === "") {
            PropertyByBoundingBox(map, map.getBounds());
          }
        });
      });

      // Draw Event
      map.on("draw.create", (e) => {
        drawAction(e, map, listPropertyService);
      });

      map.on("draw.update", (e) => {
        drawAction(e, map, listPropertyService);
      });
    });
  };

  onMount(() => {});
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css"
    on:load={onLoadMap}
  />
</svelte:head>
<div class="w-full h-full">
  <div class="relative w-full h-screen">
    <!-- Map Container -->
    <div class="w-full h-full" bind:this={container}>
      <!-- Render Toolbox on Map rendered -->
      {#if map}
        <!-- Map Menu Control -->
        <Toolbox />
        <PoiFilter />
      {/if}
    </div>
  </div>
</div>
