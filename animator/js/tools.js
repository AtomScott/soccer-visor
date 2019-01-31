
function drawLink(link) {
  ctx.moveTo(link.source[0], link.source[1]);
  ctx.lineTo(link.target[0], link.target[1]);
}

function drawCell(cell) {
  if (!cell) return false;
  ctx.moveTo(cell[0][0], cell[0][1]);
  for (var j = 1, m = cell.length; j < m; ++j) {
    ctx.lineTo(cell[j][0], cell[j][1]);
  }
  ctx.closePath();
  return true;
}