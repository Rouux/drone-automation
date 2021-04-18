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
		this.ui.style.width = WIDTH + 'px';
		this.playerSpan = <HTMLSpanElement>document.getElementById('player-span');
		this.fpsSpan = <HTMLSpanElement>document.getElementById('fps-span');
		this.initPlayerPositionSpan(game);
	}

	public update(delta: number): void {
		this.updateFPS(Math.round(1000 / delta));
	}

	private initPlayerPositionSpan(game: Game): void {
		const { x, y } = game.entityManager.player;
		this.updatePlayerPosition(x, y);
		window.addEventListener(PLAYER_UPDATE, ({ detail }: CustomEvent) =>
			this.updatePlayerPosition(detail.x, detail.y)
		);
	}

	private updatePlayerPosition(x: number, y: number): void {
		this.playerSpan.textContent = `(${Math.round(x)}, ${Math.round(y)})`;
	}

	private updateFPS(fps: number): void {
		this.fpsSpan.textContent = 'FPS: ' + fps;
	}
}
