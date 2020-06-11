'use strict';

const fs = require('fs');
const path = require('path');

module.exports = (publicPath) => {
  try {
    // read the content of the mix-manifest.json
    const mixManifestPath = path.join(publicPath, 'mix-manifest.json')
    var manifest = fs.readFileSync(mixManifestPath)
  } catch (error) {
    // in case the "mixManifestPath" does not exist
    throw new Error('The Mix manifest does not exist.[' + error.message + ']')
  }

  // Parse the content of mix-manifest.json into object
  manifest = JSON.parse(manifest);

  return (srcPath) => {
    // get the "public" path of the passed "srcPath" from the manifest object
    const mixFilePath = manifest[srcPath];

    // in case the "public" path of the passed "srcPath" is not found
    if (!mixFilePath) {
      throw new Error(`Unable to locate Mix file: ${srcPath}. Please check your webpack.mix.js output paths and try again.`)
    }

    return mixFilePath;
  }
}