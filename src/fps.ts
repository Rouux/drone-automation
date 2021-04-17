export default class FPS {
	fpsSpan: HTMLSpanElement;
	constructor() {
		this.fpsSpan = <HTMLSpanElement>document.getElementById('fps-span');
	}

	public updateFPS(fps: number) {
		this.fpsSpan.textContent = 'FPS: ' + fps;
	}
}
