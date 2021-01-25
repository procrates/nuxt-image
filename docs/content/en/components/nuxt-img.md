---
title: <nuxt-img>
description: "List of available props for image component"
category: Components
position: 201
---

## `<nuxt-img>`

`<nuxt-img>` is a replacement for native `<img>` tag with no additional styles and supporting all native attributes.

- Use built-in static provder to optimize local and remote images
- Converts `src` to provider URL
- Automatically resize images based on `width` and `height` attributes
- Support `loading="lazy"` with wider range of browsers (see [native support](https://caniuse.com/loading-lazy-attr))
- Automatically generate `alt` attribute based on `src`
- Optionally generate responsive `srcSet` and `sizes` attrs with `responsive` prop

<code-group>
  <code-block label="index.vue" active>

  ```vue{}[index.vue]
  <template>
    <nuxt-img src="/nuxt-icon.png" />
  </template>
  ```

  </code-block>
  <code-block label="Preview">

  <div class="text-center p-4 bg-gray-800 rounded-b-md">
    <nuxt-img src="/nuxt-icon.png" />
  </div>

  </code-block>
</code-group>

## `src`

Path to image file. `src` sould be in form of absolute path and starts with `/`.

```vue
<template>
  <nuxt-img :src="src" ... />
</template>
```

The `src` has other capabilities in `nuxt-img`, you can provide provider and preset for the image right inside the `src` property.

## `width`

Specify width of the image.
`nuxt-img` uses this value to optimize the image as best as its possible:

- This value will set as `width` attribute of DOM element
- On `layout != "responsive"`
  - When both `width` and `height` are present and values isn't equal to `auto`, this value will use to resize the image.
  - On the server-side rendering when the value equals to `auto` and height is not set or equal to `auto`, `nuxt-img` will automatically detects image's size and use it. (This not happens on client-side rendering)
  - On the server-side rendering when the value equals to `auto` and `height` is set, `nuxt-img` will automatically detects image's size and calulates proper width based on image's aspect ratio and `height` value. (This not happens on client-side rendering)
  - On the server-side rendering the image will resize using calculated `width`

## `height`

Specify height of the image.
`nuxt-img` uses this value to optimize the image as best as its possible:

- This value will set as `height` attribute of DOM element
- On `layout != "responsive"`
  - When both `width` and `height` are present and values isn't equal to `auto`, this value will use to resize the image.
  - On the server-side rendering when the value equals to `auto` and width is not set or equal to `auto`, `nuxt-img` will automatically detects image's size and use it. (This not happens on client-side rendering)
  - On the server-side rendering when the value equals to `auto` and `width` is set, `nuxt-img` will automatically detects image's size and calulates proper height based on image's aspect ratio and `width` value. (This not happens on client-side rendering)
  - On the server-side rendering the image will resize using calculated `height`

### Provider

Nuxt image module will allow you to modify and serve your images using cloud services like Cloudinary. In order to use a provider you should:

1. Define provider and its option in `nuxt.config`.
2. Specify providers name in `nuxt-img` component

<code-group>
  <code-block label="index.vue" active>

```html{}[index.vue]
<template>
  <nuxt-img
    provider="cloudinary"
    src="/remote/nuxt-org/blog/going-full-static/main.png"
    width="300"
    height="169"
  />
</template>
```

  </code-block>
  <code-block label="nuxt.config.js">

```js{}[nuxt.config.js]
export default {
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/nuxt/image/upload/",
    },
  },
};
```

  </code-block>
  <code-block label="Preview">

  <div class="text-center p-4 bg-gray-800 rounded-b-md">
    <nuxt-img provider="cloudinary" src="/remote/nuxt-org/blog/going-full-static/main.png" width="300" height="169"></nuxt-img>
  </div>

  </code-block>
</code-group>

<!-- TODO: multiple providers -->
<!-- TODO: default provider -->

### Preset

Presets are predefined sets of image modifiers that can be used create unified form of images in your projects. You can write your presets inside `nuxt.config` and then use them in `nuxt-img`.

<code-group>
  <code-block label="index.vue" active>

```html{}[index.vue]
<template>
  <nuxt-img preset="jpg-cover" src="/nuxt-icon.png" width="50" height="50" />
</template>
```

  </code-block>
  <code-block label="nuxt.config.js">

```js{}[nuxt.config.js]
export default {
  image: {
    presets: [
      cover: {
        modifiers: {
          fit: "cover",
          format: "jpg",
          width: 300,
          height: 300,
        },
      },
    ],
  },
};
```

  </code-block>
  <code-block label="Preview">

  <div class="text-center p-4 bg-gray-800 rounded-b-md">
    <nuxt-img preset="cover" src="/nuxt-icon.png" width="150" height="150"></nuxt-img>
  </div>

  </code-block>
</code-group>

## `format`

In case you want to serve images in specific format, use this prop.

```html{}[index.vue]
<template>
  <nuxt-img format="webp" src="/nuxt-icon.png" ... />
</template>
```

Available format are `webp`, `jpeg`, `jpg`, `png`, `gif` and `svg`. If format is not specified, it will respect the default image format.

## `quality`

The quality for generated images.

## `fit`

The `fit` property specifies the size of the images.
There are five standard values you can use with this property.

- `cover`: (default) Preserving aspect ratio, ensure the image covers both provided dimensions by cropping/clipping to fit
- `contain`: Preserving aspect ratio, contain within both provided dimensions using "letterboxing" where necessary.
- `fill`: Ignore the aspect ratio of the input and stretch to both provided dimensions.
- `inside`: Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified.
- `outside`: Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to both those specified.

<code-group>
  <code-block label="index.vue" active>

```html{}[index.vue]
<template>
  <nuxt-img fit="cover" src="/nuxt-icon.png" width="200" height="100" />
</template>
```

  </code-block>
  <code-block label="Preview">

  <div class="text-center p-4 bg-gray-800 rounded-b-md">
  <nuxt-img fit="cover" src="/nuxt-icon.png" width="200" height="100" />
  </div>

  </code-block>
</code-group>

<alert type="info">

Some providers provide additional values beside the above standard ones, such as [Cloudinary values](/providers/cloudinary#cloudinary-fit-values) for extra resizing effect.

</alert>

## `modifiers`

In addition of standard operation, every provider can have their own operation. For example Cloudinary supports lots of [transformations](/providers/cloudinary#cloudinary-operations). Using `modifiers` prop you can use these transformations.

<code-group>
  <code-block label="index.vue" active>

```html{}[index.vue]
<template>
  <nuxt-img
    provider="cloudinary"
    src="/remote/nuxt-org/blog/going-full-static/main.png"
    width="300"
    height="169"
    :modifiers="{ roundCorner: '0:100' }"
  />
</template>
```

  </code-block>
  <code-block label="Preview">

  <div class="text-center p-4 bg-gray-800 rounded-b-md">
    <nuxt-img
      width="300"
      height="169"
      provider="cloudinary"
      src="/remote/nuxt-org/blog/going-full-static/main.png" :modifiers="{ roundCorner: '0:100'}"
    />
    <a href="https://cloudinary.com/documentation/image_transformations#rounding_corners_and_creating_circular_images">
      Rounding values
    </a>
  </div>

  </code-block>
</code-group>
