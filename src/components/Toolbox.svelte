<script lang="ts">
  import StickIcon from "../assets/images/stick-map.png";
  import RulerIcon from "../assets/images/penggaris-map.png";
  import RadiusIcon from "../assets/images/radius.png";
  import PentagonIcon from "../assets/images/pentagon.png";
  import LayerIcon from "../assets/images/layer-map.png";
  import MyLocationIcon from "../assets/images/my-location.png";
  import PlusIcon from "../assets/images/plus.png";
  import MinIcon from "../assets/images/minus.png";

  import { tooltip } from "../store/tootlip";
  import { Tooltip } from "flowbite-svelte";

  import { getContext } from "svelte";
  import { key } from "../store/map";
  import {
    njopDetectedStore,
    popupStore,
    drawModeStore,
  } from "../utils/layers";

  //  get value from context
  const { getMap, getGeolocate, getDraw } = getContext<any>(key);
  const map = getMap();
  const geolocate = getGeolocate();
  const draw = getDraw();

  let tooltipValue = "";

  tooltip.subscribe((value) => {
    tooltipValue = value;
  });

  // Get Njop Detected
  let njopDetected = false;

  njopDetectedStore.subscribe((value) => {
    njopDetected = value;
  });

  // Popup
  let popup = null;

  popupStore.subscribe((value) => {
    popup = value;
  });

  const onHover = (value: string): void => {
    tooltip.set(value);
  };

  const onActiveCliked = (value: string): void => {
    // All Button Chip
    const allChip = document.querySelectorAll(
      "[id^='toolbox-']"
    ) as NodeListOf<HTMLDivElement>;

    // Function for check draw mode exist or not
    const checkDrawMode = (): boolean => {
      // Remove Draw Layer
      if (draw?.getAll().features.length > 0) {
        draw.deleteAll();

        // Set Null Source Property
        map.getSource("property").setData({
          type: "FeatureCollection",
          features: [],
        });

        // Set Empty Draw Mode Store
        drawModeStore.set("");

        return true;
      }

      return false;
    };

    // Add Background Color if clicked chip already active
    const chipClicked = document.getElementById(
      "toolbox-" + value
    ) as HTMLDivElement;

    // Detector Clicked
    if (value === "Detector") {
      if (!njopDetected) {
        njopDetectedStore.set(true);
      } else {
        njopDetectedStore.set(false);

        // Remove Popup
        popup!.remove();
      }
    }

    // Map Layer Clicked
    if (value === "Layer") {
      checkDrawMode();
      const listMapLayer = document.getElementById(
        "list-map-layer"
      ) as HTMLDivElement;

      listMapLayer.classList.toggle("hidden");
    }

    // Zoom In & Zoom Out
    if (value === "ZoomIn") {
      map.zoomIn();
      return;
    } else if (value === "ZoomOut") {
      map.zoomOut();
      return;
    }

    // Remove Measure Distance
    const measureDistanceActive = document.querySelector(
      ".mapboxgl-ctrl-measure-distance-active"
    ) as HTMLElement;
    if (measureDistanceActive) {
      measureDistanceActive.click();
    }

    // Draw Circle
    if (value === "Radius") {
      if (checkDrawMode()) {
        chipClicked.classList.remove("bg-slate-200");
        return;
      }
      draw.changeMode("draw_circle");

      // Change Cursor
      map.getCanvas().style.cursor = "crosshair";

      drawModeStore.set("draw_circle");
    }

    // Draw Polygon
    if (value === "Polygon") {
      if (checkDrawMode()) {
        chipClicked.classList.remove("bg-slate-200");
        return;
      }
      draw.changeMode("draw_polygon");

      // Change Cursor
      map.getCanvas().style.cursor = "crosshair";
      drawModeStore.set("draw_polygon");
    }

    // Draw Line
    if (value === "Penggaris") {
      // Trigger  Measure Distance
      const measureDistanceButton = document.querySelector(
        ".mapboxgl-ctrl-measure-distance"
      ) as HTMLElement;

      // Check if measure distance is active or not
      if (measureDistanceActive === null) {
        measureDistanceButton.click();
        // Change Cursor
        map.getCanvas().style.cursor = "crosshair";
      }
    }

    // GPS
    if (value === "GPS") {
      // Check geolcate is add to map or not
      geolocate.trigger();
    }

    // Excluded Toolbox
    const excludedToolbox = ["ZoomIn", "ZoomOut", "Layer"];
    if (excludedToolbox.includes(value)) {
      return;
    }

    if (chipClicked.classList.contains("bg-slate-200")) {
      chipClicked.classList.remove("bg-slate-200");
      map.getCanvas().style.cursor = "";
      return;
    }

    allChip.forEach((chip) => {
      chip.classList.remove("bg-slate-200");
    });

    // Add Class
    chipClicked.classList.add("bg-slate-200");
  };
