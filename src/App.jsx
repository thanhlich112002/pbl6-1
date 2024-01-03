import React, { useContext, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './App.css'
import Header from './compoments/Header/Header';
import Footer from './compoments/Footer/Footer';
import Home from './pages/Home/Home';
import HomeDetail from './pages/Customer/HomeDetail/HomeDetail';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Chat from './pages/Chat/Chat';
import LoginAdmin from './pages/Admin/Login/LoginAdmin';
import HomeAdmin from './pages/Admin/Home/HomeAdmin';
import Customer from './pages/Admin/Customer/Customer';
import Store from './pages/Admin/Store/Store';
import BookList from './pages/BookList/BookList';
import Cart from './pages/Cart/Cart';
import ProductInf from './pages/ProductInf/ProductInf';
import Profile from './pages/Profile/Profile';
import ViewStore from './pages/Customer/ViewStore/ViewStore';
import HomeStore from './pages/Store/HomeStore/HomeStore';
import RequestStore from './pages/Admin/requestStore/requestStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SliderMenu from './compoments/SliderMenu/SliderMenu';
import ReportPage from './pages/Admin/ReportPage/ReportPage';
import Satistical from './pages/Admin/Satistical/Satistical';
import Voucher from './pages/Admin/Voucher/Vouher';
import Order from './pages/Order/Order';
import { QuantityProvider } from './Context/QuantityProvider';
import CartOrder from './pages/Cart/CartOrder/CartOrder';
import ThankOrder from './pages/ThankOrder/ThankOrder';
import StoreManage from './compoments/Store/StoreManage/StoreManage';
import Homeshipper from './pages/Shipper/Homeshipper/Homeshipper'
import Notification from './compoments/Notification/Notification';
import { ChatContext } from './compoments/Notification/NotificationProvider';
import { ChatContextProvider } from './compoments/Notification/NotificationProvider'
const queryClient = new QueryClient()

const App = () => {
  const [openChat, setOpenChat] = useState(false)
  const Layout = () => {
    const isAdminPage = useLocation().pathname.includes('/admin');
    const isStorePage = useLocation().pathname.includes('/store');
    const isLoginPage = useLocation().pathname.includes('/login');
    const isRegisterPage = useLocation().pathname.includes('/register');
    console.log(openChat)
    return (
      <ChatContextProvider>
        <QuantityProvider>
          <QueryClientProvider client={queryClient}>
            <div className="app">
              {!isAdminPage && !isLoginPage && !isRegisterPage && !isStorePage && (<Header setOpenChat={setOpenChat} />)}
              {isAdminPage && <SliderMenu />}
              <Outlet />
              {!isAdminPage && !isLoginPage && !isRegisterPage && (<Footer />)}
              <ToastContainer />
            </div>
          </QueryClientProvider>
        </QuantityProvider>
      </ChatContextProvider>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home openChat={openChat} setOpenChat={setOpenChat} />
        },
        {
          path: '/home/more',
          element: <HomeDetail />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/booklist',
          element: <BookList />
        },
        {
          path: '/productinformation',
          element: <ProductInf />
        },
        {
          path: '/Notifications',
          element: <Notification />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/order/:id',
          element: <Order />
        },
        {
          path: '/orderCart',
          element: <CartOrder />
        },
        {
          path: '/thankOrder',
          element: <ThankOrder />
        },
        {
          path: '/profile',
          element: <Profile />
        },
        {
          path: '/viewstore/:id',
          element: <ViewStore />
        },
        {
          path: '/store/home',
          element: <HomeStore />
        },
        {
          path: '/store/storemanage',
          element: <StoreManage />
        },
        {
          path: '/admin/login',
          element: <LoginAdmin />
        },
        {
          path: '/admin/home',
          element: <HomeAdmin />
        },
        {
          path: '/admin/customer',
          element: <Customer />
        },
        {
          path: '/admin/store',
          element: <Store />
        },
        {
          path: '/admin/requestStore',
          element: <RequestStore />
        },
        {
          path: '/admin/report',
          element: <ReportPage />
        },
        {
          path: '/admin/satistical',
          element: <Satistical />
        },
        {
          path: '/admin/voucher',
          element: <Voucher />
        },
        {
          path: '/shipper/home',
          element: <Homeshipper />
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App