var game = require('voxel-hello-world')

var voxelEl = document.querySelector('#voxel')
var chunkEl = document.querySelector('#chunk')

window.game = game // for debugging

game.voxelRegion.on('change', function(pos) {
  voxelEl.innerHTML = JSON.stringify(pos)
})

game.chunkRegion.on('change', function(pos) {
  chunkEl.innerHTML = JSON.stringify(pos)
})

