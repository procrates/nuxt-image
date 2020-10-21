import fs from 'fs-extra'
import local from '~/src/providers/local'
import cloudinary from '~/src/providers/cloudinary'
import twicpics from '~/src/providers/twicpics'
import fastly from '~/src/providers/fastly'
import imgix from '~/src/providers/imgix'

const images = [
  {
    args: ['/test.png', {}],
    local: { isStatic: true, url: '/_image/local/local/_/_/test.png' },
    cloudinary: { url: '/test.png' },
    twicpics: { url: '/test.png?twic=v1/' },
    fastly: { url: '/test.png?' },
    imgix: { url: '/test.png?' }
  },
  {
    args: ['/test.png', { width: 200 }],
    local: { isStatic: true, url: '/_image/local/local/_/w_200/test.png' },
    cloudinary: { url: '/w_200/test.png' },
    twicpics: { url: '/test.png?twic=v1/cover=200x-' },
    fastly: { url: '/test.png?width=200' },
    imgix: { url: '/test.png?w=200' }
  },
  {
    args: ['/test.png', { height: 200 }],
    local: { isStatic: true, url: '/_image/local/local/_/h_200/test.png' },
    cloudinary: { url: '/h_200/test.png' },
    twicpics: { url: '/test.png?twic=v1/cover=-x200' },
    fastly: { url: '/test.png?height=200' },
    imgix: { url: '/test.png?h=200' }
  },
  {
    args: ['/test.png', { width: 200, height: 200 }],
    local: { isStatic: true, url: '/_image/local/local/_/s_200_200/test.png' },
    cloudinary: { url: '/w_200,h_200/test.png' },
    twicpics: { url: '/test.png?twic=v1/cover=200x200' },
    fastly: { url: '/test.png?width=200&height=200' },
    imgix: { url: '/test.png?w=200&h=200' }
  },
  {
    args: ['/test.png', { width: 200, height: 200, fit: 'contain' }],
    local: { isStatic: true, url: '/_image/local/local/_/s_200_200_contain/test.png' },
    cloudinary: { url: '/w_200,h_200,c_scale/test.png' },
    twicpics: { url: '/test.png?twic=v1/contain=200x200' },
    fastly: { url: '/test.png?width=200&height=200&fit=bounds' },
    imgix: { url: '/test.png?w=200&h=200&fit=fill' }
  },
  {
    args: ['/test.png', { width: 200, height: 200, fit: 'contain', format: 'jpeg' }],
    local: { isStatic: true, url: '/_image/local/local/jpeg/s_200_200_contain/test.png' },
    cloudinary: { url: '/w_200,h_200,c_scale,f_jpeg/test.png' },
    twicpics: { url: '/test.png?twic=v1/format=jpeg/contain=200x200' },
    fastly: { url: '/test.png?width=200&height=200&fit=bounds&format=jpeg' },
    imgix: { url: '/test.png?w=200&h=200&fit=fill&fm=jpeg' }
  }
]

describe('Providers', () => {
  test('local', async () => {
    const providerOptions = {}
    const providerDataExpectedkeys = ['runtime', 'runtimeOptions', 'middleware']
    const providerData = local(providerOptions)

    expect(Object.keys(providerData)).toEqual(expect.arrayContaining(providerDataExpectedkeys))
    // middleware
    expect(typeof providerData.middleware).toEqual('function')
    expect(providerData.middleware.length).toEqual(2)

    const isRuntimeExists = await fs.exists(providerData.runtime)
    expect(isRuntimeExists).toEqual(true)

    const runtime = (await import(providerData.runtime)).default
    expect(typeof runtime).toEqual('object')
    expect(typeof runtime.getImage).toEqual('function')

    for (const image of images) {
      const generated = runtime.getImage.call(null, ...image.args, providerData.runtimeOptions)
      expect(generated).toMatchObject(image.local)
    }
  })

  test('cloudinary', async () => {
    const providerOptions = {
      baseURL: '/'
    }
    const providerDataExpectedkeys = ['runtime', 'runtimeOptions']
    const providerData = cloudinary(providerOptions)

    expect(Object.keys(providerData)).toEqual(expect.arrayContaining(providerDataExpectedkeys))

    const isRuntimeExists = await fs.exists(providerData.runtime)
    expect(isRuntimeExists).toEqual(true)

    const runtime = (await import(providerData.runtime)).default
    expect(typeof runtime).toEqual('object')
    expect(typeof runtime.getImage).toEqual('function')

    for (const image of images) {
      const generated = runtime.getImage.call(null, ...image.args, providerData.runtimeOptions)
      expect(generated).toMatchObject(image.cloudinary)
    }
  })

  test('twicpics', async () => {
    const providerOptions = {
      baseURL: ''
    }
    const providerDataExpectedkeys = ['runtime', 'runtimeOptions']
    const providerData = twicpics(providerOptions)

    expect(Object.keys(providerData)).toEqual(expect.arrayContaining(providerDataExpectedkeys))

    const isRuntimeExists = await fs.exists(providerData.runtime)
    expect(isRuntimeExists).toEqual(true)

    const runtime = (await import(providerData.runtime)).default
    expect(typeof runtime).toEqual('object')
    expect(typeof runtime.getImage).toEqual('function')

    for (const image of images) {
      const generated = runtime.getImage.call(null, ...image.args, providerData.runtimeOptions)
      expect(generated).toMatchObject(image.twicpics)
    }
  })

  test('fastly', async () => {
    const providerOptions = {
      baseURL: ''
    }
    const providerDataExpectedkeys = ['runtime', 'runtimeOptions']
    const providerData = fastly(providerOptions)

    expect(Object.keys(providerData)).toEqual(expect.arrayContaining(providerDataExpectedkeys))

    const isRuntimeExists = await fs.exists(providerData.runtime)
    expect(isRuntimeExists).toEqual(true)

    const runtime = (await import(providerData.runtime)).default
    expect(typeof runtime).toEqual('object')
    expect(typeof runtime.getImage).toEqual('function')

    for (const image of images) {
      const generated = runtime.getImage.call(null, ...image.args, providerData.runtimeOptions)
      expect(generated).toMatchObject(image.fastly)
    }
  })

  test('imgix', async () => {
    const providerOptions = {
      baseURL: ''
    }
    const providerDataExpectedkeys = ['runtime', 'runtimeOptions']
    const providerData = imgix(providerOptions)

    expect(Object.keys(providerData)).toEqual(expect.arrayContaining(providerDataExpectedkeys))

    const isRuntimeExists = await fs.exists(providerData.runtime)
    expect(isRuntimeExists).toEqual(true)

    const runtime = (await import(providerData.runtime)).default
    expect(typeof runtime).toEqual('object')
    expect(typeof runtime.getImage).toEqual('function')

    for (const image of images) {
      const generated = runtime.getImage.call(null, ...image.args, providerData.runtimeOptions)
      expect(generated).toMatchObject(image.imgix)
    }
  })
})
