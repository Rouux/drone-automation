import Camera from '../camera';
import Entity from '../../entities/entity';
import Player from '../../entities/player';
import { CAMERA_UPDATE } from '../events/events';

export default class EntityManager {
	public camera: Camera;
	public player: Player;
	public canvas: HTMLCanvasElement;
	public renderer: CanvasRenderingContext2D;
	public forceRedraw = true;
	public entities: Entity[] = [];

	public constructor(camera: Camera, width: number, height: number) {
		Entity.manager = this;
		this.camera = camera;
		this.player = new Player(camera, width / 2, height / 2);
		this.canvas = <HTMLCanvasElement>document.getElementById('entity-canvas');
		this.canvas.width = width;
		this.canvas.height = height;
		this.renderer = this.canvas.getContext('2d');

		window.addEventListener(CAMERA_UPDATE, ({ detail }: CustomEvent) => {
			this.renderer.setTransform(1, 0, 0, 1, -detail.x, -detail.y);
			this.forceRedraw = true;
		});
		window.entities = this.entities;
	}

	public draw(): void {
		// this.entityContext.clearRect(0, 0, WIDTH, HEIGHT);

		this.entities
			.filter(entity => this.forceRedraw || entity.needRedraw)
			.forEach(entity => entity.draw(this.renderer));
		this.forceRedraw = false;
	}

	public add(entity: Entity): void {
		this.entities.push(entity);
		entity.needRedraw = true;
	}

	public remove(entity: Entity): void {
		this.entities.splice(this.entities.indexOf(entity));
		entity.needRedraw = true;
	}
}
