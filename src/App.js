import Header from './components/Header';
import React from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router';
import { userStore } from './utils/userStore';
import Footer from './components/Footer';



function App() {
  return (
    <Provider store = {userStore}>
    <Header />
  {/* for children attribute of createBrowserRouter.  */}
  <Outlet />
    <Footer />
    </Provider>
  );
}



export default App;
