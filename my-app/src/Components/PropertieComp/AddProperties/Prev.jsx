import { Button } from "primereact/button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../../ButtonCss.css'

export default function Prev() {
    const navigate = useNavigate();
    const userLoggedIn = useSelector((state) => state.auth.user);


    return (
        <>
            <div className="card flex justify-content-center" style={{ display: 'flex'
                , flexWrap: 'wrap'
                , flexDirection: 'column'
                , alignContent: 'center'
                , justifyContent: 'center'
                , gap: '1rem'
                , backgroundColor: '#00032e'
                , color: 'rgb(237, 191, 109)'
                ,padding: '80px'
                ,direction: 'rtl',}}>
                <h2>פרסם כאן את הנכס שלך</h2>
                <h3>שלב 1 - פרטי הנכס</h3>
                <br />
                <h3>שלב 2 - תמונות</h3>
                <br />
                <h3>שלב 3 - סיום: הנכס עובר לאישור בעל האתר</h3>
                <br />
                {userLoggedIn === null && <span style={{ fontSize: '20px', color: 'grey' }}>בצע כניסה כדי לפרסם נכס. משתמש חדש? הירשם עכשיו</span>}
                <br />
                {userLoggedIn === null ? <Button className="my-button" disabled>התחל בפרסום הנכס</Button>
                    : <Button className="my-button" onClick={() => { navigate(`/Add`) }}>התחל בפרסום הנכס</Button>}
            </div>
        </>
    )
}