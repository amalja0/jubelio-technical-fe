import './App.css'
import {RouterProvider} from "@tanstack/react-router";
import {router} from './routes/router.jsx';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
