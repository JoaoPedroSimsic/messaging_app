import express from 'express';

class App {
	public app: express.Application;

	constructor() {
		this.app = express();
	}
}

const app = new App().app
export { app };
