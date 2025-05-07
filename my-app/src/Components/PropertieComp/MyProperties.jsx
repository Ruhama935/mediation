import { useGetMyProperiesQuery } from './PropertyApiSlice'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setMyProperties } from './PropertySlice'
import PropertyOnCard from './OneProperty/PropertyOnCard'
import { Galleria } from 'primereact/galleria'
import Gallerias from './OneProperty/Gallerias'
import DeleteToUser from './OneProperty/DeleteToUser'
import DeleteProperty from './OneProperty/DeleteProperty'

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
                    <PropertyOnCard property={property}/>
                )
            })}
            
        </div >
    )
}

export default MyProperties
