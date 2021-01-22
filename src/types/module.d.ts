import type { ImageOptions } from './image'

export interface InputProvider {
  name?: string
  provider?: string
  options?: any
  baseURL?: string
}

export interface ImageProviders {
  cloudinary?: InputProvider,
  fastly?: InputProvider,
  imagekit?: InputProvider,
  imgix?: InputProvider,
  twicpics?: InputProvider,
}

export interface ModuleOptions extends ImageProviders {
  provider: string
  presets: { [name: string]: ImageOptions }
  static: {
    baseURL: string
    dir: string
    clearCache: boolean | string
    cacheDir: string
    accept: string[]
    sharp: { [key: string]: any }
  }
  sizes?: (number|string)[],
  internalUrl?: string
  accept: any
  intersectOptions: object

  providers: { [name: string]: InputProvider | any } & ImageProviders
}
