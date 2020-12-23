import type { RuntimeProviderGetImage } from 'src'
import { createOperationsGenerator } from '@nuxt/image/runtime'

const operationsGenerator = createOperationsGenerator({
  valueMap: {
    fit: {
      fill: 'crop',
      inside: 'crop',
      outside: 'crop',
      cover: 'bounds',
      contain: 'bounds'
    }
  },
  joinWith: '&',
  formatter: (key, value) => `${key}=${value}`
})

export const getImage: RuntimeProviderGetImage = (src, { modifiers, baseURL }) => {
  const operations = operationsGenerator(modifiers)
  return {
    url: baseURL + src + '?' + operations
  }
}
