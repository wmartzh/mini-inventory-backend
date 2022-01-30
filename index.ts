import Server from "./src/config/server";
import routes from "./src/config/router";
const PORT = parseInt(process.env.PORT) || 8000;

export default new Server().router(routes).listen(PORT)