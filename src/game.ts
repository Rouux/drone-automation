import FPS from './fps';
import Player from './player';

const WIDTH = 480;
const HEIGHT = 480;

export default class Game {
	public fps = new FPS();
	public oldTimeStamp = 0;
	public terrainContext: CanvasRenderingContext2D;
	public entityContext: CanvasRenderingContext2D;
	public player: Player;

	public constructor() {
		// TODO place in World or something class.
		const terrainCanvas = <HTMLCanvasElement>(
			document.getElementById('terrain-canvas')
		);
		terrainCanvas.width = WIDTH;
		terrainCanvas.height = HEIGHT;
		this.terrainContext = terrainCanvas.getContext('2d');
		this.player = new Player(0, 0);
		const entityCanvas = <HTMLCanvasElement>(
			document.getElementById('entity-canvas')
		);
		entityCanvas.width = WIDTH;
		entityCanvas.height = HEIGHT;
		this.entityContext = entityCanvas.getContext('2d');
	}

	public start(): void {
		window.requestAnimationFrame(this.$gameLoop);
	}

	private $gameLoop = (timeStamp: number): void => {
		// Calculate the number of ms passed since the last frame
		const delta = timeStamp - this.oldTimeStamp;
		this.oldTimeStamp = timeStamp;

		this.update(delta);
		this.draw();

		window.requestAnimationFrame(this.$gameLoop);
	};

	private update(delta: number): void {
		this.fps.updateFPS(Math.round(1000 / delta));
	}

	private draw(): void {
		this.clearCanvas();
		this.player.draw();
	}

	private clearCanvas(): void {
		this.terrainContext.clearRect(0, 0, WIDTH, HEIGHT);
		this.entityContext.clearRect(0, 0, WIDTH, HEIGHT);
	}
}
