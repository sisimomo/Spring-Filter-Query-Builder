class Item { //Abstract
	constructor() {
		const mustOverwriteMethods = [ "toString" ];
		if (new.target === Item) {
			throw new TypeError(`Cannot construct ${new.target.name} instances directly`);
		}
		let protoLits = [ Object.getPrototypeOf(this) ];
		while(Object.getPrototypeOf(protoLits[0]).constructor.name != "Object") { protoLits.unshift(Object.getPrototypeOf(protoLits[0])); }
		const superProto = protoLits.shift();
		let missing = mustOverwriteMethods.find(name => typeof superProto[name] === "function" && !protoLits.some(proto => proto.hasOwnProperty(name)));
		if (missing) {
			throw new TypeError(`${this.constructor.name} need to overwrite ${missing}`);
		}
	}
}

export { Item };