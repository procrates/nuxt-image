import Vue from 'vue'
import NuxtImage from '~image/nuxt-image'
import NuxtPicture from '~image/nuxt-picture'
import { createImage } from '~image/image'

<%=Object.entries(options.imports).map(([name, path]) => `import ${name} from '${path}'`).join('\n')%>

const intersectOptions = <%= devalue(options.intersectOptions) %>
const defaultProvider = '<%= options.defaultProvider %>'
const responsiveSizes = '<%= options.sizes %>'
const presets = <%= devalue(options.presets) %>
const providers = {}
<% for (provider of options.providers) { %>
// <%= provider.name %>
providers['<%= provider.name %>'] = {
  provider: <%= provider.import %>,
  defaults: <%= JSON.stringify(provider.options || {}, null, 2) %>
}
<% } %>

Vue.component(NuxtImage.name, NuxtImage)
Vue.component(NuxtPicture.name, NuxtPicture)
Vue.component('NuxtImg', NuxtImage)
<% if (features.componentAliases) { %>Vue.component('NImg', NuxtImage)
Vue.component('NPicture', NuxtPicture)<% } %>


// TODO: directly plugin into vue
export default function (context, inject) {
  const image = createImage(context, {
    defaultProvider,
    providers,
    presets,
    intersectOptions,
    responsiveSizes
  })

  inject('img', image)
}
