import { RouterProvider } from "react-router-dom";
import "./assets/style/App.scss";
import { routes } from "./routes/Routes";

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
