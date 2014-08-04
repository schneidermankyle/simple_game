function Engine () {

	this.render = function () {

		if (controls.pause == false) {
			player.fire.update();
			enemy.update();
		}
	};
} 