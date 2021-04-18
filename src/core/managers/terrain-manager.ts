import World from '../terrain/world';

export default class TerrainManager {
	public world: World;
	public canvas: HTMLCanvasElement;
	public renderer: CanvasRenderingContext2D;

	public constructor(width: number, height: number) {
		this.world = new World(width, height);
		this.canvas = <HTMLCanvasElement>document.getElementById('terrain-canvas');
		this.canvas.width = width;
		this.canvas.height = height;
		this.renderer = this.canvas.getContext('2d');
		this.renderer.imageSmoothingEnabled = false;

		window.addEventListener('camera-update', ({ detail }: CustomEvent) => {
			this.draw(detail.x, detail.y, detail.width, detail.height);
		});
	}

	public draw(x = 0, y = 0, localWidth = 0, localHeight = 0): void {
		const { width, height } = this.canvas;
		this.renderer.drawImage(
			this.world.canvas,
			x / (width / localWidth),
			y / (height / localHeight),
			localWidth,
			localHeight,
			0,
			0,
			width,
			height
		);
	}
}
