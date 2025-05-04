import { useGetMyProperiesQuery } from './PropertyApiSlice'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setMyProperties } from './PropertySlice'
import PropertyOnCard from './PropertyOnCard'
import { Galleria } from 'primereact/galleria'
import Gallerias from './OneProperty/Gallerias'
import DeleteToUser from './DeleteToUser'
import DeleteProperty from './DeleteProperty'

const MyProperties = () => {
    const { data, error, isLoading, isSuccess } = useGetMyProperiesQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isSuccess) {
            console.log(data)
            dispatch(setMyProperties(data))
        }
    }, [isSuccess])

    return (
        <div className="card flex justify-content-center" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
        >
            {data && isSuccess && data.map((property) => {
                return (
                    // <span style={{ border: '1px solid black', padding: '20px', borderRadius: '10px' }}>
                    <PropertyOnCard property={property}>
                        {localStorage.getItem('userRole') === 'user' && <DeleteToUser id={property._id} />}
                        {localStorage.getItem('userRole') === 'admin' && <DeleteProperty style={{position: 'realative', }} id={property._id} />}
                        {/* </span> */} 
                    </PropertyOnCard>
                )
            })}
        </div >
    )
}

export default MyProperties
