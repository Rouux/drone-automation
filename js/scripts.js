'use strict';
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('terrain-canvas');
canvas.width = 480;
canvas.height = 480;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 100, 100);
