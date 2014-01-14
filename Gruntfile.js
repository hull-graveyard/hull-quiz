/*global module:true*/
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

var yeomanConfig = {
  app: 'app'
};


module.exports = function (grunt) {

  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    yeoman: yeomanConfig,

    open: {
      server: {
        url: 'http://localhost:<%= connect.livereload.options.port %>'
      }
    },

    // default watch configuration
    watch: {
      livereload: {
        files: [
          'app/*.html',
          '{.tmp,app}/styles/*.css',
          '{.tmp,app}/scripts/*.js',
          'app/images/*.{png,jpg,jpeg}'
        ],
        tasks: ['livereload']
      }
    },

    jshint: {
      all: [
        'app/scripts/[^templates].js',
        'app/aura_components/**/*.js'
      ]
    },

    connect: {
      livereload: {
        options: {
          port: 9000,
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, 'app')
            ];
          }
        }
      }
    },

    'gh-pages': {
      options: {
        base: 'app'
      },
      src: ['**']
    }


  });

  grunt.renameTask('regarde', 'watch');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('server', [
    'livereload-start',
    'connect:livereload',
    'open',
    'watch'
  ]);

  grunt.registerTask('test', [
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('default', ['server']);

};
