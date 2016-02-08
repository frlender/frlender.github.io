module.exports = function(grunt) {

  grunt.initConfig({
    jade: {
          compile: {
            options: {
              data: {
                dev:true
              },
              pretty: true
            },
            files: {
              "index.html":"views/index.jade"
            }
        },
        release: {
            options: {
              data: {
                dev:false
              },
              pretty: true
            },
            files: {
              "index.html":"index.jade"
            }
        },
    },
    watch: {
      "jade:compile":{
        files:["views/*.jade"],
        tasks:["jade:compile"]
      }
    },
    // concat:{
    //   options:{
    //     seperator:";",
    //   },
    //   dist：{
    //     src: ['public/scripts/test-scatter.js','public/scripts/expandable.js'],
    //     dest: 'public/scripts/built.js'
    //   }
    // },
    uglify:{
      built:{
        files:{
          "dist/main.min.js":['scripts/script1.js','scripts/script2.js']
        }
      }
    },
    express:{
      dev:{
        options:{
          script:'index.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['express:dev','watch']);
  grunt.registerTask('release',['jade:release','uglify']);

};
