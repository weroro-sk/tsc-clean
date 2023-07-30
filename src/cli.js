#!/usr/bin/env node

const clean = require('./index');
/** @type {{[p: string]: string|boolean}|{}} */
const args = require('./files/args');

clean(args);
