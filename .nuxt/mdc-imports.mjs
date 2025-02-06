import _Highlight from 'D:/Files/Desktop/CELEHS-Data-Science-Summer-Camp-camp/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"light":"github-light","dark":"github-dark"}}