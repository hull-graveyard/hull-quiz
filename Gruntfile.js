/*global module:true*/
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

var yeomanConfig = {
  app: 'app',
  dist: 'dist'
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
      },
      // components: {
      //   files: ['app/aura_components/**/*.js'],
      //   tasks: ['concat']
      // },
      templates: {
        files: ['app/aura_components/**/*.hbs'],
        tasks: ['handlebars']
      }
    },

    jshint: {
      all: [
        'app/scripts/[^templates].js',
        'app/aura_components/**/*.js'
      ]
    },

    // concat: {
    //   options: {
    //     separator: "\n\n\n\n//--------\n\n\n"
    //   },
    //   dist: {
    //     src: ['app/aura_components/**/*.js'],
    //     dest: 'app/scripts/aura_components.js'
    //   }
    // },

    handlebars: {
      compile: {
        files: {
          "app/scripts/templates.js" : ["app/aura_components/**/*.hbs"]
        },
        options: {
          wrapped: false,
          namespace: "Hull.templates",
          processName: function (filename) {
            return filename.replace(/^app\/aura_components\//, '').replace(/\.hbs$/, '');
          }
        }
      }
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

    clean: {
      dist: ['.tmp', 'dist/*'],
      server: '.tmp'
    },

    uglify: {
      dist: {
        files: {
          'dist/application.js': [
            'app/scripts/*.js'
          ]
        }
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/images',
          src: '*.{png,jpg,jpeg}',
          dest: 'dist/images'
        }]
      }
    },

    cssmin: {
      dist: {
        files: {
          'dist/application.css': [
            'app/styles/normalize.css',
            'app/styles/main.css'
          ],
          'dist/admin.css': [
            'app/styles/admin.css'
          ],
        }
      }
    },

    copy: {
      dist: {
        files: [
          { dest: 'dist/index.php', src: 'dist/index.html' },
          { cwd: 'app/', dest: 'dist/', src: ['.htaccess', 'robots.txt'], expand: true }
        ]
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: false,
          removeCommentsFromCDATA: true,
          collapseWhitespace: false,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: false,
          removeRedundantAttributes: false,
          useShortDoctype: true,
          removeEmptyAttributes: false,
          removeOptionalTags: false
        },
        files: [{
          expand: true,
          cwd: 'app',
          src: '*.html',
          dest: 'dist'
        }]
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
  grunt.renameTask('mincss', 'cssmin');

  // grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('server', [
    'clean:server',
    'livereload-start',
    'connect:livereload',
    'open',
    'watch'
  ]);

  grunt.registerTask('test', [
    'clean:server',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    // 'concat',
    'jshint',
    'handlebars',

    'uglify',
    'imagemin',
    'htmlmin',
    'cssmin',
    'copy'
  ]);

  grunt.registerTask('default', ['build']);

};
