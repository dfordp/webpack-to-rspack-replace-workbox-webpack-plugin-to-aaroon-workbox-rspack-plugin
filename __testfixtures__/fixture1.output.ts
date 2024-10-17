import { GenerateSW, InjectManifest } from '@aaroon/workbox-rspack-plugin';

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