const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: "A4",
  orientation: 'landscape',
  pixelsPerInch: 300 // for print, 72 for display on digital screens
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "wheat";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "orange";
    context.arc(width / 2, height / 2, width * 0.2, 0, Math.PI * 2, false);
    context.fill();
    context.lineWidth = width * 0.05;
    context.strokeStyle = "lightblue";
    context.stroke();
  };
};

canvasSketch(sketch, settings);
