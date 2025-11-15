import { Outlet } from "react-router-dom";

import AppHeader from "../components/AppHeader";
import AppNavbar from "../components/AppNavbar";
import AppFooter from "../components/AppFooter";

const AppLayout = ({ products, carts , setToken}) => {
  return (
    <div className="d-flex flex-column  h-100">
      <AppHeader />
      <AppNavbar products={products} carts={carts} setToken={setToken}/>

      <main className="flex-grow-1 bg-light py-5">
        <Outlet />
      </main>

      <AppFooter />
    </div>
  );
};

export default AppLayout;
