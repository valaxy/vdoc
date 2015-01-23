define(function (require) {
	var Member = require('src/member/member')
	var TextMember = require('src/member/text-member')
	var ArrayMember = require('src/member/array-member')
	var Schema = require('src/schema')
	var Ontology = require('src/ontology')

	module('Schema')

	test('name()', function (assert) {
		var s = new Schema('json')
		assert.equal(s.name(), 'json')
	})

	test('addMember()/member()/members()', function (assert) {
		var person = new Schema('person')
		assert.equal(person.members(), 0)

		var m1 = new TextMember('age')
		var m2 = new ArrayMember('friends', person)
		var m3 = new Member('love', person)
		person.addMember(m1)
		person.addMember(m2)
		person.addMember(m3)
		assert.deepEqual(person.members(), [m1, m2, m3])
		assert.equal(person.member('friends'), m2)
		assert.equal(person.member('noexist'), null)
	})

	test('simple()', function (assert) {
		var s = new Schema('simple')
		assert.ok(!s.simple())

		s.addMember(new TextMember('a'))
		assert.ok(s.simple())

		s.addMember(new TextMember('b'))
		assert.ok(!s.simple())

		s = new Schema('nosimple')
		s.addMember(new ArrayMember('a', s))
		assert.ok(!s.simple())
	})

	test('check()', function (assert) {
		var animal = new Schema('animal')
		var person = new Schema('person')
		person.addMember(new TextMember('age'))
		person.addMember(new Member('love', person))
		person.addMember(new ArrayMember('friends', person))

		var jack = new Ontology(person)
		var lili = new Ontology(person)
		assert.ok(!person.check('xxx', null)) // no exist member

		assert.ok(person.check('age', '123')) // text
		assert.ok(!person.check('age', jack)) // not a text

		assert.ok(person.check('love', lili)) // common
		assert.ok(!person.check('love', new Ontology(animal))) // not ontology

		assert.ok(person.check('friends', [])) // empty
		assert.ok(person.check('friends', [jack]))
		assert.ok(person.check('friends', [jack, lili]))
		assert.ok(!person.check('friends', lili))
		assert.ok(!person.check('friends', [lili, new Ontology(animal)]))
	})
})