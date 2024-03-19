import Home from "./views/Home";
import Products from "./views/Products";
import Order from "./views/Order";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Products",
    path: "/products",
    element: <Products />,
  },
  {
    name: "Order",
    path: "/order",
    element: <Order />,
  },
];

export default routes;
