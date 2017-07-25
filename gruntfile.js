module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			sass: {
				files: ['src/scss/main.scss'],
				tasks: ['sass']
			},
			html: {
				files: ['src/*.html'],
				tasks: ['copy:main']
			},
			js: {
				files: ['bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'],
				tasks: ['concat']
			}
		},

		sass: {
			dist: {
			 	options: {
					style: 'expanded'
				},
			 	files: {
			 		'app/css/main.css' : 'src/scss/main.scss'
			 	}
			 }
		},
		concat: {
            dist: {
                src: ['bower_components/jquery/dist/jquery.min.js','bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'],
                dest: 'app/js/complete.js'
            }
        },
		copy: {

			main: {
			expand: true,
			cwd: 'src/',
			src: '**/*.html',
			dest: 'app/',
			},

			  img: {
			expand: true,
			cwd: 'src/img/',
			src: '**', 
			dest: 'app/img/',
			},

			  font: {
			expand: true,
			cwd: 'src/fonts/',
			src: '**',
			dest: 'app/fonts/',
			},
			  yamm: {
			expand: true,
			cwd: 'bower_components/Yamm3/yamm/',
			src: '**/yamm.css',
			dest: 'app/css/',
			}

		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');


	grunt.registerTask('default', ['sass:dist', 'copy','concat']);
};