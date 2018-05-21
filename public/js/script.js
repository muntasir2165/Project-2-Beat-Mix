// Drum Arrays
const ARRAY_LENGTH = 16;
let kicks = new Array(ARRAY_LENGTH).fill(false);
let snares = new Array(ARRAY_LENGTH).fill(false);
let hiHats = new Array(ARRAY_LENGTH).fill(false);
let rideCymbals = new Array(ARRAY_LENGTH).fill(false);

function toggleDrum(drumName, index) {
	if (index != null && index >= 0 && index < 16) {
		switch (drumName) {
			case 'kicks':
				kicks[index] = !kicks[index];
				break;
			case 'snares':
				snares[index] = !snares[index];
				break;
			case 'hiHats':
				hiHats[index] = !hiHats[index];
				break;
			case 'rideCymbals':
				rideCymbals[index] = !rideCymbals[index];
				break;
		}
	}
}

function clear(drumName) {
	switch (drumName) {
		case 'kicks':
			kicks = new Array(ARRAY_LENGTH).fill(false);
			break;
		case 'snares':
			snares = new Array(ARRAY_LENGTH).fill(false);
			break;
		case 'hiHats':
			hiHats = new Array(ARRAY_LENGTH).fill(false);
			break;
		case 'rideCymbals':
			rideCymbals = new Array(ARRAY_LENGTH).fill(false);
			break;
	}
}

function invert(drumName) {
	switch (drumName) {
		case 'kicks':
			kicks = kicks.map(booleanValue => !booleanValue);
			break;
		case 'snares':
			snares = snares.map(booleanValue => !booleanValue);
			break;
		case 'hiHats':
			hiHats= hiHats.map(booleanValue => !booleanValue);
			break;
		case 'rideCymbals':
			rideCymbals = rideCymbals.map(booleanValue => !booleanValue);
			break;
	}
}

function getNeighborPads(x, y, size) {
	if (x < 0 || x >= size || y < 0 || y >= size) {
		return []; //x or y is outside the grid
	} else if ( (x === 0 && y === 0)) {
		return [[x, y+1], [x+1, y]]; //bottom left corner of the grid
	} else if ( (x === 0 && y === size-1)) {
		return [[x, y-1], [x+1, y]]; //top left corner of the grid
	} else if ( (x === size-1 && y === size-1)) {
		return [[x-1, y], [x, y-1]]; //top right corner of the grid
	} else if ( (x === size-1 && y === 0)) {
		return [[x-1, y], [x, y+1]]; //bottom right corner of the grid
	} else if ( x == 0 && (y > 0 && y < size-1) ) {
		return [[x, y+1], [x, y-1], [x+1, y]];//left edge of the grid
	} else if ( x == size-1 && (y > 0 && y < size-1) ) {
		return [[x, y+1], [x, y-1], [x-1, y]];//right edge of the grid
	} else if ( (x > 0 && x < size-1 ) && y == 0 ) {
		return [[x-1, y], [x+1, y], [x, y+1]];//bottom edge of the grid
	} else if ( (x > 0 && x < size-1 ) && y == size-1 ) {
		return [[x-1, y], [x+1, y], [x, y-1]];//top edge of the grid
	}
	return [[x-1, y], [x+1, y], [x, y-1], [x, y+1]]; // somewhere else on the grid
}


