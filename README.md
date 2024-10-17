
Change import from workbox-webpack-plugin to @aaroon/workbox-rspack-plugin.

## Example
This codemod turns X into Y. It also does Z.
Note: this is a contrived example. Please modify it.

### Before

```ts
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
```

### After

```ts
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
```

