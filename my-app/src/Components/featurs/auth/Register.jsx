import React, { useEffect, useState } from 'react'
import { useRegisterMutation } from './authApiSlice'
import { useNavigate, useNavigation } from 'react-router-dom'
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

const Register = () => {
    const [registerFunc, { isError, isLoading, data, error , isSuccess}] = useRegisterMutation()
    // const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
        phone: ""
    })

    useEffect(() => {
        if (isSuccess) {
            console.log(data)
        }
    }
    , [isSuccess])
    
    const handleChange = (e) => {
        console.log("Im in the handleChange")
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        console.log(user)
        e.preventDefault()
        registerFunc(user)        
    }
    return (
        <div>
            {/* <div className="card flex justify-content-center"> */}
            <form onSubmit={ (e) => handleSubmit(e)}>
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
                <FloatLabel>
                    <InputText name="name" value={user.name} onChange={(e) => handleChange(e)} />
                    <label htmlFor="name">Name</label>
                </FloatLabel>
                <br /><br />
                <FloatLabel>
                    <InputText name="phone" value={user.phone} type="phone" onChange={(e) => handleChange(e)} />
                    <label htmlFor="phone">Phone</label>
                </FloatLabel>
                {/* </div> */}
            <br /><br />
            <Button type='submit' label="Register" severity="success" />
            </form>
        </div>
    )
}

export default Register;