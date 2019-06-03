const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: "A4",
  // orientation: "landscape",
  pixelsPerInch: 300 // for print, 72 for display on digital screens
};

const sketch = () => {
  const createGrid = dimension =>
    Array.from({ length: dimension }, (item, idx) => idx)
      .map(x =>
        Array.from({ length: dimension }, (item, idx) => idx).map(y => [
          dimension <= 1 ? 0.5 : x / (dimension - 1),
          dimension <= 1 ? 0.5 : y / (dimension - 1)
        ])
      )
      .flat();
  random.setSeed(512);
  const points = createGrid(100).filter(() => random.value() > 0.6);
  const margin = 300;
  console.log(points);
  return ({ context, width, height }) => {
    context.fillStyle = "wheat";
    points.forEach(([u, v]) => {
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);
      context.beginPath();
      context.arc(x, y, 10, 0, Math.PI * 2, false);
      context.lineWidth = 10;
      context.stroke();
    });
  };
};

canvasSketch(sketch, settings);
