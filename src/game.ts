import FPS from './fps';

const WIDTH = 480;
const HEIGHT = 480;

export default class Game {
	public fps = new FPS();
	public oldTimeStamp = 0;
	public context: CanvasRenderingContext2D;

	constructor() {
		// TODO place in World or something class.
		const terrainCanvas = <HTMLCanvasElement>(
			document.getElementById('terrain-canvas')
		);
		terrainCanvas.width = WIDTH;
		terrainCanvas.height = HEIGHT;
		this.context = terrainCanvas.getContext('2d');
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
	}

	private clearCanvas(): void {
		this.context.clearRect(0, 0, WIDTH, HEIGHT);
	}
}
