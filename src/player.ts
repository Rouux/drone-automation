import Entity from './entity';

export default class Player extends Entity {
	public constructor(x: number, y: number) {
		super(x, y);
		window.goto = this.$goto;
	}

	public draw(): void {
		this.render.beginPath();
		this.render.arc(this.x, this.y, 5, 0, 360);
		this.render.fillStyle = 'red';
		this.render.fill();
		this.render.closePath();
	}
}
