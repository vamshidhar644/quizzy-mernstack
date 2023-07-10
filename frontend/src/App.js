import './styles/App.css';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** import components */
import Main from './components/Main';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { CheckUserExist } from './helper/helper';
import Dashboard from './pages/Dashboard';
<<<<<<< HEAD
import Signup from './pages/Signup';
=======
import Login from './pages/Login';
import Signup from './pages/Signup';
// import { UserAuthContextProvider } from './context/UseAuthContext';
>>>>>>> 8fadeffe77956a12f9381e6f1636a90a378679fe

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
<<<<<<< HEAD
    path:'/Signup',
    element:(
      <Signup></Signup>
    )
  }
  
=======
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
>>>>>>> 8fadeffe77956a12f9381e6f1636a90a378679fe
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
