module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      compile: {
        options: {
          compress: false
        },
        files: {
          'dist/assets/css/layout.css': 'src/stylus/layout.styl',
          'dist/assets/css/style.css': 'src/stylus/style.styl'
        }
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'src/jade',
          src: '*.jade',
          dest: 'dist',
          ext: '.html'
        }]
      }
    },
    uglify: {
      all_js: {
        options: {
          sourceMap: true,
          sourceMapName: 'sourceMap.map'
        },
        files: {
          'composite.min.js': ['javascript/slick.min.js','javascript/sliders.js','javascript/segment.js','javascript/custom_animations.js']
        }
      }
    },
    watch: {
      jade: {
        files: ['src/jade/*.jade'],
        tasks: ['jade']
      },
      stylus: {
        files: ['src/stylus/*.styl'],
        tasks: ['stylus']
      },
      javascript: {
        files: ['src/javascript/*.js'],
        tasks: ['uglify']
      },
      options: {
        livereload: true
      }
    },
    express: {
      server: {
        options: {
          port: 1523,
          bases: ['dist'],
          open: 'http://localhost:1523',
          livereload: true
        }        
      }
    }
  });
  grunt.loadNpmTasks('grunt-parallel');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');

  grunt.registerTask('default', ['express','watch']);
};