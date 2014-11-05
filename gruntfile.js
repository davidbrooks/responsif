module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['_js/responsif.js'],
        dest: '_js/responsif.min.js'
      }
    },
    jslint: { // configure the task
      // lint your project's server code
      // lint your project's client code
      client: {
        src: [
        '_js/responsif.js'
        ],
        directives: {
          browser: true,
          predef: [
          'jQuery'
          ]
        },
        options: {
          junit: 'out/client-junit.xml'
        }
      }
    },
    sass: {
      dist: {
        files: {
          '_css/responsif.css': '_css/responsif.scss'
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '_js/responsif.min.js': ['_js/responsif.min.js']
        }
      }
    },
    watch: {
      files: ['_js/responsif.js', '_css/*.scss'],
      tasks: ['concat', 'uglify', 'sass']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.registerTask('default', ['concat', 'uglify', 'sass']);
  grunt.registerTask('tests', ['jslint']);

};
