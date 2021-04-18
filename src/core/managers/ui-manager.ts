import { PLAYER_UPDATE } from '../events/events';
import Game, { WIDTH } from '../game';

export default class UIManager {
	public readonly game: Game;
	public readonly ui: HTMLDivElement;
	public readonly fpsSpan: HTMLSpanElement;
	public readonly playerSpan: HTMLSpanElement;

	public constructor(game: Game) {
		this.game = game;
		this.ui = <HTMLDivElement>document.getElementById('ui');
		this.playerSpan = this.initPlayerPositionSpan(game);
		this.fpsSpan = <HTMLSpanElement>document.getElementById('fps-span');
		this.ui.style.width = WIDTH + 'px';
	}

	public update(delta: number): void {
		this.updateFPS(Math.round(1000 / delta));
	}

	private initPlayerPositionSpan(game: Game): HTMLSpanElement {
		const playerSpan = <HTMLSpanElement>document.getElementById('player-span');
		const { x, y } = game.entityManager.player;
		this.updatePlayerPosition(x, y, playerSpan);
		window.addEventListener(PLAYER_UPDATE, ({ detail }: CustomEvent) =>
			this.updatePlayerPosition(detail.x, detail.y)
		);
		return playerSpan;
	}

	private updatePlayerPosition(
		x: number,
		y: number,
		span = this.playerSpan
	): void {
		span.textContent = `(${Math.round(x)}, ${Math.round(y)})`;
	}

	private updateFPS(fps: number): void {
		this.fpsSpan.textContent = 'FPS: ' + fps;
	}
}
