'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    shell: {
        npminstall: {
            command: 'npm install'
        },
        connect: {
            command: 'node app.js'
        }
    }
  });
  grunt.registerTask('server', ['shell:npminstall','shell:connect']);
};
