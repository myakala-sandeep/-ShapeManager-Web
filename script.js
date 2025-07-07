 document.addEventListener('DOMContentLoaded', () => {
  const shapeSelect = document.getElementById('shape');
  const baseGroup = document.getElementById('base-group');
  const heightGroup = document.getElementById('height-group');
  const sideGroup = document.getElementById('side-group');

  function updateInputs() {
    const shape = shapeSelect.value;
    baseGroup.style.display = shape === 'triangle' ? 'block' : 'none';
    heightGroup.style.display = shape === 'triangle' ? 'block' : 'none';
    sideGroup.style.display = shape === 'triangle' ? 'none' : 'block';
  }

  shapeSelect.addEventListener('change', updateInputs);
  updateInputs();
});

function printDetails() {
  const shape = document.getElementById('shape').value;
  const base = parseFloat(document.getElementById('base').value);
  const height = parseFloat(document.getElementById('height').value);
  const side = parseFloat(document.getElementById('side').value);
  const color = document.getElementById('color').value;
  const unit = document.getElementById('unit').value;
  const outlineThickness = document.getElementById('outlineThickness').value;
  const outlineColor = document.getElementById('outlineColor').value;
  const outlineStyle = document.getElementById('outlineStyle').value;

  let area = 0;
  if (shape === 'triangle') {
    area = 0.5 * base * height;
  } else if (shape === 'pentagon') {
    area = 1.72048 * side * side;
  } else if (shape === 'hexagon') {
    area = 2.598 * side * side;
  }

  const output = `
    <h2>${shape.toUpperCase()} Details</h2>
    <p><strong>Color:</strong> ${color}</p>
    <p><strong>Unit:</strong> ${unit}</p>
    <p><strong>Outline Thickness:</strong> ${outlineThickness}</p>
    <p><strong>Outline Color:</strong> ${outlineColor}</p>
    <p><strong>Outline Style:</strong> ${outlineStyle}</p>
    ${shape === 'triangle' ? `<p><strong>Base:</strong> ${base} ${unit}</p>` : ''}
    ${shape === 'triangle' ? `<p><strong>Height:</strong> ${height} ${unit}</p>` : ''}
    ${(shape === 'pentagon' || shape === 'hexagon') ? `<p><strong>Side:</strong> ${side} ${unit}</p>` : ''}
    <p><strong>Area:</strong> ${area.toFixed(2)} ${unit}<sup>2</sup></p>
  `;

  document.getElementById('output').innerHTML = output;
}