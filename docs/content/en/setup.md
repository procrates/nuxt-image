---
title: Setup
description: 'Using image module in your NuxtJS project is only one command away ✨'
category: 'Getting Started'
position: 102
---

## Installation

Add `@nuxt/image` devDependency to your project:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add --dev @nuxt/image
```

  </code-block>
  <code-block label="NPM">

```bash
npm install -D @nuxt/image
```

  </code-block>
</code-group>

Add the module to the `buildModules` of your `nuxt.config`:

```ts [nuxt.config.js]
export default {
  buildModules: ['@nuxt/image']
}
```

<alert type="success">

That's it! You can can start using [`<nuxt-img>`](/components/nuxt-img) and [`<nuxt-picture>`](/components/nuxt-picture) components in your Nuxt app ✨

</alert>

## Configure

Add an `image` section in your `nuxt.config.js`:

```ts [nuxt.config.js]
export default {
  image: {
    // Options
  }
}
```

See [module options](/api/options).
