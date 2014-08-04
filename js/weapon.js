function Weapon() {

	var _window = $('#window'),
		_ammunition = '',
		self = this;

	this.fireWeapon = function (x, y, weapon) {
		if (!controls.pause) {
			_window.append("<div class='shoot " + weapon.eType + "' style='left: " + (x + 10) + "px; top: " + (y - 5) + "px;' data-eType='" + weapon.eType + "'></div>");
			_ammunition = $('.shoot');
		}
	};

	this.update = function (type) {
		if (_ammunition) {
			_ammunition.each(function() {
				var _speed = player.fire[$(this).data('etype')].speed;

				_position = ($(this).css('top').replace(/[^-\d\.]/g, '')) - _speed;


				if (_position > 0) {

					$(this).css('top', _position);
				} else {
					// This object must be destroyed
					$(this).remove();
				}

			});
		}

	};

	this.gun = {eType: 'gun', speed: 5, damage: 25};

}