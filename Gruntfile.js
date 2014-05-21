module.exports = function (grunt) {
  "use strict";
  // Config...
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
  // Default task.
  grunt.registerTask('default', 'sass:dev');
};
