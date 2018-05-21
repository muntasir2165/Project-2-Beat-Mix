// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, presetsArrayIndex, newPresetArray) => {
	if ( requestType == null || (requestType !== 'GET' && requestType !== 'PUT') ) {
		return [400];
	} else if (presetsArrayIndex == null || presetsArrayIndex < 0 || presetsArrayIndex >= presets.length) {
		return [404];
	} else if (requestType === 'GET') {
		return [200, presets[presetsArrayIndex]];
	} else if (requestType === 'PUT') {
		presets[presetsArrayIndex] = newPresetArray;
		return [200, presets[presetsArrayIndex]];
	}
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
