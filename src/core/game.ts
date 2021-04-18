import Camera from './camera';
import EntityManager from './managers/entity-manager';
import TerrainManager from './managers/terrain-manager';
import FPS from '../ui/fps';

const WIDTH = 1024;
const HEIGHT = 512;
const CAMERA_WIDTH = 256;
const CAMERA_HEIGHT = 128;

export default class Game {
	public terrainManager: TerrainManager;
	public entityManager: EntityManager;
	public camera: Camera;
	public oldTimeStamp = 0;
	public fps = new FPS();

	public constructor() {
		this.terrainManager = new TerrainManager(WIDTH, HEIGHT);
		this.camera = new Camera(0, 0, CAMERA_WIDTH, CAMERA_HEIGHT);
		this.entityManager = new EntityManager(this.camera, WIDTH, HEIGHT);
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
		this.entityManager.draw();
	}
}
