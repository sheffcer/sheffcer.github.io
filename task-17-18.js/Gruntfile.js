"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "css/style.css": "less/style.less",
          "css/normalize.css": "less/normalize.less"
        }
      }
    },

    postcss: {
      options: {
        processors: [
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
        src: "css/*.css"
      }
    },

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
    },

    concat: {
     options: {
      separator: ';',
    },
     dist: {
      src: ['js/test1.js', 'js/test2.js'],
      dest: 'build/main.js',
     }
    },

    uglify: {
      dist: {
        src: ['build/main.js'],
        dest: 'build/main.min.js'
      }
    }

  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", [
    "less",
    "postcss",
    "csso",
    "concat",
    "uglify"
  ]);
};
