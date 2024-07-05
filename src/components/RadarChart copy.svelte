<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";

  let chartContainer;

  // Menentukan data untuk Radar Chart
  const data = [
    [
      { axis: "Battery Life", value: 0.22 },
      { axis: "Brand", value: 0.28 },
      { axis: "Contract Cost", value: 0.29 },
      { axis: "Design And Quality", value: 0.17 },
      { axis: "Connectivity", value: 0.22 },
      { axis: "Large Screen", value: 0.02 },
      { axis: "Price Of Device", value: 0.21 },
      { axis: "To Be A Smartphone", value: 0.5 },
    ],
    [
      { axis: "Battery Life", value: 0.27 },
      { axis: "Brand", value: 0.16 },
      { axis: "Contract Cost", value: 0.35 },
      { axis: "Design And Quality", value: 0.13 },
      { axis: "Connectivity", value: 0.2 },
      { axis: "Large Screen", value: 0.13 },
      { axis: "Price Of Device", value: 0.35 },
      { axis: "To Be A Smartphone", value: 0.38 },
    ],
  ];

  // Opsi untuk konfigurasi chart
  const options = {
    w: 190,
    h: 190,
    margin: { top: 20, right: 20, bottom: 20, left: 20 },
    levels: 3,
    maxValue: 0.5,
    labelFactor: 1.25,
    wrapWidth: 60,
    opacityArea: 0.35,
    dotRadius: 4,
    opacityCircles: 0.1,
    strokeWidth: 2,
    roundStrokes: false,
    color: d3.scaleOrdinal(d3.schemeCategory10),
  };

  onMount(() => {
    drawRadarChart();
  });

  // Fungsi untuk menggambar Radar Chart
  function drawRadarChart() {
    const cfg = {
      ...options,
      format: d3.format(".0%"),
      angleSlice: (Math.PI * 2) / data[0].length,
      rScale: d3
        .scaleLinear()
        .range([0, Math.min(options.w / 2, options.h / 2)])
        .domain([0, options.maxValue]),
    };

    d3.select(chartContainer).select("svg").remove();

    const svg = d3
      .select(chartContainer)
      .append("svg")
      .attr("width", cfg.w + cfg.margin.left + cfg.margin.right)
      .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
      .append("g")
      .attr(
        "transform",
        `translate(${cfg.w / 2 + cfg.margin.left}, ${cfg.h / 2 + cfg.margin.top})`
      );

    // Fungsi wrap untuk teks
    function wrap(text, width) {
      text.each(function () {
        let text = d3.select(this),
          words = text.text().split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.4,
          y = text.attr("y"),
          x = text.attr("x"),
          dy = parseFloat(text.attr("dy")),
          tspan = text
            .text(null)
            .append("tspan")
            .attr("x", x)
            .attr("y", y)
            .attr("dy", dy + "em");

        while ((word = words.pop())) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text
              .append("tspan")
              .attr("x", x)
              .attr("y", y)
              .attr("dy", ++lineNumber * lineHeight + dy + "em")
              .text(word);
          }
        }
      });
    }

    const axisGrid = svg.append("g").attr("class", "axisWrapper");

    axisGrid
      .selectAll(".levels")
      .data(d3.range(1, cfg.levels + 1).reverse())
      .enter()
      .append("circle")
      .attr("class", "gridCircle")
      .attr("r", (d) => cfg.rScale((cfg.maxValue * d) / cfg.levels))
      .style("fill", "#CDCDCD")
      .style("stroke", "#CDCDCD")
      .style("fill-opacity", cfg.opacityCircles)
      .style("filter", "url(#glow)");

    // Menambahkan teks dan garis pada setiap sumbu
    const axis = axisGrid
      .selectAll(".axis")
      .data(data[0])
      .enter()
      .append("g")
      .attr("class", "axis");

    axis
      .append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr(
        "x2",
        (d, i) =>
          cfg.rScale(options.maxValue * 1.1) *
          Math.cos(cfg.angleSlice * i - Math.PI / 2)
      )
      .attr(
        "y2",
        (d, i) =>
          cfg.rScale(options.maxValue * 1.1) *
          Math.sin(cfg.angleSlice * i - Math.PI / 2)
      )
      .attr("class", "line")
      .style("stroke", "white")
      .style("stroke-width", "2px");

    axis
      .append("text")
      .attr("class", "legend")
      .style("font-size", "11px")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr(
        "x",
        (d, i) =>
          cfg.rScale(options.maxValue * cfg.labelFactor) *
          Math.cos(cfg.angleSlice * i - Math.PI / 2)
      )
      .attr(
        "y",
        (d, i) =>
          cfg.rScale(options.maxValue * cfg.labelFactor) *
          Math.sin(cfg.angleSlice * i - Math.PI / 2)
      )
      .text((d) => d.axis)
      .call(wrap, cfg.wrapWidth);
  }
</script>

<div bind:this={chartContainer}></div>

<style>
  .axisWrapper .gridCircle {
    fill: none;
    stroke: #eceff1;
    stroke-width: 0.5px;
  }
  .axisWrapper .axis .line {
    stroke: grey;
    stroke-width: 0.5px;
  }
  .axisWrapper .axis .legend {
    fill: #737373;
    font-size: 10px;
    font-family: Arial;
  }
</style>
