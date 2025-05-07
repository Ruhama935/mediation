// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Properties from './Components/PropertieComp/Properties';
import AddImages from './Components/PropertieComp/AddProperties/AddImages';
import MyProperties from './Components/PropertieComp/MyProperties';
import Add from './Components/PropertieComp/AddProperties/Add';
import PropertyOnCard from './Components/PropertieComp/MyProperties';
import Galleria from './Components/PropertieComp/OneProperty/Gallerias';
import Gallerias from './Components/PropertieComp/OneProperty/Gallerias';
import PropertyOne from './Components/PropertieComp/OneProperty/PropertyOne';
import Status from './Components/PropertieComp/OneProperty/Status';
import AuthForms from './Components/auth/AuthForms';
import AwaitingProperies from './Components/PropertieComp/AwaitingProperies';
import Prev from './Components/PropertieComp/AddProperties/Prev';
import UpdateProperty from './Components/PropertieComp/OneProperty/UpdateProperty';
import { useSelector } from 'react-redux';
import UserMenu from './Components/auth/UserMenu';
import Home from './Components/Home';
import "./App.css"
import Recommendations from './Components/RecComponent/Recommendations';
import ContactDetails from './Components/ContactDetails/ContactDetails';

// דפי דמו
// const Home = () => <h1>דף הבית</h1>;
const About = () => <h1>אודות</h1>;
const Services = () => <h1>שירותים</h1>;
// const Recommendations = () => <h1>המלצות</h1>;
const Contact = () => <h1>צור קשר</h1>;

function App() {
  const userLoggedIn = useSelector((state) => state.auth.user);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <UserMenu/> */}
        <Routes>
          <Route path="/auth" element={<AuthForms />} />
          <Route path="/" element={<Home />} />
          <Route path="/images" element={<Gallerias />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/Add-prev" element={<Prev />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/myProperties" element={<PropertyOnCard />} />
          <Route path="/recommendations" element={<Recommendations/>} />
          <Route path="/contact" element={<ContactDetails />} />
          <Route path="/property/:id" element={<PropertyOne />} />
          <Route path="/property/update/:id" element={<UpdateProperty />} />
          {userLoggedIn ? userLoggedIn.permissions === 'admin' && (
            <Route path="/AwaitingProperies" element={<AwaitingProperies />} />
          ) : (<></>)}
        </Routes>
      </BrowserRouter>
      {/* <Register /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
