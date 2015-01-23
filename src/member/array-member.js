define(function (require) {
	var Ontology = require('../ontology')

	var ArrayMember = function (name, elementSchema) {
		this._name = name
		this._elementSchema = elementSchema
	}

	ArrayMember.prototype.name = function () {
		return this._name
	}

	ArrayMember.prototype.elementSchema = function () {
		return this._elementSchema
	}

	ArrayMember.prototype.check = function (values) {
		if (!Array.isArray(values)) {
			return false
		}
		for (var i in values) {
			var value = values[i]
			if (value.constructor != Ontology || value.schema() != this._elementSchema) {
				return false
			}
		}
		return true
	}

	return ArrayMember
})