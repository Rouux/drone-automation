import EntityManager from './entity-manager';

export default class Entity {
	private static _manager: EntityManager;
	protected _x = 0;
	protected _y = 0;
	public needRedraw = false;

	public constructor(x: number, y: number) {
		this.goto(x, y);
		Entity._manager.add(this);
	}

	public draw(renderer: CanvasRenderingContext2D): void {}

	public goto(x: number, y: number): void {
		this.x = x;
		this.y = y;
	}

	public get manager(): EntityManager {
		return Entity._manager;
	}

	public static set manager(value: EntityManager) {
		Entity._manager = value;
	}

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
