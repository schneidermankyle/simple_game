function Controls() {

	var self = this,
		_status = $('.status'),
		_gameTime = $('.timer > h3'),
		_time = Date.now();

	this.pause = false;

	var _construct = function () {
		_addListeners();
	};

	var _addListeners = function () {
		document.onkeydown = function(e) {
			if (e.which == 80) {
				self.pause = (!self.pause) ? true : false;
				if (self.pause == true) {
					$('#window').after("<h1 class='status'>Paused</h1>");

					_status = $('.status');
				} else {
					_status.remove();
				}
				
			}
		};
	};


	//PUBLIC:
	this.convertTime = function (time) {
		var _hours = Math.floor(time / 3600000),
			_min = Math.floor( (time - ( _hours * 3600000) ) / 60000),
			_sec = Math.floor( (time - ( _hours * 3600000) - (_min * 60000) ) / 1000 ),
			_ms = time - (_hours * 3600000) - (_min * 60000) - (_sec * 1000);
			
		_hours = (_hours < 10) ? '0' + _hours : _hours;
		_min = (_min < 10) ? '0' + _min : _min;
		_sec = (_sec < 10) ? '0' + _sec : _sec;

		var _time = _hours + ':' + _min + ':' + _sec + ':' + _ms;

		return _time;
	};

	this.getPlayTime = function () {
		var _currentTime = Date.now() - _time;

		return _currentTime;
	};


	this.displayTime = function (time) {
		_gameTime.html(time);
	};

	_construct();
}