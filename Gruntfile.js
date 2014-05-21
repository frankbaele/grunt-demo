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
        files: ['./js/src/**/*.js'],
        tasks: [ 'concat', 'jshint']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'js/script.js'
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
    },
    concat: {
      dist: {
        src: ['js/src/**/*.js'],
        dest: 'js/script.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('server', [
    'connect',
    'open',
    'watch'
  ]);
  // Default task.
  grunt.registerTask('default', 'server');
};
