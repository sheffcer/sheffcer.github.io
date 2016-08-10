"use strict";

module.exports = function(grunt) {

  // подключаем плагин load-grunt-tasks, чтобы не перечислять все прочие плагины
  require("load-grunt-tasks")(grunt);
  require('time-grunt')(grunt);

  // описываем задачи, которые планируем использовать (их запуск - см. низ этого файла)
    grunt.initConfig({

    // компилируем препроцессор
    less: {
      style: {
        files: {
          // в какой файл, из какого файла
          "css/style.css": "less/style.less",
          "css/normalize.css": "less/normalize.less"
        }
      }
    },

    // обрабатываем postcss-ом (там только autoprefixer, на самом деле)
    postcss: {
      options: {
        processors: [
          // автопрефиксер и его настройки
          require("autoprefixer")({browsers: [
            "last 1 version",
            "last 2 Chrome versions",
            "last 2 Firefox versions",
            "last 2 Opera versions",
            "last 2 Edge versions"
          ]})
        ]
      },
      style: {
        src: "css/style.css"
       }
    },

    // локальный сервер, автообновление
    browserSync: {
      server: {
        bsFiles: {
          src: [
            "*.html",
            "css/*.css"
          ]
        },
        options: {
          server: ".",
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    // слежение за файлами
    watch: {
      files: ["less/**/*.less"],
      tasks: ["less", "postcss"],
      options: {
        spawn: false
      }
    },

    csso: {
      style : {
        options: {
          report: "gzip"
        },
        files: {
          "css/style.min.css": ["css/style.css"]
        }
      }
    }


//    concat: {
//     options: {
//      separator: ';',
//    },
//     dist: {
//      src: ['js/test1.js', 'js/test2.js'],
//      dest: 'build/main.js',
//     }
//    },

//    uglify: {
//      dist: {
//        src: ['build/main.js'],
//        dest: 'build/main.min.js'
//      }
//    }

  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", [
    "less",
    "postcss"
   //    "csso",
//    "concat",
//    "uglify"
  ]);
};
