function Controls() {

	var self = this;
		_status = $('.status');

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
	}

	_construct();
}