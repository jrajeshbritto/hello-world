module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
	  concat: {
	    dist: {
	      src: ['app/js/one.js', 'app/js/two.js'],
	      dest: 'dist/main.js',
	    },
	  },
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat']);

}