import * as turf from "@turf/turf";

class MeasureDistance {
  private _map: any;
  private _btn: HTMLButtonElement | undefined;
  private _container: Element | undefined;

  onAdd(map: any) {
    this._map = map;

    const geojson = {
      type: "FeatureCollection",
      features: [],
    };

    this._btn = document.createElement("button");
    this._btn.className = "mapboxgl-ctrl-icon mapboxgl-ctrl-measure-distance";
    this._btn.type = "button";
    this._btn.title = "Ukur Jarak";
    this._btn.ariaLabel = "Measure Distance";
    this._btn.onclick = () => {
      if (
        document.getElementsByClassName("mapboxgl-ctrl-measure-distance-active")
          .length == 0
      ) {
        map.getCanvas().style.cursor = "crosshair";
        if (this._btn) {
          this._btn.className =
            "mapboxgl-ctrl-icon mapboxgl-ctrl-measure-distance-active";
        }

        if (map.getSource("geojson") == undefined) {
          map.addSource("geojson", {
            type: "geojson",
            data: geojson,
          });

          map.addLayer({
            id: "measure-points",
            type: "circle",
            source: "geojson",
            paint: {
              "circle-radius": 5,
              "circle-color": "black",
              "circle-stroke-width": 2,
              "circle-stroke-color": "#fff",
            },
            filter: ["in", "$type", "Point"],
          });

          map.addLayer({
            id: "measure-lines",
            type: "line",
            source: "geojson",
            layout: {
              "line-cap": "round",
              "line-join": "round",
            },
            paint: {
              "line-color": "black",
              "line-width": 2.5,
            },
            filter: ["in", "$type", "LineString"],
          });

          map.addLayer({
            id: "measure-labels",
            type: "symbol",
            source: "geojson",
            layout: {
              "symbol-placement": "line",
              "text-field": "{distance}",
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-size": 16,
              "text-keep-upright": true,
              "text-offset": [0, 0.8],
              "text-allow-overlap": false,
              "text-ignore-placement": true,
              "text-justify": "auto",
              "text-anchor": "center",
            },
            paint: {
              "text-color": "black",
            },
            filter: ["in", "$type", "LineString"],
          });
        }

        map.on("click", (e: any) => {
          if (geojson.features.length > 1) {
            geojson.features.pop();
          }

          const point = {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [e.lngLat.lng, e.lngLat.lat],
            },
            properties: {
              id: String(new Date().getTime()),
              distance: "0 m",
            },
          };

          geojson.features.push(point as never);

          if (geojson.features.length > 0) {
            let list_point = geojson.features.filter(
              (point: any) => point.geometry.type == "Point"
            );

            for (let index = 0; index < list_point.length - 1; index++) {
              const point1 = list_point[index];
              const point2 = list_point[index + 1];
              const distance = turf.distance(point1, point2, {
                units: "meters",
              } as never);

              geojson.features.push({
                type: "Feature",
                geometry: {
                  type: "LineString",
                  coordinates: [
                    (point1 as any).geometry.coordinates,
                    (point2 as any).geometry.coordinates,
                  ],
                },
                properties: {
                  distance: distance.toFixed(2) + " m",
                },
              } as never);
            }
          }

          map.on("mouseenter", "measure-points", () => {
            map.getCanvas().style.cursor = "pointer";
          });

          map.on("mouseleave", "measure-points", () => {
            map.getCanvas().style.cursor = "crosshair";
          });

          if (map.getSource("geojson")) {
            map.getSource("geojson").setData(geojson);
          }
        });
      } else {
        geojson.features = [];
        map.getCanvas().style.cursor = "";
        if (this._btn) {
          this._btn.className =
            "mapboxgl-ctrl-icon mapboxgl-ctrl-measure-distance";
        }

        if (map.getSource("geojson")) {
          map.removeLayer("measure-points");
          map.removeLayer("measure-lines");
          map.removeLayer("measure-labels");
          map.removeSource("geojson");
        }
      }
    };

    this._container = document.getElementsByClassName(
      "mapboxgl-ctrl mapboxgl-ctrl-group"
    )[0];
    this._container.appendChild(this._btn);

    return this._container;
  }

  onRemove() {
    if (this._container && this._container.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
    this._map = undefined;
  }

  delteMeasure() {
    // Delete All Layer
    if (this._map.getSource("geojson")) {
      this._map.removeLayer("measure-points");
      this._map.removeLayer("measure-lines");
      this._map.removeLayer("measure-labels");
    }
  }

  getMeasureData() {
    if (this._map) {
      return this._map.getSource("geojson")._data;
    }

    return null;
  }
}

export default MeasureDistance;
