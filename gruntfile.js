module.exports = function(grunt) {

  // Project configuration.
  const config = {
    concat: {
      build: {
        src: [
          'src/NetGraph/*.js',
          'src/error/*.js',
          'src/NetGraph/**/*.js',
        ],
        dest: 'build/dannp5.js'
      }
    },
    terser: {
      minify: {
        src: 'build/dannp5.js',
        dest: 'build/dannp5.min.js'
      }
    }
  }

  // Load configuration
  grunt.initConfig(config);

  // Load the all plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-terser');

  // Register build task
  grunt.registerTask('build', [
    'concat:build',
    'terser:minify'
  ]);

};