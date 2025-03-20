// App.jsx
import { ChakraProvider } from '@chakra-ui/react'; // זה ה-provider של chakra
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Articles from './Components/ArticleComps/ArticlesPage';
import Properties from './Components/PropertieComp/AddProperties/Add';
import Login from './Components/featurs/auth/Login';
import Register from './Components/featurs/auth/Register';

// דפי דמו
const Home = () => <h1>דף הבית</h1>;
const About = () => <h1>אודות</h1>;
const Services = () => <h1>שירותים</h1>;
const Recommendations = () => <h1>המלצות</h1>;
const Contact = () => <h1>צור קשר</h1>;

function App() {
  return (
      <>
        {/* <Navbar /> */}
          <Register/>
          <Login/>
          {/* {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/properties" element={<Properties />} />
          <Route path="/services" element={<Services />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/recommendations" element={<Recommendations />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */} 
      </>
  );
}

export default App;
