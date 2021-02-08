---
title: Create Custom Provider
description: 'The image module offers internal providers and the possibility to write custom integration.'
category: Advanced
position: 502
---

## Provider Entry

The runtime will receive a source, image modifiers and its provider options. It is responsible for generating a url for optimized images, and needs to be isomorphic because it may be called on either server or client.

```js
import { joinURL } from 'ufo'
// import {} from '~image'

export function getImage(src, { modifiers, baseURL } = {}) {
  const { width, height, format, fit, ...providerModifiers } = modifiers
  const operations = []
  // process modifiers
  const operationsString = operations.join(',')
  return {
    url: joinURL(baseURL, operationsString, src)
  }
}
```

### Parameters

- `src`: Source path of the image.
- `modifiers`: List of image modifiers that are defined in the image component or as a preset.
- `options`: `runtimeOptions` returned by the main provider.

### Return

- `url`: Absolute or relative url of optimized image.
- `isStatic`: A boolean value that determines whether the image should generate on static generation or not. If it is `true` during `nuxt generate` this image will be downloaded and saved in `generate.outDir` to be served as a static image.

## Use your provider

### Register provider

After you create your own provider, you should register it in the `nuxt.config`. In order to do that create a property inside `image.provider`.

```js
export default {
  ...
  image: {
    providers: {
      customProvider: {
        name: 'customProvider', // optional value to overrider provider name
        provider: '~/providers/custom', // Path to custom provider
        options: {
          // ... provider options
        }
      }
    }
  }
}
```

There are plenty of useful utilities that can be used to write providers by importing from `~img`. See [src/runtime/providers](https://github.com/nuxt/image/tree/dev/src/runtime/providers) for more info.
