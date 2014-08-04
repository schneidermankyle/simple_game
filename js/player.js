function Player() {

	this.fire = new Weapon();

	var _player = $('#player'),
		_window = $('#window'),
		_health = 100;
		_top = 0,
		_left = 0,
		_self = this,
		_equipped = _self.fire.gun;

	// Need implement all our functionality
	var _construct = function () {
		_trackMouse();
		_primaryFire();
	};

	
	var _trackMouse = function () {
		_window.on('mousemove', function (e) {
			_top = e.pageY - _window.offset().top,
			_left = e.pageX - _window.offset().left;

			_player.css({
				'top' : _top,
				'left' : _left
			});
		});
	};

	this.getPos = function () {
		array = {'top': _top, 'left': _left};

		return array;
	}

	var _primaryFire = function () {
		_window.on('mousedown', function () {
			_self.fire.fireWeapon(_left, _top, _equipped);
		});
	}


	// Need a fire function


	_construct(); 

}