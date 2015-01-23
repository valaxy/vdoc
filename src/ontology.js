define(function () {

	var Ontology = function (schema) {
		this._schema = schema
		this._data = {}
	}

	Ontology.prototype.schema = function () {
		return this._schema
	}


	/**
	 * set inner data
	 * @param name the name of member
	 * @param ontology a ontology, value of the property
	 */
	Ontology.prototype.setProperty = function (name, ontology) {
		if (this._schema.check(name, ontology)) {
			this._data[name] = ontology
			return true
		}
		return false
	}


	return Ontology
})