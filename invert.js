var _ = require('min-util')
var is = _.is

module.exports = invert

function invert(map) {
	var ret = {}
	_.forIn(map, function(val, key) {
		if (is.string(val)) {
			ret[val] = key
		} else {
			if (val) {
				var name = val.name
				val = _.extend({}, val, {
					name: key
				})
				val.child = invert(val.child)
				ret[name] = val
			}

		}
	})
	return ret
}