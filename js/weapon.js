function Weapon() {

	var _window = $('#window'),
		_ammunition = '',
		self = this;


	var _checkCollide = function (obj) {

		var _objLeft = Math.floor(obj.css('left').replace(/[^-\d\.]/g, '') / 25),
			_objTop = Math.floor(obj.css('top').replace(/[^-\d\.]/g, '') / 25),
			_objRight = Math.floor( (obj.css('left').replace(/[^-\d\.]/g, '') + obj.width() )/ 25);

		
		engine.objArray[_objLeft, _objTop] = {currentObject: obj};
		engine.objArray[_objLeft, _objTop + 1] = null;

		console.log(engine.objArray);

		return false;
	};

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

				if (_position > 0 && !_checkCollide($(this)) ) {

					$(this).css('top', _position);
				} else {
					// This object must be destroyed
					self.destroy($(this));
				}

			});
		}
	};

	this.destroy = function (obj) {
		obj.remove();
	};

	this.gun = {eType: 'gun', speed: 5, damage: 25};

}