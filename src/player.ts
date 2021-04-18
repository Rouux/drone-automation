import Camera from './camera';
import Entity from './entity';

export default class Player extends Entity {
	public camera: Camera;

	public constructor(camera: Camera, x: number, y: number) {
		super(x, y);
		this.camera = camera;
		window.goto = this.$goto;
		window.up = this.$up;
		window.right = this.$right;
		window.down = this.$down;
		window.left = this.$left;
	}

	public draw(renderer: CanvasRenderingContext2D): void {
		renderer.beginPath();
		renderer.fillStyle = 'red';
		renderer.fillRect(this.x, this.y, 16, 16);
		renderer.closePath();
	}

	public $goto = (x: number, y: number): void => {
		super.goto(x, y);
	};

	public move(x = 0, y = 0): void {
		this.$goto(this.x + x, this.y + y);
		this.camera.translate(x, y);
	}

	public $up = (value: number): void => this.move(0, -value);
	public $right = (value: number): void => this.move(value, 0);
	public $down = (value: number): void => this.move(0, value);
	public $left = (value: number): void => this.move(-value, 0);
}
