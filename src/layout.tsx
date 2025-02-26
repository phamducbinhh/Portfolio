import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import AppFooter from "./components/layout/app.footer";
import AppHeader from "./components/layout/app.header";

function Layout() {
  return (
    <Fragment>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </Fragment>
  );
}

export default Layout;
