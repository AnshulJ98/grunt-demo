module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            combine: {
                files: {
                    'html/css/style.css': ['html/css/main.css', 'html/css/sidebar.css']
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'html/js/script.min.jss': ['html/js/script.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("def", "", function(){
        grunt.log.write("YOYOYO");
    });

    grunt.registerTask('default', ['cssmin','def','uglify']);

};