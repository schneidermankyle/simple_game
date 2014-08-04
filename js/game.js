$(document).ready(function() {
	player = new Player();
	engine = new Engine();
	controls = new Controls();
	enemy = new Enemy();

	setInterval(engine.render, 33); 

	enemy.newEnemy(enemy.drone);

});