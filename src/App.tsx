import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
