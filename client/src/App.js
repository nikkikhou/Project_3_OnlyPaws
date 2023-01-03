import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/// ADDED BULMA /// 
import 'bulma/css/bulma.min.css';
import './App.css';



/// IMPORT PAGES ///
import Home from './pages/Home';
// ^ main page that says welcome to only paws - our branding page
import Signup from './pages/Signup';
// ^ page that allows user to sign up
import Login from './pages/Login';
// ^ page that allows a returning user to login
import Dashboard from './pages/Dashboard';
// ^ once user is logged in this is where user will see posts 
import Profile from './pages/Profile';
// ^ where user can acess their profile / edit it 
import CreateProfileForm from './pages//createProfile';
// ^ user is directed to this page when they first sign up 
// import SinglePost from './pages/SinglePost';
// ^ page/ modal where user can create a post

// import components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const httpLink = createHttpLink({
  uri: '/graphql',
});

/// SET CONTEXT ///
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

/// SET UP CLIENT ///
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createprofile' element={<CreateProfileForm />} />
          <Route path='/profile/:profileId' element={<Profile />} />
          {/* <Route path="/post"  element={<SinglePost />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </ApolloProvider>
  );
}

export default App;
