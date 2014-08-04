function Engine () {

	var self = this;

	this.objArray = [];

	// Create as an array that updates what object resides in grid coordinate.

	// when object moves into active grid, check if already occupied and interact accordingly.

	this.render = function () {

		if (controls.pause == false) {
			player.fire.update();
			enemy.update();
			// check collisions of game objects
			controls.displayTime(controls.convertTime(controls.getPlayTime()));
		}
	};
} 