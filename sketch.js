const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const pallettes = require("nice-color-palettes");

const settings = {
  dimensions: "A4",
  // orientation: "landscape",
  pixelsPerInch: 300 // for print, 72 for display on digital screens
};

const sketch = () => {
  const palette = random.shuffle(random.pick(pallettes))
  const createGrid = dimension =>
    Array.from({ length: dimension }, (item, idx) => idx)
      .map(x =>
        Array.from({ length: dimension }, (item, idx) => idx).map(y => ({
          position: [
            dimension <= 1 ? 0.5 : x / (dimension - 1),
            dimension <= 1 ? 0.5 : y / (dimension - 1)
          ],
          color: random.pick(palette),
          radius: Math.max(0, 0.005 + random.gaussian() * 0.02)
        }))
      )
      .flat();
  random.setSeed(512);
  const points = createGrid(30).filter(() => random.value() > 0.5);
  const margin = 300;
  console.log(points);
  return ({ context, width, height }) => {
    context.fillStyle = "wheat";
    points.forEach(({ position: [u, v], radius, color }) => {
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);
      context.beginPath();
      context.arc(x, y, radius * width, 0, Math.PI * 2, false);
      context.fillStyle = color;
      context.fill();
    });
  };
};

canvasSketch(sketch, settings);
