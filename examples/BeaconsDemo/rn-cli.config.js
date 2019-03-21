const metro = require('metro');
const path = require('path');

module.exports = {
  resolver: {
    blacklistRE: metro.createBlacklist([
      /react-native-beacons-manager\/node_modules\/.*/,
    ]),
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
      },
    ),
  },
  watchFolders: [path.join(process.cwd(), '../../')],
};
