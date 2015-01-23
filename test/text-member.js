define(function (require) {
	var TextMember = require('src/member/text-member')
	var Ontology = require('src/ontology')
	var Schema = require('src/schema')

	module('TextMember')

	test('name()', function (assert) {
		var m = new TextMember('xx')
		assert.equal(m.name(), 'xx')
	})

	test('check()', function (assert) {
		var m = new TextMember('sb')
		var s = new Schema('test')
		assert.ok(m.check('abc'))
		assert.ok(!m.check(new Ontology(s)))
	})
})