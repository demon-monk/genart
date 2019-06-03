const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "wheat";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "orange";
    context.arc(width / 2, height / 2, 500, 0, Math.PI * 2, false);
    context.fill();
    context.lineWidth = 20;
    context.strokeStyle = "lightblue"
    context.stroke();
  };
};

canvasSketch(sketch, settings);
