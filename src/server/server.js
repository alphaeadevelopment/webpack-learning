import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'

import webpackConfig from '../../config/webpack.dev.js'

const app = express()
app.use(webpackDevMiddleware(webpack(webpackConfig)))

const publicPath = path.join(__dirname, '..', '..', 'dist')
app.use(express.static(publicPath))
const port = process.env.port || 3000
app.listen(port, () => {
  console.log(`Static webserver listening on ${port}`)
})

