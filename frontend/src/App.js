import './styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** import components */
import Main from './components/Main';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { CheckUserExist } from './helper/helper';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';

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
    path: '/quiz-home/quiz',
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
    path: '/Signup',
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
