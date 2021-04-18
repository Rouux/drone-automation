export default class World {
	public canvas: HTMLCanvasElement;
	public seed = 0;

	public constructor(width: number, height: number) {
		this.seed = Math.floor((width / 64 + height / 64) * (1 + Math.random()));
		this.canvas = document.createElement('canvas');
		this.canvas.width = width;
		this.canvas.height = height;
		const ctx = this.canvas.getContext('2d');
		for (let y = 0; y <= height / 2; y++) {
			for (let x = 0; x <= width / 2; x++) {
				ctx.fillStyle = this.getTerrainAt(x, y);
				ctx.fillRect(x, y, 1, 1);
			}
		}
	}

	private perlinAt(x: number, y: number): number {
		// @ts-ignore
		return perlin.get(x / this.seed, y / this.seed);
	}

	private getTerrainAt(x: number, y: number): string {
		const noise = this.perlinAt(x, y);
		return noise < 0.2 ? this.ground(noise) : this.water(noise);
	}

	private ground(noise: number): string {
		return 'rgb(0, ' + (200 + 100 * noise) + ', 0)';
	}

	private water(noise: number): string {
		return 'rgb(0, 0, ' + (255 - 50 * (Math.pow(noise * 10, 2.1) / 10)) + ')';
	}
}
