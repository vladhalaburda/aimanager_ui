import { Refine } from "@refinedev/core";
import {
  RefineRoutes,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
  
} from "@refinedev/react-router";
import routerProvider from "@refinedev/react-router";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import dataProvider from "@refinedev/simple-rest";

import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import MainLayout from './layouts/MainLayout';

const API_URL = "https://your-api.com/api";

const App = () => {
  return (
    <BrowserRouter>
      <Refine
        dataProvider={dataProvider(API_URL)}
        routerProvider={routerProvider}
        resources={[
          {
            name: "clients",
            list: "/clients",
            create: "/clients/create",
            edit: "/clients/edit/:id",
            show: "/clients/show/:id",
          },
        ]}
      >
        <Routes>
          <Route element={<MainLayout><Outlet /></MainLayout>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
          </Route>

          {/* Автоматические CRUD роуты */}
          <RefineRoutes />
        </Routes>

        <UnsavedChangesNotifier />
        <DocumentTitleHandler />
      </Refine>
    </BrowserRouter>
  );
};

export default App;
