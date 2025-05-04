import { useLocation } from "react-router-dom";
import Gallerias from "./Gallerias";
// import Imgs from "./ImageGallery";
import ImageGallery from "./ImageGallery";
import TagsOfProperty from "./TagsOfProperty";
import { Button } from "primereact/button";
// import Dialogs from "./Contact";
import Contact from "./Contact";

export default function PropertyOne() {
    const location = useLocation();
    const { property } = location.state;
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '3% 15% 0% 12%' }} >
                {/* <Gallerias images={property.imgs}/> */}
                <ImageGallery images={property.imgs} />
            </div>
            <h1 style={{ display: 'flex', justifyContent: 'flex-end', padding: '2% 12% 30px 12%', fontSize: '40px' }}>
                {property.address} {property.status === 'Sold' && "(נמכר)"}</h1>
            <hr style={{ width: '80%', margin: '0 auto', border: '0.5px solid #ccc' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3% 15% 30px 15%', direction: 'rtl' }}>

                {/* <h2 style={{ fontSize: '30px' }}>Size: {property.size} מ"ר</h2> */}
                <div style={{ fontSize: '18px', padding: '2%'}}>
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
                    {/* <hr style={{ width: '100%', marginTop: '10%', border: '0.5px solid #ccc' }} /> */}
                    <TagsOfProperty tags={property.tags} />
                </div>
            </div>
            {property.status !== 'Sold' && <>
            <hr style={{ width: '80%', margin: '0 auto', border: '0.5px solid #ccc' }} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3% 15% 30px 15%', direction: 'rtl' }}>
                {/* <Button label="מתעניין בנכס" style={{margin: '2%'}}/> */}
                <a href="tel:0534189337" target="_blank" rel="noopener noreferrer" className="p-button font-bold" style={{ textDecoration: 'none', margin: '2%' }}>
                    התקשר לרחלי 0534189337
                </a>
                <Contact id={property._id} address={property.address}/>
            </div></>}
        </>
    )
}