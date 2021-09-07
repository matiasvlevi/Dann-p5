module.exports = function(grunt) {

  // Project configuration.
  const config = {
    concat: {
      build: {
        src: [
          // Dependencies
          'node_modules/dannjs/build/dann.js',
          'node_modules/p5/lib/p5.js',
          // Dann-p5
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
  }

  // Load configuration
  grunt.initConfig(config);

  // Load the all plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-terser');
  // Load custom tasks
  //grunt.loadTasks('tasks');

  // Register build task
  grunt.registerTask('build', [
    'concat:build',
    'terser:minify'
  ]);

};