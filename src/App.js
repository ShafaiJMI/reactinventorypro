import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/auth/Login';
import ProductList from './pages/product/ProductList';
import AddProduct from './pages/product/AddProduct';
import Layout from './layouts/Layout';
import CategoryList from "./pages/category/CategoryList";
import AddCategory from "./pages/category/AddCategory";
import OrdersList from "./pages/order/Orders";
import Payment from "./pages/payment/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth">
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path="add" element={<AddProduct />} />
          </Route>
          <Route path="categories">
            <Route index element={<CategoryList />} />
            <Route path="add" element={<AddCategory />} />
          </Route>
          <Route path="orders">
            <Route index element={<OrdersList />} />
          </Route>
          <Route path="payments">
            <Route index element={<Payment />} />
          </Route>
          <Route path="analytics">
            <Route index element={<Payment />} />
          </Route>
          <Route path="messages">
            <Route index element={<Payment />} />
          </Route>
          <Route path="settings">
            <Route index element={<Payment />} />
          </Route>
          <Route path="users">
            <Route index element={<Payment />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
