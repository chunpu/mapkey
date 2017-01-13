var _ = require('min-util')
var is = _.is

module.exports = exports = _.curry(mapKey)

// raw must be object
function mapKey(map, raw) {
	var ret = {}
	if (map && raw) {
		_.forIn(raw, function(val, key) {
			var info = map[key]
			if (null != info) {
				if (is.object(info)) {
					var type = info.type || getType(val)
					var name = info.name
					if ('object' == type) {
						ret[name] = mapKey(info.child, val)
					} else if ('array' == type) {
						ret[name] = _.map(val, function(item) {
							return mapKey(info.child, item)
						})
					}
				} else {
					ret[info] = val
				}
			}
		})
	}
	return ret
}

function getType(val) {
	return is._class(val)
}

