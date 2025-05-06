import { Menubar } from 'primereact/menubar';
import { useLocation, useNavigate } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme של PrimeReact
import 'primereact/resources/primereact.min.css';         // בסיס של רכיבי PrimeReact
import 'primeicons/primeicons.css';  
import reducer from './Components/featurs/auth/authSlice';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const location = useLocation(); // קבלת הנתיב הנוכחי
  const navigate = useNavigate(); // פונקציה לניווט
  const userLoggedIn = useSelector((state) => state.auth.user);


  const items = [
    { label: 'Home', icon: 'pi pi-home', url: '/', active: location.pathname === '/' },
    { label: 'About', icon: 'pi pi-info-circle', url: '/about', active: location.pathname === '/about' },
    { label: 'Properties', icon: 'pi pi-building', url: '/properties', active: location.pathname === '/properties' },
    { label: 'Add new property', icon: 'pi pi-cog', url: '/Add-prev', active: location.pathname === '/Add-prev' },
    // userLoggedIn &&
    //   { label: 'myProperties', icon: 'pi pi-file', url: '/myProperties', active: location.pathname === '/myProperties' },
    { label: 'Recommendations', icon: 'pi pi-star', url: '/recommendations', active: location.pathname === '/recommendations' },
    { label: 'Contact', icon: 'pi pi-envelope', url: '/contact', active: location.pathname === '/contact' },
    // userLoggedIn && userLoggedIn.permissions === 'admin' &&
    //   { label: 'AwaitingProperies', icon: 'pi pi-clock', url: '/AwaitingProperies', active: location.pathname === '/AwaitingProperies' },
  ];

  return (
    <Menubar 
      model={items.map(item => ({
        ...item,
        command: () => navigate(item.url), // ניווט בעת לחיצה
        className: item.active ? 'p-menuitem-active' : '' // הוספת קלאס לרכיב האקטיבי
      }))} 
    />
  );
};

export default Navbar;
