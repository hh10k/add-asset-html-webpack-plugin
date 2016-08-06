export type Asset = {
  filepath: string,
  typeOfAsset?: string,
  includeSourcemap?: boolean,
  hash?: boolean,
  outputPath?: string,
  publicPath?: string,
};

export type ArrayOfAssets = Array<Asset>;
