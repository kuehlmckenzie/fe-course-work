const table = document.createElement("table");
const row = table.insertRow();
const cellData = ["#ffc4da", "#fff0f0", "#ffe8e8"];
for (let i = 0; i < cellData.length; i++) {
  const cell = row.insertCell();
  cell.textContent = cellData[i];
  cell.classList.add(`cell-${i}`);
}

document.body.appendChild(table);
