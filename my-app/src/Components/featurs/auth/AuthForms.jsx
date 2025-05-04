import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation, useRegisterMutation } from './authApiSlice';
import { setToken } from './authSlice';
import { useNavigate } from 'react-router-dom';
import {
  Box, Tab, Tabs, TextField, Button, Typography, Paper
} from '@mui/material';

function AuthForms() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isSuccess, data }] = useLoginMutation();
  const [register, {isSuccess: isSuccessRegister, data: dataRegiter }] = useRegisterMutation();
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  useEffect(() => {
    if (isSuccess) {
      console.log(data)
      dispatch(setToken(data))
      navigate('/properties')
    }
  }, [isSuccess])
  
  useEffect(() => {
    if (isSuccessRegister) {
      console.log(data)
      navigate('/')
      // dispatch(setToken(dataRegiter))
    }
  }, [isSuccessRegister])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTabChange = (e, newValue) => {
    setTab(newValue);
    setFormData({ name: '', email: '', phone: '', password: '' });
  };

  const handleSubmit = () => {
    console.log(tab === 0 ? 'Login' : 'Sign Up', formData);
    if (tab === 0) {
      login({ email: formData.email, password: formData.password });
    } else {
      register(formData);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f4f6f8">
      <Paper elevation={3} sx={{ p: 4, width: 350 }}>
        <Tabs value={tab} onChange={handleTabChange} centered>
          <Tab label="התחברות" />
          <Tab label="הרשמה" />
        </Tabs>

        <Box mt={3} display="flex" flexDirection="column" gap={2}>
          {tab === 1 && (
            <>
              <TextField label="שם מלא" name="name" value={formData.name} onChange={handleChange} fullWidth />
              <TextField label="טלפון" name="phone" value={formData.phone} onChange={handleChange} fullWidth />
            </>
          )}

          <TextField label="אימייל" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth />
          <TextField label="סיסמה" name="password" type="password" value={formData.password} onChange={handleChange} fullWidth />

          <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
            {tab === 0 ? 'התחבר' : 'הירשם'}
          </Button>
        </Box>

        <Typography align="center" mt={2} color="textSecondary" fontSize={14}>
          {tab === 0 ? "אין לך חשבון? עבור להרשמה" : "כבר רשום? עבור להתחברות"}
        </Typography>
      </Paper>
    </Box>
  );
}

export default AuthForms;
