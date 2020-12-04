---
title: Setup
description: ''
position: 2
category: Guide
---

Using image module in your NuxtJS project is only one command away ✨

## Installation

Add `@nuxt/image` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @nuxt/image
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @nuxt/image
  ```

  </code-block>
</code-group>


Next, you need to register module inside `nuxt.config`:

```js{}[nuxt.config.js]
export default {
  modules: [
    '@nuxt/image'
  ]
}
```

<alert type="success">

That's it! You can can start using [`<nuxt-img>`](/nuxt-img) and [`<nuxt-picture>`](/nuxt-picture) components in your Nuxt app ✨

</alert>

## Configure

Then, add `image` section in `nuxt.config.js`:

```js[nuxt.config.js]
export default {
  image: {
    // Options
  }
}
```

See [module options](/options).
