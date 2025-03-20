import React, { useEffect } from 'react';
import { Button } from 'primereact/button';
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { useLoginMutation } from './authApiSlice';
import { setToken } from './authSlice'
import { useDispatch } from 'react-redux';

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