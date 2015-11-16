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
    watch: {
      jade: {
        files: ['src/jade/*.jade'],
        tasks: ['jade']
      },
      stylus: {
        files: ['src/stylus/*.styl'],
        tasks: ['stylus']
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
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');

  grunt.registerTask('default', ['express','watch']);
};