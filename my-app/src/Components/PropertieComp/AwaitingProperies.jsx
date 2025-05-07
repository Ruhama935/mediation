import { Button } from "primereact/button"
import { useGetAwaitingProperiesQuery, useUpdateStatusProperiesMutation } from "./PropertyApiSlice"
import PropertyOnCard from "./OneProperty/PropertyOnCard"
import UserDetails from "./OneProperty/UserDetails"
import "../ButtonCss.css"


export default function AwaitingProperies() {
    const { data, error, isLoading } = useGetAwaitingProperiesQuery()
    const [updateStatusProperies] = useUpdateStatusProperiesMutation()

    const handleChange = (id, status) => {
        updateStatusProperies({ id, status })
    }

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    if (!data || data.length === 0) return <div>אין דירות ממתינות לאישור</div>

    return (
        <div lassName="card flex justify-content-center" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {data.map((property) => (
                <div key={property._id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <PropertyOnCard property={property} />
                    <Button className="button" onClick={() => handleChange(property._id, 'Confirmed')}>אשר דירה</Button>
                </div>
            ))}
        </div>
    )
}