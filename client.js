var url = require('url')
var websocket = require('websocket-stream')
var MuxDemux = require('mux-demux')
var Model = require('scuttlebutt/model')
var duplexEmitter = require('duplex-emitter')

window.socket = websocket('ws://' + url.parse(window.location.href).host)
var emitter
var connected = false


var mdm = MuxDemux()
mdm.on('connection', function (stream) {
  if (stream.meta === "emitter") {
    window.emitter = emitter = duplexEmitter(stream)
    connected = true

    emitter.on('id', function(id) {
      console.log('id', id)
      playerID = id
    })

      emitter.on('settings', function(settings) {
      window.game = game = createGame(settings)
      
      //emitter.emit('generated', Date.now())
    })
  }
  // if (stream.meta === "voxels") {
  //    var voxels = new Model()
  //    voxels.on('update', function(data, value) {
  //      var val = data[1]
  //      var pos = data[0].split('|')
  //      var ckey = pos.splice(0,3).join('|')
  //      pos = {x: +pos[0], y: +pos[1], z: +pos[2]}
  //      var set = voxelAtChunkIndexAndVoxelVector(ckey, pos, val)
  //      game.showChunk(game.voxels.chunks[ckey])
  //    })
  // 
  //    stream.pipe(voxels.createStream()).pipe(stream)
  //}
})
socket.pipe(mdm).pipe(socket)
socket.on('end', function() { connected = false })

function createGame(options) {
	var game = require('voxel-hello-world')

	var voxelEl = document.querySelector('#voxel')
	var chunkEl = document.querySelector('#chunk')

	game.voxelRegion.on('change', function(pos) {
	  voxelEl.innerHTML = JSON.stringify(pos)
	})

	game.chunkRegion.on('change', function(pos) {
	  chunkEl.innerHTML = JSON.stringify(pos)
	})
}

