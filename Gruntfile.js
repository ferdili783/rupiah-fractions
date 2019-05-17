'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    shell: {
        ngbuild: {
            command: 'ng build --prod'
        },
        connect: {
            command: 'node app.js'
        }
    }
  });
  grunt.registerTask('server', ['shell:ngbuild','shell:connect']);
};
