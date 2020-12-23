import { NuxtImg } from '../../src/runtime'
import { testComponent } from '../fixture/utils/img'

describe('Renders simple image', () => {
  testComponent(NuxtImg, {
    width: 200,
    height: 200,
    sizes: '200,500:500,900:900'
  })
})
