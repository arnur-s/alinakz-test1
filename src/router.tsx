import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Dashboard } from "pages/Dashboard";
import { MyTickets } from "pages/MyTickets";
import { NewTicket } from "pages/NewTicket";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "my-tickets",
        element: <MyTickets />,
      },
      {
        path: "new-ticket",
        element: <NewTicket />,
      },
    ],
  },
]);
