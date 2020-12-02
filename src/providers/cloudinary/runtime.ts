import { RuntimeProvider, ImageModifiers } from 'types'
import { createOperationsGenerator } from '~image/utils'

const convertHextoRGBFormat = (value: string) => value.startsWith('#') ? value.replace('#', 'rgb_') : value

const operationsGenerator = createOperationsGenerator({
  keyMap: {
    fit: 'c',
    width: 'w',
    height: 'h',
    format: 'f',
    quality: 'q',
    background: 'b',
    rotate: 'a',
    roundCorner: 'r',
    gravity: 'g',
    effect: 'e',
    color: 'co',
    flags: 'fl',
    dpr: 'dpr',
    opacity: 'o',
    overlay: 'l',
    underlay: 'u',
    transformation: 't',
    zoom: 'z',
    colorSpace: 'cs',
    customFunc: 'fn',
    density: 'dpi'
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
    },
    background (value: string) {
      return convertHextoRGBFormat(value)
    },
    color (value: string) {
      return convertHextoRGBFormat(value)
    },
    gravity: {
      auto: 'auto',
      subject: 'auto:subject',
      face: 'face',
      sink: 'sink',
      faceCenter: 'face:center',
      multipleFaces: 'faces',
      multipleFacesCenter: 'faces:center',
      north: 'north',
      northEast: 'north_east',
      northWest: 'north_west',
      west: 'west',
      southWest: 'south_west',
      south: 'south',
      southEast: 'south_east',
      east: 'east',
      center: 'center'
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
      ...defaultModifiers,
      ...modifiers
    }

    const srcWithoutExtension = src.replace(/\.[^/.]+$/, '')
    const operations = operationsGenerator(mergeModifiers as ImageModifiers)

    return {
      url: options.baseURL + '/' + operations + srcWithoutExtension
    }
  }
}
