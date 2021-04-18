import Entity from './entity';

export default class Drone extends Entity {
	public constructor(x: number, y: number) {
		super(x, y);
	}

	public draw(renderer: CanvasRenderingContext2D): void {
		renderer.beginPath();
		renderer.fillStyle = 'purple';
		renderer.fillRect(this.x, this.y, 8, 8);
		renderer.closePath();
	}
}
