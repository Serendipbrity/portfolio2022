const { defineConfig } = require('vite')
const reactRefresh = require('@vitejs/plugin-react-refresh')

module.exports = defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      input: 'src/index.js',
    },
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    jsxInject: `import React from 'react'`
  },
})
