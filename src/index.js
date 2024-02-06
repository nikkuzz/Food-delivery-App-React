import React, { Suspense , lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';


// Code optimization -- lazy loading
const Grocery = lazy(() => import('./components/InstaGrocery'))

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
    {
        path:"/",
        element:<Body />,
    },
    {
      path:"/About",
      element:<About />,
    },
    {
      path:"/Contact",
      element:<Contact />,
    },
    {
      path:"/Restaurants/:resId",
      element:<RestaurantMenu />,
    },
    {
      path:"/InstaGrocery",
      // Suspense is that element in which the fallback value will be displayed until actual Grocery is loaded
      element:<Suspense fallback={<h1>Loading</h1>}>
        <Grocery />
        </ Suspense>
    },
    {
      path:"/Cart",
      element:<Cart />,
    },
    ],
    errorElement:<Error />,
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
