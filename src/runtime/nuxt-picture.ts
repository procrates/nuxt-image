import nuxtImageMixin from './nuxt-image-mixins'

import './nuxt-image.css'

const pictureHTML = ({ generatedSrc, width, height, renderImgAttributesToString, sizes, renderAttributesToString }) =>
`<picture>
${sizes.map(s => `<source ${renderAttributesToString({ type: s.format, media: s.media, srcset: s.url })}>`).join('\n')}
<img class="__nim_org" ${renderImgAttributesToString({ src: generatedSrc, width, height })}>
</picture>
`

export default {
  name: 'NuxtPicture',
  mixins: [nuxtImageMixin],
  computed: {
    generatedSrc () {
      const [size] = this.sizes
      if (size) {
        if (this.isModernFormat(size)) {
          return this.generateSizedImage(size.width, size.height, 'jpeg')
        } else {
          return this.sizes[0].url
        }
      }
      return this.src
    }
  },
  render (h) {
    if (this.error) {
      return h('div', {
        class: ['__nim_w'].concat(this.$attrs.class || '')
      }, [this.error])
    }
    if (this.legacy) {
      return this.renderLegacy(h)
    }
    const bluryImage = h('img', {
      class: '__nim_full __nim_blur',
      attrs: {
        src: this.blurry,
        alt: this.alt
      }
    })

    const originalImage = h('img', {
      class: ['__nim_org'],
      attrs: {
        src: this.loading ? this.generatedSrc : undefined,
        width: this.width,
        height: this.height,
        ...this.imgAttributes
      },
      on: {
        load: () => {
          this.loaded = true
        }
      }
    })
    const sources = this.sizes.map(size => h('source', {
      attrs: {
        srcset: size.url,
        type: size.format ? size.format : undefined,
        media: size.media ? size.media : undefined
      }
    }))
    const picture = h('picture', {}, [
      ...sources.reverse(),
      originalImage
    ])

    let noScript = null
    if (this.noScript) {
      noScript = h('noscript', {
        domProps: { innerHTML: pictureHTML(this) }
      }, [])
    }

    const placeholder = h('div', {
      class: '__nim_pl',
      style: {
        paddingBottom: this.height ? `${this.height}` : undefined
      }
    })

    const wrapper = h('div', {
      style: {
        width: this.width ? this.width : undefined
      },
      class: ['__nim_w', this.loaded ? 'visible' : '']
    }, [bluryImage, picture, noScript, placeholder])

    return wrapper
  },
  methods: {
    renderLegacy (h) {
      const sources = this.sizes.map(size => h('source', {
        attrs: {
          srcset: size.url,
          type: size.format ? size.format : undefined,
          media: size.media ? size.media : undefined
        }
      }))
      const originalImage = h('img', {
        class: '__nim_org',
        attrs: {
          src: this.generatedSrc,
          srcset: this.generatedSrcset,
          sizes: this.generatedSizes,
          ...this.imgAttributes
        }
      })
      return h('picture', {}, [
        ...sources.reverse(),
        originalImage
      ])
    },
    isModernFormat ({ url, format }) {
      const type = format || url.split('.').pop()
      switch (type) {
        case 'webp':
          return true
        default: return false
      }
    }
  }
}
