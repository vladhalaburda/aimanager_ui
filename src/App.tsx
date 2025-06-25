import { Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import routerProvider from "@refinedev/react-router";
import { BrowserRouter, Routes, Route } from "react-router";

import Clients from "./pages/Clients";

const App = () => {
  return (
    <BrowserRouter>
      <Refine
        dataProvider={dataProvider}
        routerProvider={routerProvider}
        resources={[
          {
            name: "clients",
            list: "/clients",
          },

        ]}
      >
        <Routes>
          <Route path="/" element={<h1>Welcome to the App</h1>} />
          {/* Define the route for clients */}

          <Route path="clients">
            <Route index element={<Clients />} />
          </Route>
        </Routes>
      </Refine>
    </BrowserRouter>
  );
};

export default App;