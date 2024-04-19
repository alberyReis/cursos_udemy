const { series, parallel } = require('gulp')
const gulp = require('gulp')
const { appHTML, appCSS, appJs, appImg } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

module.exports.default = series(
  parallel(
    series(appHTML, appCSS, appJs, appImg),
    series(depsCSS, depsFonts)
  ),
  servidor,
  monitorarArquivos
)