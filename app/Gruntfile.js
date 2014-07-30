module.exports = function(grunt) {

'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // meta: {
    //   banner : '/*!\n' +
    //   ' * <%= pkg.name %> v<%= pkg.version %> - <%= pkg.description %>\n' +
    //   ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> - <%= pkg.homepage %>\n' +
    //   ' * License: <%= pkg.license %>\n' +
    //   ' */\n\n',
    //   outputDir: 'dist',
    //   output : '<%= meta.outputDir %>/<%= pkg.name %>',
    //   outputMin : '<%= meta.outputDir %>/<%= pkg.name.replace("js", "min.js") %>'
    // },

    sass: {
      options: {
        includePaths: [
          'app/scss',
          'bower_components/foundation/scss'
          ]
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/ui.proto.css': 'scss/ui.proto.scss',
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    watch: {
      grunt: { files: [
                'Gruntfile.js',
                'js/libs/*.js'
                ]
            },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build', 'watch']);
}