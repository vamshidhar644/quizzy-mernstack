import './styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** import components */
import Main from './components/Main';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { CheckUserExist } from './helper/helper';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import { UserAuthContextProvider } from './context/UseAuthContext';

/** react routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/quiz-home',
    element: <Main />,
  },
  {
    path: '/quiz',
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: '/result',
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

function App() {
  return (
    <>
      {/* <UserAuthContextProvider> */}
      <RouterProvider router={router} />
      {/* </UserAuthContextProvider> */}
    </>
  );
}

export default App;
