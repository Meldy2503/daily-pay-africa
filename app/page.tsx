


import React from 'react';
import AuthLayout from "./components/layouts/auth-layout";
import Login from './pages/auth/login/page';

const Home = () => {
  return <Login />;
};

Home.getLayout = (page: any) => <AuthLayout>{page}</AuthLayout>;
Home.requireAuth = false;
export default Home;
