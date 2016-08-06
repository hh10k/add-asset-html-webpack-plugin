// @flow

import addAllAssetsToCompilation from './addAllAssetsToCompilation';

import type { Asset, ArrayOfAssets } from '../types';

export default class AddAssetHtmlPlugin {
  assets: ArrayOfAssets;

  constructor(assets: ArrayOfAssets|Asset|Object = []) {
    this.assets = Array.isArray(assets) ? assets.slice().reverse() : [assets];
  }

  /* istanbul ignore next: this would be integration tests */
  apply(compiler: Object) {
    compiler.plugin('compilation', compilation => {
      compilation.plugin('html-webpack-plugin-before-html-generation', (htmlPluginData, callback) => {
        addAllAssetsToCompilation(this.assets, compilation, htmlPluginData, callback);
      });
    });
  }
}
