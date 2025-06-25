import { Refine } from "@refinedev/core";
import routerBindings from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import dataProvider from "@refinedev/simple-rest";

import Clients from "./pages/Clients";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/Login";
import AuthLayout from "./layouts/AuthLayout";

const authProvider = {
  login: async ({ username }) => {
    localStorage.setItem("username", username);
    return {success: true };
  },
  logout: async () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  checkAuth: async () => {
    const username = localStorage.getItem("username");
    if (username) {
      return Promise.resolve();
    }
    return Promise.reject();
  },
  checkError: async () => Promise.resolve(),
  getPermissions: async () => Promise.resolve(),
};


const App = () => {
  return (
    <BrowserRouter>
      <Refine
        dataProvider={dataProvider}
        routerProvider={routerBindings}
        authProvider={authProvider}
        resources={[
          { name: "clients", list: "/clients" },
        ]}
      >
        <Routes>
          <Route element={<AuthLayout/>}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="clients" element={<Clients />} />
              <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Route>
          </Route>
        </Routes>
      </Refine>
    </BrowserRouter>
  );
};

export default App;
