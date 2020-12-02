---
title: Image Component
description: "List of available props for image component"
position: 7
category: Components
---

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
  - On the server-side rendering when the value equals to `auto` and `height` is set, `nuxt-img` will automatically detects image's size and calulates proper with based on image's aspect ratio and `height` value. (This not happens on client-side rendering)
  - On the server-side rendering the image will resize using calculated `width`

## `height`

Specify height of the image.  
`nuxt-img` uses this value to optimize the image as best as its possible:

- This value will set as `height` attribute of DOM element
- On `layout != "responsive"`
  - When both `width` and `height` are present and values isn't equal to `auto`, this value will use to resize the image.
  - On the server-side rendering when the value equals to `auto` and width is not set or equal to `auto`, `nuxt-img` will automatically detects image's size and use it. (This not happens on client-side rendering)
  - On the server-side rendering when the value equals to `auto` and `width` is set, `nuxt-img` will automatically detects image's size and calulates proper with based on image's aspect ratio and `width` value. (This not happens on client-side rendering)
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
      {
        name: "jpg-cover",
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
    <nuxt-img preset="jpg-cover" src="/nuxt-icon.png" width="150" height="150"></nuxt-img>
  </div>

  </code-block>
</code-group>

## `sizes`

The `sizes` attribute specifies the URL of the image to use in different situations. With `sizes`, the browser does the work of figuring out which image is best to load and render.  
In `nuxt-img` you can simply provide various sizes and width breakpoints to generate `srcset`. Resized images are automatically created from the image `src`.

A set is consists of `width` and `breakpoint` or `media`:

- `width`: Width of generated image for this set
- `breakpoint`: Minimum width of viewport to show the image
- `media`: Custom media query for the set, using `media` will override `breakpoint`

Note that you should define set in the ascending order of their width or break point.

### Simple string formatted usage

I this case you should create a comma separated list of sizes and breakpoints. Separate `breakpoint` and `width` of a set with `:`.

```vue{}[index.vue]
<template>
  <nuxt-img sizes="300,300:600,600:900" ... />
  <!--               |   |   |   |   | -->
  <!--------- width -^   |   |   |   | -->
  <!--                   |   |   |   | -->
  <!------- breakpoint --^   |   |   | -->
  <!---------------- width --^   |   | -->
  <!--                           |   | -->
  <!--------------- breakpoint --^   | -->
  <!------------------------ width --^ -->
</template>
```

### Advances array formatted usage

Using array will help you to create custom media queries of different sizes and have more conrtol on different viewport sizes.

```html{}[index.vue]
<template>
  <nuxt-img :sizes="sizes" ... />
</template>

<script>
  export default {
    data() {
      return {
        sizes: [
          {
            width: 300,
          },
          {
            breakpoint: 300,
            width: 600,
          },
          {
            media: "(min-width: 600px)", // same as breakpoint: 600
            width: 900,
          },
        ],
      };
    },
  };
</script>
```

## `layout`

The layout for the image.

- `responsive`: The image resizes to fit its container. Pass a "sizes" option if it isn't going to be the full width of the screen.

## `alt`

This prop specifies an alternate text for an image.

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

## `operations`

In addition of standard operation, every provider can have their own operation. For example Cloudinary supports lots of [transformations](/providers/cloudinary#cloudinary-operations). Using `operations` prop you can use these transformations.

<code-group>
  <code-block label="index.vue" active>

```html{}[index.vue]
<template>
  <nuxt-img
    provider="cloudinary"
    src="/remote/nuxt-org/blog/going-full-static/main.png"
    width="300"
    height="169"
    :operations="imageOperations"
  />
</template>

<script>
  export default {
    data() {
      return {
        imageOperations: {
          roundCorner: '0:100'
        }
      }
    }
  }
</script>
```

  </code-block>
  <code-block label="Preview">

  <div class="text-center p-4 bg-gray-800 rounded-b-md">
    <nuxt-img
      width="300" 
      height="169"
      provider="cloudinary"
      src="/remote/nuxt-org/blog/going-full-static/main.png" :operations="{ roundCorner: '0:100'}"
    />
    <a href="https://cloudinary.com/documentation/image_transformations#rounding_corners_and_creating_circular_images">
      Rounding values
    </a>
  </div>

  </code-block>
</code-group>
