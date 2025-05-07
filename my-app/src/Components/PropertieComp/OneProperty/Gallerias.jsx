import { Button } from "primereact/button";
import { useLocation, useNavigate } from "react-router-dom";

export default function Gallerias() {
    const nevigate = useNavigate();
    const location = useLocation();
    const { images = [] } = location.state;

    const handleChange = () => {
        nevigate(-1)
    }
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', padding: '3% 15% 0% 12%' }}>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={`http://localhost:8080/uploads/${image}`}
                    alt={`Image ${index + 1}`}
                    style={{
                        width: index%3==0 ?'90%':'43%',
                        height: '400px',
                        borderRadius: '8px',
                        objectFit: 'cover',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                        transition: 'all 0.3s ease',
                        margin: '15px',
                    }}
                />
            ))}
            <Button className="button" label="סגור גלריה" onClick={handleChange} style={{ margin: '20px' }} />
        </div>
    )
}