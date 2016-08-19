var test = require('tape')
var tbrand = require('../lib/tb-brand')

test('Export test', function (t) {
    t.plan(1)

    t.equal(typeof tbrand, 'object')
})

test('Info test', function (t) {
    t.plan(1)

    t.equal(tbrand.info.en.phone, tbrand.info.zh.phone)
})

test('logo test', function (t) {
    t.plan(1)

    t.equal(typeof tbrand.logos.regular, 'string')
})
