// change the import package from workbox-webpack-plugin to @aaroon/workbox-rspack-plugin

import { GenerateSW, InjectManifest } from 'workbox-webpack-plugin';

export default {
  plugins: [
    new GenerateSW({
      // options
    }),
    // or
    new InjectManifest({
      // options
    }),
  ],
};