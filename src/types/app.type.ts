export type DIR_PATH_TO_ASSET_IMAGE = '/images';
export type DIR_PATH_TO_ASSET_IMAGE_LOGOS = `${DIR_PATH_TO_ASSET_IMAGE}/logos`;
export type INTERNAL_LINK_PATH_ASSET_IMAGE =
  | `${DIR_PATH_TO_ASSET_IMAGE}/${string}`
  | `${DIR_PATH_TO_ASSET_IMAGE_LOGOS}/${string}`;
