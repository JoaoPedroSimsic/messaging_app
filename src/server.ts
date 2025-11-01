import 'dotenv/config';

import { app } from "./app";

const PORT = process.env.PORT;

const bootstrap = () => {
	try {
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`)
		})
	} catch (err) {
		console.error("Failed to start server:", err);
		process.exit(1);
	}
}

bootstrap();
