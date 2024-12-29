import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./componts/Home"
import Navbar from "./componts/Navbar"
import Pages from "./componts/Pages"
import ViewPage from "./componts/ViewPage"

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <Navbar/>
        <Pages/>
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar/>
        <ViewPage/>
      </div>
    }
  ])
  return (
    <>
    <div className="h-screen w-screen ">
      <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App
