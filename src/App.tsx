import { RouterProvider } from "react-router-dom";

// routes
import { router } from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
