module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      watch: {
        scripts: {
          files: ['appointments/public/dist/bundle.js', 'image-carousel/client/dist/bundle.js'],
          tasks: ['concat'],
          options: {
            spawn: false,
        },
      },
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['appointments/public/dist/bundle.js', 'image-carousel/client/dist/bundle.js'],
        dest: 'public/dist/built.js',
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat']);
  grunt.registerTask('default', ['watch']);

};
