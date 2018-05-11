#!/usr/bin/env node
var program = require('commander');
var cal = require('./cal');

program.parse(process.argv);
var result = cal(program.args);
console.log(result);
