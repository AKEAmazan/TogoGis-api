import { config } from "./config/config";
import { buildApp } from "./app";

const startServer = async () => {
  try {
    const app = await buildApp();

    const server = app.listen(config.PORT, () => {
      console.log(
        `Server is running on port ${config.PORT} in ${config.NODE_ENV} mode and API accessible at http://localhost:${config.PORT}${config.API_URL}`
      );
    });

    process.on("SIGTERM", () => {
      console.log("SIGTERM signal received : closing HTTP server");
      server.close(() => {
        console.log("HTTP server closed");
      });
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};
startServer();
