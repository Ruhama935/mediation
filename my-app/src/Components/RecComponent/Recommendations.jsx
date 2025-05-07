import { use, useEffect } from "react";
import Recommendation from "./Recommendation";
import { useDeleteRecommendationMutation, useGetAwaitingRecommendationsQuery, useGetRecommendationsQuery } from "./RecommendationApiSlice";
import { Button } from "primereact/button";
import AddRec from "./AddRec";
import { useSelector } from "react-redux";

export default function Recommendations() {
    const { data, isSuccess, isError } = useGetRecommendationsQuery()
    const { data: awaitData, isSuccess: awaitIsSuccess } = useGetAwaitingRecommendationsQuery()
    const userLoggedIn = useSelector((state) => state.auth.user);


    useEffect(() => {
        if (isSuccess) {
            console.log(data)
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            console.log("Error fetching recommendations", isError)
        }
    }, [isError])


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#f0f0f0',
        }}>
            <h1 style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>המלצות</h1>
            {/* <Button className="button" style={{ margin: '0.5rem', justifyContent: 'end' }} variant="outlined" color="neutral">הוסף המלצה</Button> */}
            <AddRec />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                {data && data.map((recommendation) => (
                    <Recommendation key={recommendation._id} recommendation={recommendation} type={userLoggedIn?userLoggedIn.permissions:""} />
                ))}
            </div>
            {userLoggedIn ? userLoggedIn.permissions === 'admin' && (<>
                <hr style={{ width: '80%', marginTop: '10%', border: '0.5px solid #ccc' }} />
                <h1 style={{ fontFamily: 'cursive', fontWeight: 'bold' }}>המלצות ממתינות</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }} >
                    {awaitData && awaitData.map((recommendation) => (
                        <Recommendation key={recommendation._id} recommendation={recommendation} type={userLoggedIn?userLoggedIn.permissions:""} />
                    ))}
                </div>
            </>): null}
        </div>
    );
}