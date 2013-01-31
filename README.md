# voxel-multiplayer

This is another take on [voxel-server](https://github.com/maxogden/voxel-server) to make it more modular.

At this point it is not multiplayer - the client script, client.js, is not yet talking to server.js.

It currently uses [voxel-hello-world](https://github.com/maxogden/voxel-hello-world) and [voxel-region-change](https://github.com/maxogden/voxel-region-change) to demonstrate the voxel world and how to access the location of the player. The module voxel-region-change is used to get events when the player changes voxels or chunks. Next step is to modify server.js to use voxel-region-change.

Learn more at http://voxeljs.com

# Get it running on your machine

The first time you set up, you should install the required npm packages:

```
cd voxel-hello-world
npm install
make
```

Then run the start script (which you'll need to do every time you want to run the demo):

```
npm start
```

Then point your browser to [http://localhost:8080](http://localhost:8080) and have fun!

## How does this work?

voxel.js modules use [browserify](http://browserify.org) for packaging modules together into game bundles. This means that every time you change code in your game you have to build a new bundle in order to test it out. Luckily this is very easy and is automated. When you run the `npm start` script, it runs a local server. The server code is in server.js.

The client code is in client.js. If you make changes to it, run make to compile it.

## license

BSD
