// @flow
"use strict";

const uuid = require("uuid");

class Random {

	static createId() {

		return uuid();

	}

}

module.exports = Random;
