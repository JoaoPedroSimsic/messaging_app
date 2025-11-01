import 'dotenv/config';

import { app } from "./app";

(function () {
	const PORT = process.env.PORT;

	try {
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`)
		})
	} catch (err) {
		console.error("Failed to start server:", err);
		process.exit(1);
	}
})();
