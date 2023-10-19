/* globals bench suite */
'use strict';
// var levenshteinEditDistance = require('levenshtein-edit-distance');
import fastLevenshtein from '/usr/share/nodejs/fast-levenshtein/levenshtein.js';
// var levenshteinComponent = require('levenshtein-component');
// var ld = require('ld').computeDistance;
// var levdist = require('levdist');
// var natural = require('natural').LevenshteinDistance;
// var levenshtein = require('levenshtein');
// var talisman = require('talisman/metrics/distance/levenshtein');
import leven from 'leven';

function run(fn) {
	fn('a', 'b');
	fn('ab', 'ac');
	fn('ac', 'bc');
	fn('abc', 'axc');
	fn('kitten', 'sitting');
	fn('xabxcdxxefxgx', '1ab2cd34ef5g6');
	fn('cat', 'cow');
	fn('xabxcdxxefxgx', 'abcdefg');
	fn('javawasneat', 'scalaisgreat');
	fn('example', 'samples');
	fn('sturgeon', 'urgently');
	fn('levenshtein', 'frankenstein');
	fn('distance', 'difference');
	fn('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文');
}

const n = 1000000;

console.time('leven');
for (let i=0; i<n; i++) {
    run(leven);
}
console.timeEnd('leven');

console.time('fast-levenshtein');
for (let i=0; i<n; i++) {
    run(fastLevenshtein.get);
}
console.timeEnd('fast-levenshtein');
