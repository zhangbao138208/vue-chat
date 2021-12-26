// localStorage.js
const Storage = require('dom-storage');
global.localStorage = new Storage(null, {
    strict: true});
window.localStorage = global.localStorage;

global.sessionStorage = new Storage(null, {
    strict: true});
window.sessionStorage = global.sessionStorage;