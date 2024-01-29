const ovuong = document.getElementById('ovuong')

for(let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement('div')
    cell.className = 'cell'
    ovuong.appendChild(cell)
  }
}