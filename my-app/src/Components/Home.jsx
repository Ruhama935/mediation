import { use, useEffect, useState } from "react"
import { useGetProperiesQuery } from "./PropertieComp/PropertyApiSlice"
import PropertyOnCard from "./PropertieComp/OneProperty/PropertyOnCard"
import { Button } from "primereact/button"
import './ButtonCss.css'
import ContactDetails from "./ContactDetails/ContactDetails"

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
        <div style={{ position: 'relative', width: '100hv', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#00032e' }}>
            <img
                src="/FullLogo.png"
                alt="Background"
                style={{ width: '45%', height: '50%', objectFit: 'cover' }}
            />
            <img
                src="/Beitar.JPG"
                alt="Overlay"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.7 // אופציונלי: שקיפות לתמונה העליונה
                }}
            />
        </div>
{/* 
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
        <img
            src="/FullLogo.png"
            style={{
                width: '10%',
                position: 'absolute',
                height: '100vh',
                width: '100%',
                top: 0,
                zIndex: '-1'
            }}
        /> */}
        {/* <span style={{
            position: 'absolute',
            top: '40%',
            left: '38%',
            zIndex: 1,
            fontSize: '75px',
            color: '#00032e',
            fontWeight: 'bold',

        }}>
            RACHELI G
        </span> */}

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
            <Button label="לכל הנכסים" icon="pi pi-check" className="my-button"
                onClick={() => window.location.href = '/properties'} />
        </div>
        <ContactDetails />
    </>
    )
}