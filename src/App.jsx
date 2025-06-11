import Rango from './components/swap/Rango'
import Home from './components/pages/Home'


import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/*' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='exchange/*' element={<Rango />} />
      </Route >
    ),
    {
      future: {
        v7_startTransition: true, // ✅ Enables React's startTransition wrapping in v7
      },
    }
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App
