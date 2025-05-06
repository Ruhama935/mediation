import { Button } from "primereact/button"
import { useGetAwaitingProperiesQuery, useUpdateStatusProperiesMutation } from "./PropertyApiSlice"
import PropertyOnCard from "./PropertyOnCard"
import UserDetails from "./UserDetails"


export default function AwaitingProperies() {
    const { data, error, isLoading } = useGetAwaitingProperiesQuery()
    const [updateStatusProperies] = useUpdateStatusProperiesMutation()
    // const [sendFunc] = useSendEmailMutation()

    const handleChange = (id, status) => {
        updateStatusProperies({ id, status })
        // sendFunc({ propertyId: id, type: "אישור דירה" })
    }

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    if (!data || data.length === 0) return <div>אין דירות ממתינות לאישור</div>

    const handleClick = (propertyId) => {
        // Handle the click event for the property card
        console.log(`Property ID: ${propertyId}`);
    }

    return (
        <div lassName="card flex justify-content-center" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {data.map((property) => (
                // <PropertyOnCard property={property} />
                <div key={property._id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <PropertyOnCard property={property} />
                    <Button onClick={() => handleChange(property._id, 'Confirmed')}>אשר דירה</Button>
                    {/* <Button onClick={() => handleChange(property._id, 'Sold')}>הצג פרטי לקוח</Button> */}
                    {/* <UserDetails id={property._id} /> */}
                </div>
            ))}
        </div>
    )
}