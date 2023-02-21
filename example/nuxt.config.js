export default {
  head: {
    title: 'Nuxt Image Example'
  },
  modules: [
    '@nuxt/image-edge'
  ],
  image: {
    provider: 'netlify',
    domains: [
      'https://images.unsplash.com',
      'https://source.unsplash.com'
    ]
  }
}
