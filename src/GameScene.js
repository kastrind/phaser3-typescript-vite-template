import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene {
	constructor() {
		super('hello-world')
	}

	preload() {
		this.load.image('sky', 'assets/space.png')
		// this.load.image('logo', 'assets/sprites/phaser3-logo.png')
		// this.load.image('red', 'assets/particles/red.png')
	}

	create() {
		this.add.image(400, 300, 'sky');
	}
}
