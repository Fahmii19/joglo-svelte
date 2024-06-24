// Define the size and custom style for the pulsing dot
const size: number = 200;

// Non-Pulsing Dot
const nopulsingDot = {
  width: size,
  height: size,
  context: null as CanvasRenderingContext2D | null,
  data: new Uint8Array(size * size * 4),
  onAdd: function () {
    const canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext("2d");
  },
  render: function () {
    const radius = (size / 2) * 0.45;
    const context = this.context;

    context?.clearRect(0, 0, this.width, this.height);
    context?.beginPath();
    context?.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
    context!.fillStyle = "red";
    context!.strokeStyle = "white";
    context!.lineWidth = 16;

    // shadow
    context!.shadowColor = "black";
    context!.shadowBlur = 10;
    context!.shadowOffsetX = 5;
    context!.shadowOffsetY = 5;

    context?.fill();
    context?.stroke();

    // Reset shadow effects to avoid affecting other elements
    context!.shadowColor = "transparent";

    this.data = context?.getImageData(0, 0, this.width, this.height)
      .data as any;
    return true;
  },
};

const pulsingDot = {
  width: size,
  height: size,
  context: null as CanvasRenderingContext2D | null,
  data: new Uint8Array(size * size * 4),
  onAdd: function () {
    const canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext("2d");
  },

  render: function () {
    const duration = 1000;
    const t = (performance.now() % duration) / duration;

    const radius = (size / 2) * 0.45;
    const outerRadius = (size / 2) * 0.7 * t + radius;
    const context = this.context;

    context?.clearRect(0, 0, this.width, this.height);

    // Bagian untuk outer circle
    context?.beginPath();
    context?.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
    context!.fillStyle = `rgba(229,55,55, ${1 - t})`;
    context!.fill();

    // Bagian untuk inner circle
    context?.beginPath();
    context?.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
    context!.fillStyle = "rgba(229,55,55, 1)";
    context!.strokeStyle = "white";
    context!.lineWidth = 16;

    // shadow
    context!.shadowColor = "black";
    context!.shadowBlur = 10;
    context!.shadowOffsetX = 5;
    context!.shadowOffsetY = 5;

    context!.fill();
    context!.stroke();

    this.data = context?.getImageData(0, 0, this.width, this.height)
      .data as any;

    return true;
  },
};

export { nopulsingDot, pulsingDot };
