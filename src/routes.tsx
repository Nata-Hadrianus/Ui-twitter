// routes.tsx
import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./Pages/Timeline";
import { Status } from "./Pages/Status";
import { Default } from "./layouts/Default";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path:'/',
        element: <Timeline />,
      },
      {
        path: '/status',
        element: <Status />,
      },
    ],
  },
]);
