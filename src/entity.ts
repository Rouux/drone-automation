export default class Entity {
	protected _x = 0;
	protected _y = 0;
	public canvas: HTMLCanvasElement;
	public render: CanvasRenderingContext2D;

	public constructor(x: number, y: number) {
		this.$goto(x, y);
		this.canvas = <HTMLCanvasElement>document.getElementById('entity-canvas');
		this.render = this.canvas.getContext('2d');
	}

	public draw(): void {}

	public $goto = (x: number, y: number): void => {
		this.x = x;
		this.y = y;
	};

	public get x(): number {
		return this._x;
	}

	public set x(value) {
		this._x = value;
	}

	public get y(): number {
		return this._y;
	}

	public set y(value) {
		this._y = value;
	}
}
