import { Hono } from "hono";
import { userRoute } from "./routes/user";
import { blogRoute } from "./routes/blog";

// Create the main Hono app
const app = new Hono();

app.route("/api/v1/user", userRoute);
app.route("/api/v1/blog", blogRoute);

export default app;
