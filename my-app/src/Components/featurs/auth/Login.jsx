import React, { useEffect } from 'react';
// import { Button } from 'primereact/button';
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { useLoginMutation } from './authApiSlice';
import { setToken } from './authSlice'
import { useDispatch } from 'react-redux';
import { Button, TextField, Box, Typography } from '@mui/material';


const Login = () => {
    const [loginFunc, { isError, isLoading, data, error, isSuccess }] = useLoginMutation()
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        if (isSuccess) {
            console.log(data)
            dispatch(setToken(data))
        }
    }, [isSuccess])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        console.log(user)
        e.preventDefault()
        loginFunc(user)
    }
    return (
        <Box
          sx={{
            maxWidth: 400,
            mx: 'auto',
            mt: 8,
            p: 4,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: 'white',
          }}
        >
          <Typography variant="h5" gutterBottom>התחברות</Typography>
          <TextField label="אימייל" fullWidth margin="normal" />
          <TextField label="סיסמה" type="password" fullWidth margin="normal" />
          <Button variant="contained" fullWidth>התחבר</Button>
        </Box>
      );
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 to-purple-200 px-4">
          <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-right">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">התחברות</h2>
            <form className="space-y-5">
              <div>
                <label className="block mb-1 text-gray-700">דוא"ל</label>
                <input type="email" className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">סיסמה</label>
                <input type="password" className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md transition-all">התחבר</button>
            </form>
          </div>
        </div>
      );
    return (
        <div>
            {/* <div className="card flex justify-content-center"> */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <br /><br />
                <FloatLabel>
                    <InputText required name="email" value={user.email} onChange={(e) => handleChange(e)} />
                    <label htmlFor="email">Email</label>
                </FloatLabel>
                <br /><br />
                <FloatLabel>
                    <InputText required name="password" value={user.password} type="password" onChange={(e) => handleChange(e)} />
                    <label htmlFor="password">Password</label>
                </FloatLabel>
                {/* </div> */}
                <br /><br />
                <Button type='submit' label="Login" severity="success" />
            </form>
        </div>
    )
}

export default Login;


// export default function LoginPage() {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 to-purple-200 px-4">
//         <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-right">
//           <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">התחברות</h2>
//           <form className="space-y-5">
//             <div>
//               <label className="block mb-1 text-gray-700">דוא"ל</label>
//               <input type="email" className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
//             </div>
//             <div>
//               <label className="block mb-1 text-gray-700">סיסמה</label>
//               <input type="password" className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
//             </div>
//             <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md transition-all">התחבר</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
  


// function LoginForm() {
//   return (
//     <Box
//       sx={{
//         maxWidth: 400,
//         mx: 'auto',
//         mt: 8,
//         p: 4,
//         boxShadow: 3,
//         borderRadius: 2,
//         backgroundColor: 'white',
//       }}
//     >
//       <Typography variant="h5" gutterBottom>התחברות</Typography>
//       <TextField label="אימייל" fullWidth margin="normal" />
//       <TextField label="סיסמה" type="password" fullWidth margin="normal" />
//       <Button variant="contained" fullWidth>התחבר</Button>
//     </Box>
//   );
// }
