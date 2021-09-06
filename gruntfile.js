module.exports = function(grunt) {

  // Project configuration.
  const config = {
    concat: {
      build: {
        src: [
          'temp/dann.min.js',
          'temp/p5.min.js',
          'src/dom/*.js',
          'src/NetGraph/themes/*.js',
          'src/NetGraph/*.js',
          'src/error/*.js',
          'src/NetGraph/methods/*.js',
        ],
        dest: 'build/dannp5.js'
      }
    },
    terser: {
      minify: {
        src: 'build/dannp5.js',
        dest: 'build/dannp5.min.js'
      }
    },
    http: {
      getDann: {
        options: {
          url: 'https://cdn.jsdelivr.net/gh/matiasvlevi/dann@latest/build/dann.min.js',
          callback: function(e, r, b) {
            if (e !== null) {
              grunt.log.write(e)
            } else {
              grunt.log.write('Loaded successfully with status code: ' + r.statusCode)
            }
          },

        },
        dest: 'temp/dann.min.js'
      },
      getP5: {
        options: {
          url: 'https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js',
          callback: function(e, r, b) {
            if (e !== null) {
              grunt.log.write(e)
            } else {
              grunt.log.write('Loaded successfully with status code: ' + r.statusCode)
            }
          }
        },
        dest: 'temp/p5.min.js'

      }
    },
    clean: {
      temp: ['temp']
    },
  }

  // Load configuration
  grunt.initConfig(config);

  // Load the all plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-terser');
  grunt.loadNpmTasks('grunt-http');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadTasks('tasks');

  // Register build task
  grunt.registerTask('build', [
    'http',
    'concat:build',
    'clean:temp',
    'terser:minify'
  ]);

};