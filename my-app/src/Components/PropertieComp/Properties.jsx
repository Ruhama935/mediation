import { useGetProperiesQuery } from './PropertyApiSlice'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProperties } from './PropertySlice'
import UpdateProperty from './UpdateProperty'
import Gallerias from './OneProperty/Gallerias'
import PropertyOnCard from './PropertyOnCard'

const Properties = () => {
    const { data, error, isLoading, isSuccess } = useGetProperiesQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isSuccess) {
            console.log(data)
            dispatch(setProperties(data))
        }
    }, [isSuccess])

    return (
        <div className="card flex justify-content-center" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}
        >
            {data && isSuccess && data.map((property) => {
                return (
                    <>
                        <PropertyOnCard property={property} />
                    </>
                )
            })}
        </div>
    )
}

export default Properties