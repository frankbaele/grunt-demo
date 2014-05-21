module.exports = function (grunt) {
  "use strict";
  // Config...
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9001,
          // Prevents Grunt to close just after the task (starting the server) completes
          // This will be removed later as `watch` will take care of that
          keepalive: false,
          hostname: ''
        }
      }
    },
    open: {
      dev: {
        path: 'http://127.0.0.1:9001',
        app: 'Google Chrome'
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['./sass/**/*.scss'],
        tasks: ['sass:dev']
      },
      js: {
        files: ['./js/scripts.js'],
        tasks: ['jshint']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'js/scripts.js'
      ]
    },
    sass: {
      dev: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          './css/style.css': './sass/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('server', [
    'connect',
    'open',
    'watch'
  ]);
  // Default task.
  grunt.registerTask('default', 'server');
};
