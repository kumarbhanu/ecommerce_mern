import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import NotFound from "./components/NotFound";
import ProductDetails from "./screens/ProductDetails";
import { Provider } from "react-redux";
import store from "./store";
const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route  index={true} element={<HomeScreen/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/product/:id" element={<ProductDetails/>}/>
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<Provider store={store}>
<RouterProvider router={router}/>
</Provider>
);

reportWebVitals();
