'use strict'
const encodeRegistry = require('encode-registry')
const test = require('tape')

test('encodeRegistry()', t => {
  t.equal(encodeRegistry('https://registry.npmjs.org/'), 'registry.npmjs.org')
  t.equal(encodeRegistry('https://localhost:4873/'), 'localhost+4873')
  t.equal(encodeRegistry('https://sinopia/'), 'sinopia')

  t.throws(() => encodeRegistry(), '`registry` is required')
  t.throws(() => encodeRegistry(1), '`registry` should be a string')

  t.end()
})
