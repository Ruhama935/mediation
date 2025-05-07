import { use, useEffect, useState } from "react"
import { useGetProperiesQuery } from "./PropertieComp/PropertyApiSlice"
import PropertyOnCard from "./PropertieComp/PropertyOnCard"
import { Button } from "primereact/button"
import './ButtonCss.css'

export default function Home() {
    const { data, error, isLoading, isSuccess } = useGetProperiesQuery()
    const [properties, setProperties] = useState([])
    useEffect(() => {
        if (isSuccess) {
            console.log(data)
            setProperties(data.slice(0, 6))
            console.log(properties)
        }
    }, [isSuccess])

    useEffect(() => {
        console.log('updated properties:', properties)
    }, [properties])
    return (<>
        <img
            src="/Beitar.JPG"
            style={{
                width: '100%',
                height: '100vh',
                objectFit: 'cover',
                // position: 'absolute', 
                top: 0,
                left: 0,
                zIndex: -1,
                opacity: 0.7,
            }}
        />
        {/* <img
            src="/racheli.png"
            style={{ width: '10%', 
                height: '20vh', 
                objectFit: 'cover', 
                position: 'absolute', 
                top: '40%', 
                left: '40%', 
                zIndex: 1,
                opacity: 1,
             }}
        /> */}
        <span style={{
            position: 'absolute',
            top: '40%',
            left: '38%',
            zIndex: 1,
            fontSize: '75px',
            color: '#00032e',
            fontWeight: 'bold',

        }}>
            RACHELI G
        </span>

        <div className="card flex justify-content-center" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            background: '#00032e',
            paddingBottom: '40px',
        }}>
            <span style={{
                // position: 'absolute',
                // top: '50%',
                left: '38%',
                zIndex: 1,
                fontSize: '50px',
                color: 'rgb(237 191 109)',
                fontWeight: 'bold',
                marginTop: '40px',
            }}>
                נכסים חמים בשוק</span>
            <br />
            <div className="card flex justify-content-center" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            background: '#00032e',
        }}>
                {properties.map((property) =>
                    (<PropertyOnCard property={property} />)
                )}
            </div>
            <Button label="לכל הנכסים" icon="pi pi-check"  className="my-button"                    
                   onClick={() => window.location.href = '/properties'} />
        </div>
    </>
    )
}