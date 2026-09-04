import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomePage from "./pages/Home"
import RootPage from "./pages/Root"
import AboutPage from "./pages/About"
import SkillsPage from "./pages/Skills"
import ProjectsPage from "./pages/Projects"
import { loader as projectsLoader } from "./components/ProjectsPage/AllProjects"
import ContactPage from "./pages/Contact"
import ProductDetails, { projectDetailsLoader } from "./components/ProjectsPage/ProductDetails"

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    HydrateFallback: () => <div className="loader"></div>,
    children: [
      {index: true,element: <HomePage />},
      {path: 'about',element: <AboutPage />},
      {path: 'skills',element: <SkillsPage />},
      {
        path: 'projects',
        children: [
          {index: true,element: <ProjectsPage />,loader: projectsLoader},
          {path: ':id', element: <ProductDetails />,loader: projectDetailsLoader}
        ]
      },
      {path: 'contact',element: <ContactPage />}
    ]
  }
])

export default function App() {
  return(
    <RouterProvider router={router}  />
  )
}