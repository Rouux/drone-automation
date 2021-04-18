import Camera from './camera';
import EntityManager from './entity-manager';
import TerrainManager from './terrain-manager';
import FPS from './fps';

const WIDTH = 1024;
const HEIGHT = 512;
const CAMERA_WIDTH = 256;
const CAMERA_HEIGHT = 128;

export default class Game {
	public camera: Camera;
	public entityContext: CanvasRenderingContext2D;
	public fps = new FPS();
	public oldTimeStamp = 0;
	public terrainManager: TerrainManager;
	public entityManager: EntityManager;

	public constructor() {
		this.terrainManager = new TerrainManager(WIDTH, HEIGHT);
		this.camera = new Camera(0, 0, CAMERA_WIDTH, CAMERA_HEIGHT);
		this.entityManager = new EntityManager(this.camera, WIDTH, HEIGHT);
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
		this.entityManager.draw();
	}

	private clearCanvas(): void {
		this.entityContext.clearRect(0, 0, WIDTH, HEIGHT);
	}
}
