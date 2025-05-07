import { useSelector } from "react-redux";
import UserDetails from "../UserDetails";
import Status from "../Status";
import DeleteProperty from "../DeleteProperty";
import { Button } from "primereact/button";
import DeleteToUser from "../DeleteToUser";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import '../../ButtonCss.css'

export default function ActionsBasedOnPermissions({ property }) {
    const userLoggedIn = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    // if (!userLoggedIn) return null; // If user is not logged in, do not render anything

    const handleClick = () => {
        navigate(`/property/update/${property._id}`, { state: { property } }); // נווט לדף הנכס עם ה-ID המתאים
    }
    if (userLoggedIn) { // If user is not logged in, do not render anything
        if (userLoggedIn.permissions === 'admin') {
            return (
                <>
                    <hr style={{ width: '80%', margin: '0 auto', border: '0.5px solid #ccc' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3% 15% 30px 15%', direction: 'rtl' }}>
                        <UserDetails id={property._id} />
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', fontSize: '18px', padding: '2%', direction: 'rtl' }}>
                            <Status id={property._id} />
                            <DeleteProperty id={property._id} />
                            <Button className="button" onClick={handleClick} style={{ margin: '0.5rem' }} >עדכן פרטי נכס</Button>
                            {/* <UpdateProperty property={property} /> */}
                        </div>
                    </div>
                </>
            );
        }
        else if (userLoggedIn._id === property.user) {
            return (
                <>
                    <hr style={{ width: '80%', margin: '0 auto', border: '0.5px solid #ccc' }} />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3% 15% 30px 15%', direction: 'rtl' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', fontSize: '18px', padding: '2%', direction: 'rtl' }}>
                            <Button disabled style={{ margin: '0.5rem' }} >{property.status}</Button>
                            <DeleteToUser id={property._id} />
                            <Button className="button" onClick={handleClick} style={{ margin: '0.5rem' }} >עדכן פרטי נכס</Button>
                        </div>
                    </div>
                </>
            )
        }
        else if (property.status !== 'Sold') {
            return (<>
                <hr style={{ width: '80%', margin: '0 auto', border: '0.5px solid #ccc' }} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3% 15% 30px 15%', direction: 'rtl' }}>
                    <a href="tel:0534189337" target="_blank" rel="noopener noreferrer" className="button" style={{ textDecoration: 'none', margin: '2%' }}>
                        התקשר לרחלי 0534189337
                    </a>
                    <Contact id={property._id} address={property.address} />
                </div></>
            )
        }
    }
    else if (property.status !== 'Sold') {
        return (<>
            <hr style={{ width: '80%', margin: '0 auto', border: '0.5px solid #ccc' }} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3% 15% 30px 15%', direction: 'rtl' }}>
                <a href="tel:0534189337" target="_blank" rel="noopener noreferrer" className="button" style={{ textDecoration: 'none', margin: '2%' }}>
                    התקשר לרחלי 0534189337
                </a>
                <Contact id={property._id} address={property.address} />
            </div></>
        )
    }

}