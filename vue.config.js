const { defineConfig } = require('@vue/cli-service')

// экспорт объекта с настройками приложения 
module.exports = defineConfig({
  // все настройки 

  transpileDependencies: true,

  // Базовый URL-адрес для настройки относительных путей в файлах приложения при экспорте на продакшен 
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',

    // Каталог (относительно outputDir) для хранения сгенерированных статических ресурсов (js, css, img, fonts).
  assetsDir: 'assets',

  // Установка в false может ускорить сборку для production, если не требуются source maps.
  productionSourceMap: false,

  // По умолчанию генерируемые статические ресурсы содержат хэши в именах файлов для лучшего управления кэшированием. Однако для этого требуется чтобы индексный HTML автоматически генерировался Vue CLI. false- отключит добавление хэшей в имена файлов, для корректной работы кэша. True - знач по умолчанию - включит хэши
  filenameHashing: false,
  
  // Параметр имени каталога, в котором при запуске vue-cli-service build будут создаваться файлы сборки для production.По умолчанию: 'dist'
  outputDir: 'dist',


  // Путь к сгенерированному index.html (относительно outputDir). Также можно указать абсолютный путь. По умолчанию: 'index.html'
  indexPath: 'index.html',

  // Выполнять ли линтинг кода при сохранении во время разработки с помощью eslint-loader. Эта опция действует только когда установлен плагин @vue/cli-plugin-eslint.
  lintOnSave: 'warning'

});
