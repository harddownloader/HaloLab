// babel - https://babeljs.io/docs/en/babel-polyfill
import 'core-js'
import 'regenerator-runtime/runtime'
// react
import React from 'react'
import { render } from 'react-dom'

// components
import App from '@/App'
// styles
import '@/assets/scss/index.scss'

const rootElement = document.getElementById('root')

render(<App />, rootElement)
