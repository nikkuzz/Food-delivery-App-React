import Header from './components/Header';
import React from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router';
import { userStore } from './utils/userStore';



function App() {
  return (
    <Provider store = {userStore}>
    <Header />
  {/* for children attribute of createBrowserRouter.  */}
  <Outlet />
    </Provider>
  );
}



export default App;
