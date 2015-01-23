define(function () {

	var TextMember = function (name) {
		this._name = name
	}

	TextMember.prototype.name = function () {
		return this._name
	}

	TextMember.prototype.check = function (value) {
		return typeof value == 'string'
	}

	return TextMember
})