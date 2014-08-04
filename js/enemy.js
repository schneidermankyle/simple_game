function Enemy() {

	var self = this,
		_window = $('#window');

	this.enemies = $('.enemy');

	this.newEnemy = function (type) {
		var _creationPosition = Math.round(Math.random() * _window.width());
		_window.append("<div class='enemy " + type.eType + "' style='top: 0; left: " + _creationPosition + "px ' data-eType='" + type.eType + "'></div>");
		self.enemies = $('.enemy');
	};

	// Need to create function for determining when appropriate for calling the "new enemy function"


	this.update = function () {
		if (self.enemies) {
			self.enemies.each(function() {
				var _enemySpeed = enemy[$(this).data('etype')].speed,
					_target = player.getPos(),
					_enemyTop = ($(this).css('top').replace(/[^-\d\.]/g, '') < _target['top']) ? parseInt( $(this).css('top').replace(/[^-\d\.]/g, '') ) + _enemySpeed  :parseInt( $(this).css('top').replace(/[^-\d\.]/g, '') ) - _enemySpeed;
					_enemyLeft = ($(this).css('left').replace(/[^-\d\.]/g, '') < _target['left']) ? parseInt( $(this).css('left').replace(/[^-\d\.]/g, '') ) + _enemySpeed : parseInt( $(this).css('left').replace(/[^-\d\.]/g, '') ) - _enemySpeed;

				$(this).css({'top': _enemyTop, 'left': _enemyLeft});
			});
		}
	};



	this.drone = {eType : 'drone', speed: 5, weapon: 'gun'};
}