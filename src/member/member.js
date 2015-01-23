define(function (require) {
	var Ontology = require('../ontology')

	var Member = function (name, schema) {
		this._name = name
		this._schema = schema
	}

	Member.prototype.name = function () {
		return this._name
	}

	Member.prototype.schema = function () {
		return this._schema
	}

	Member.prototype.check = function (value) {
		return value.constructor == Ontology && value.schema() == this._schema
	}

	return Member
})