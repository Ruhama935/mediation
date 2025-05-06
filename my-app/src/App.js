// App.jsx
import { ChakraProvider } from '@chakra-ui/react'; // זה ה-provider של chakra
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Articles from './Components/ArticleComps/ArticlesPage';
import Properties from './Components/PropertieComp/Properties';
import Login from './Components/featurs/auth/Login';
import Register from './Components/featurs/auth/Register';
import AddImages from './Components/PropertieComp/AddProperties/AddImages';
import MyProperties from './Components/PropertieComp/MyProperties';
import Add from './Components/PropertieComp/AddProperties/Add';
import PropertyOnCard from './Components/PropertieComp/MyProperties';
import Galleria from './Components/PropertieComp/OneProperty/Gallerias';
import Gallerias from './Components/PropertieComp/OneProperty/Gallerias';
import PropertyOne from './Components/PropertieComp/OneProperty/PropertyOne';
import Status from './Components/PropertieComp/Status';
import AuthForms from './Components/featurs/auth/AuthForms';
import AwaitingProperies from './Components/PropertieComp/AwaitingProperies';
import Prev from './Components/PropertieComp/AddProperties/Prev';
import UpdateProperty from './Components/PropertieComp/UpdateProperty';
import { useSelector } from 'react-redux';


// דפי דמו
const Home = () => <h1>דף הבית</h1>;
const About = () => <h1>אודות</h1>;
const Services = () => <h1>שירותים</h1>;
const Recommendations = () => <h1>המלצות</h1>;
const Contact = () => <h1>צור קשר</h1>;

function App() {
  const userLoggedIn = useSelector((state) => state.auth.user);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<AuthForms/>} />
          <Route path="/about" element={<Status status={"Confirmed"}/>} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/Add-prev" element={<Prev />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/myProperties" element={<PropertyOnCard />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/contact" element={<AddImages />} />
          <Route path="/property/:id" element={<PropertyOne />} />
          <Route path="/property/update/:id" element={<UpdateProperty />} />
          {userLoggedIn ? userLoggedIn.permissions === 'admin' && (
            <Route path="/AwaitingProperies" element={<AwaitingProperies />} />
          ): (<></>)}
        </Routes>
      </BrowserRouter>
      {/* <Register /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
