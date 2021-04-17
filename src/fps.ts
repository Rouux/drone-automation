export default class FPS {
	public fpsSpan: HTMLSpanElement;
	public constructor() {
		this.fpsSpan = <HTMLSpanElement>document.getElementById('fps-span');
	}

	public updateFPS(fps: number): void {
		this.fpsSpan.textContent = 'FPS: ' + fps;
	}
}
