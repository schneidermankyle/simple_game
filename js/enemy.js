function Enemy() {

	var _window = $('#window'),
		_enemies = $('.enemy');

	this.newEnemy = function (type) {
		var _creationPosition = Math.round(Math.random() * _window.width());
		_window.append("<div class='enemy " + type.eType + "' style='top: 0; left: " + _creationPosition + "px ' data-eType='" + type.eType + "'></div>");
		_enemies = $('.enemy');
	};

	this.update = function () {
		if (_enemies) {
			_enemies.each(function() {
				var _enemySpeed = enemy[$(this).data('etype')].speed,
					_target = player.getPos(),
					_enemyTop = ($(this).offset().top < _target['top']) ? parseInt( $(this).css('top').replace(/[^-\d\.]/g, '') ) + _enemySpeed : parseInt( $(this).css('top').replace(/[^-\d\.]/g, '') ) - _enemySpeed;
					_enemyLeft = ($(this).offset().left < _target['left']) ? parseInt( $(this).css('left').replace(/[^-\d\.]/g, '') ) + _enemySpeed : parseInt( $(this).css('left').replace(/[^-\d\.]/g, '') ) - _enemySpeed;

				$(this).css({'top': _enemyTop, 'left': _enemyLeft});			
			});
		}
	};

	this.drone = {eType : 'drone', speed: 2, weapon: 'gun'};
}