</script>

<div class="absolute bottom-[10rem] right-3 h-auto">
  <div class="h-[18vh] w-[1.9vw] bg-white rounded-md grid grid-rows-4 divide-y">
    <!--  -->

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="w-full h-full flex justify-center items-center cursor-pointer"
      id="toolbox-Detector"
      on:click={() => onActiveCliked("Detector")}
      on:mouseenter={() => onHover("Detector")}
    >
      <img
        class="w-4 h-4 object-contain"
        src={StickIcon}
        alt="Icon Navigation"
      />
    </div>

    <!--  -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="w-full h-full flex justify-center items-center cursor-pointer"
      id="toolbox-Penggaris"
      on:click={() => onActiveCliked("Penggaris")}
      on:mouseenter={() => onHover("Penggaris")}
    >
      <img
        class="w-4 h-4 object-contain"
        src={RulerIcon}
        alt="Icon Navigation"
      />
    </div>

    <!--  -->

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="w-full h-full flex justify-center items-center cursor-pointer"
      id="toolbox-Radius"
      on:click={() => onActiveCliked("Radius")}
      on:mouseenter={() => onHover("Radius")}
    >
      <img
        class="w-3.5 h-3.5 object-contain"
        src={RadiusIcon}
        alt="Icon Navigation"
      />
    </div>

    <!--  -->

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore missing-declaration -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="w-full h-full flex justify-center items-center cursor-pointer"
      id="toolbox-Polygon"
      on:click={() => onActiveCliked("Polygon")}
      on:mouseenter={() => onHover("Polygon")}
    >
      <img
        class="w-3.5 h-3.5 object-contain"
        src={PentagonIcon}
        alt="Icon Navigation"
      />
    </div>

    <!--  -->
  </div>
  <!--  -->
  <div class="mt-5"></div>

  <div class="h-[18vh] w-[1.9vw] bg-white rounded-md grid grid-rows-4 divide-y">
    <!--  -->

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="w-full h-full flex justify-center items-center cursor-pointer"
      id="toolbox-Layer"
      on:click={() => onActiveCliked("Layer")}
      on:mouseenter={() => onHover("Layer")}
    >
      <img
        class="w-4 h-4 object-contain"
        src={LayerIcon}
        alt="Icon Navigation"
      />
    </div>

    <!--  -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="w-full h-full flex justify-center items-center p-1 cursor-pointer"
      id="toolbox-GPS"
      on:click={() => onActiveCliked("GPS")}
      on:mouseenter={() => onHover("GPS")}
    >
      <img
        class="w-4 h-4 object-contain"
        src={MyLocationIcon}
        alt="Icon Navigation"
      />
    </div>

    <!--  -->

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="w-full h-full flex justify-center items-center cursor-pointer"
      id="toolbox-ZoomIn"
      on:click={() => onActiveCliked("ZoomIn")}
      on:mouseenter={() => onHover("Zoom In")}
    >
      <img
        class="w-3 h-3 object-contain"
        src={PlusIcon}
        alt="Icon Navigation"
      />
    </div>

    <!--  -->

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="w-full h-full flex justify-center items-center cursor-pointer"
      id="toolbox-ZoomOut"
      on:click={() => onActiveCliked("ZoomOut")}
      on:mouseenter={() => onHover("Zoom Out")}
    >
      <img class="w-3 h-3 object-contain" src={MinIcon} alt="Icon Navigation" />
    </div>

    <div
      id="list-map-layer"
      class="z-10 bg-white divide-y divide-gray-100 rounded shadow w-40 dark:bg-gray-700 absolute hidden"
      style="right: 100%; margin-right: 10px; margin-top: -3.5rem;"
    >
      <div class="py-1">
        <div
          class="flex items-center mb-3 px-2 cursor-pointer"
          style="padding-top:0.55rem;"
        >
          <input
            checked
            id="radio-default"
            type="radio"
            value="Default"
            name="map-layer"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
          />
          <label
            for="radio-default"
            class="ml-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300"
            >Default</label
          >
        </div>
        <div class="flex items-center mb-2 mt-2 px-2 cursor-pointer">
          <input
            id="radio-satellite"
            type="radio"
            value="Satellite"
            name="map-layer"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
          />
          <label
            for="radio-satellite"
            class="ml-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300"
            >Satellite</label
          >
        </div>
        <div class="flex items-center px-2 pb-3 cursor-pointer">
          <input
            id="radio-street"
            type="radio"
            value="Street"
            name="map-layer"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
          />
          <label
            for="radio-street"
            class="ml-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300"
            >Street</label
          >
        </div>
      </div>
    </div>
  </div>

  <Tooltip
    triggeredBy="[id^='toolbox-']"
    placement="left"
    class="bg-white text-black z-[9999]"
  >
    {tooltipValue}
  </Tooltip>
</div>
