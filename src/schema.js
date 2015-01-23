define(function (require) {
	var TextMember = require('./member/text-member')

	var Schema = function (name) {
		this._name = name
		this._members = [] // 只有有member才可以拥有相应的property
	}

	Schema.prototype.name = function () {
		return this._name
	}

	Schema.prototype.member = function (name) {
		for (var i in this._members) {
			var member = this._members[i]
			if (member.name() == name) {
				return member
			}
		}
		return null
	}

	Schema.prototype.members = function () {
		return this._members
	}

	Schema.prototype.addMember = function (member) {
		this._members.push(member)
	}

	Schema.prototype.simple = function () {
		if (this._members.length == 1 && this._members[0].constructor == TextMember) {
			return true
		}
		return false
	}

	Schema.prototype.check = function (name, value) {
		var member = this.member(name)
		if (member == null) {
			return false
		}

		return member.check(value)
	}

	return Schema
})