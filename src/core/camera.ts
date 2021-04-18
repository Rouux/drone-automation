export default class Camera {
	public x = 0;
	public y = 0;
	public width = 0;
	public height = 0;

	public constructor(x: number, y: number, width: number, height: number) {
		this.width = width;
		this.height = height;
		this.translate(x, y);
	}

	public translate(x: number, y: number): void {
		this.x += x;
		this.y += y;
		const detail = {
			x: this.x,
			y: this.y,
			width: this.width,
			height: this.height
		};
		window.dispatchEvent(new CustomEvent('camera-update', { detail }));
	}
}
