import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeToken } from './authSlice';
import { useNavigate } from 'react-router-dom';

const UserMenu = ({ onLogin, onLogout }) => {
  const menu = useRef(null);
  const user = useSelector((state) => state.auth.user);
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const items = isUserLoggedIn ? [
    { label: 'התנתק', icon: 'pi pi-sign-out', command: () => {console.log('logout')
      dispatch(removeToken())} }
  ] : [
    { label: 'התחבר', icon: 'pi pi-sign-in', command: () => { nevigate('/auth') } },
  ];

  return (
    <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
      <Avatar icon="pi pi-user" size="mediume" style={{ cursor: 'pointer' }} onClick={(e) => menu.current.toggle(e)} />
      <Menu model={items} popup ref={menu} />
    </div>
  );
};

export default UserMenu;