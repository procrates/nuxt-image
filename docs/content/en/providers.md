---
title: Providers
description: 'Nuxt Image supports multiple providers for high performances.'
position: 103
category: 'Getting Started'
---

## Static Images

For static projects (`target: 'static'`) image module automatically optimizes `src` for both local and external assets via a preconfigured instance of [IPX](/providers/ipx) during development and generation (`nuxt generate`) so you don't have to worry about choosing a hosting.

## Image Providers

With a server/serverless target or with dynamic images that aren't known at generation-time we need a runtime image provider.

Providers are an integration between the image module and image service providers. Using a specific provider means that your images will be transformed into URLs from the image service.

There are plenty of image service providers. Nuxt image has a generic way to work with external providers. Here is a complete list of providers that are supported out-of-the-box and can be easily configured to use.

- [`Cloudinary`](/providers/cloudinary)
- [`Fastly`](/providers/fastly)
- [`Imgix`](/providers/imgix)
- [`IPX`](/providers/ipx) (selfhosted)
- [`Twicpics`](/providers/twicpics)

If you are looking for a specific provider outside of this list, you can [create your own provider](/advanced/custom-provider).
