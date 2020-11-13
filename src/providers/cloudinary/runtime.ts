import { RuntimeProvider, ImageModifiers } from 'types'
import { cleanDoubleSlashes, createOperationsGenerator } from '~image/utils'

const operationsGenerator = createOperationsGenerator({
  keyMap: {
    fit: 'c',
    width: 'w',
    height: 'h',
    format: 'f',
    quality: 'q'
  },
  valueMap: {
    fit: {
      fill: 'fill',
      inside: 'pad',
      outside: 'lpad',
      cover: 'fit',
      contain: 'scale',
      minCover: 'mfit',
      minInside: 'mpad',
      thumbnail: 'thumb',
      cropping: 'crop',
      coverLimit: 'limit'
    }
  },
  joinWith: ',',
  formatter: (key, value) => `${key}_${value}`
})

const defaultModifiers = {
  format: 'auto',
  quality: 'auto'
}

export default <RuntimeProvider> {
  getImage (src: string, modifiers: ImageModifiers, options: any) {
    const mergeModifiers = {
      ...modifiers,
      format: modifiers.format || defaultModifiers.format,
      quality: modifiers.quality || defaultModifiers.quality
    }

    const srcWithoutExtension = src.replace(/\.[^/.]+$/, '')
    const operations = operationsGenerator(mergeModifiers as ImageModifiers)

    return {
      url: cleanDoubleSlashes(options.baseURL + '/' + operations + srcWithoutExtension)
    }
  }
}
