import "./App.css";
// import { getItemList } from "./components/db";
// import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Shop from "./pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "profile",
        element: <div>Profile page</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
