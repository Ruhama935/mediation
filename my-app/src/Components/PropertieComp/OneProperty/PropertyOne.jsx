import { useLocation, useNavigate } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import TagsOfProperty from "./TagsOfProperty";
import ActionsBasedOnPermissions from "./ActionsBasedOnPermissions";

export default function PropertyOne() {
    const location = useLocation();
    const { property } = location.state;


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '3% 15% 0% 12%' }} >
                <ImageGallery images={property.imgs} />
            </div>
            <h1 style={{ display: 'flex', justifyContent: 'flex-end', padding: '2% 12% 30px 12%', fontSize: '40px' }}>
                {property.address} {property.status === 'Sold' && "(נמכר)"}</h1>
            <hr style={{ width: '80%', margin: '0 auto', border: '0.5px solid #ccc' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3% 15% 30px 15%', direction: 'rtl' }}>
                <div style={{ fontSize: '18px', padding: '2%' }}>
                    {property.type} עם {property.rooms} חדרים
                    <br />
                    קומה: {property.floor} מתוך {property.buildingFloor}
                    <br />
                    גודל: {property.size} מ"ר
                    <br />
                    מצב: {property.condition}
                    <br />
                    תאריך פינוי: {new Date(property.date).toLocaleDateString('he-IL')}
                    <br />
                    <br />
                    הערות: {property.comments}
                </div>
                <div>
                    <h2 style={{ fontSize: '30px' }}> {Number(property.price).toLocaleString()} ₪</h2>
                    <div style={{ fontSize: '18px' }}>{property.description} </div>
                    <br />
                    <TagsOfProperty tags={property.tags} />
                </div>
            </div>
            <ActionsBasedOnPermissions property={property} />
        </>
    )
}