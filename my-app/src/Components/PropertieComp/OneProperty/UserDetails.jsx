import { useEffect, useState } from "react";
import { useGetUserDetailsQuery } from "../PropertyApiSlice";

export default function UserDetails({ id }) {
    const [userDetails, setUserDetails] = useState(null)
    const { data, isSuccess, isError } = useGetUserDetailsQuery(id);


    useEffect(() => {
        if (isSuccess) {
            console.log(data)
            setUserDetails(data)
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            console.log("error")
        }
    }, [isError])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: '18px', padding: '2%', direction: 'rtl' }}>
            פרטי המוכר:
            <br />
            שם: {userDetails && userDetails.name}
            <br />
            טלפון: {userDetails && userDetails.phone}
            <br />
            מייל: {userDetails && userDetails.email}
            <br />
        </div>
    )
}
