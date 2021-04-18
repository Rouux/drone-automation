import Camera from './camera';
import EntityManager from './managers/entity-manager';
import TerrainManager from './managers/terrain-manager';
import UIManager from './managers/ui-manager';

export const WIDTH = 1024;
export const HEIGHT = 512;
export const CAMERA_WIDTH = 256;
export const CAMERA_HEIGHT = 128;

export default class Game {
	public readonly terrainManager: TerrainManager;
	public readonly entityManager: EntityManager;
	public readonly uiManager: UIManager;
	public readonly camera: Camera;
	public oldTimeStamp = 0;

	public constructor() {
		this.terrainManager = new TerrainManager(WIDTH, HEIGHT);
		this.camera = new Camera(0, 0, CAMERA_WIDTH, CAMERA_HEIGHT);
		this.entityManager = new EntityManager(this.camera, WIDTH, HEIGHT);
		this.uiManager = new UIManager(this);
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
		this.uiManager.update(delta);
	}

	private draw(): void {
		this.entityManager.draw();
	}
}
