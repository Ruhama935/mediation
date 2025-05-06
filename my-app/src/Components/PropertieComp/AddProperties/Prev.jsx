import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function Prev() {
    const navigate = useNavigate();

    return(
        <>
            <div className="card flex justify-content-center" style={{ display: 'flex', flexWrap: 'wrap',flexDirection: 'column', alignContent: 'center', justifyContent: 'center', gap: '1rem' }}>
                <h1>פרסם כאן את הנכס שלך</h1>
                <h2>שלב 1 - פרטי הנכס</h2>
                <br />
                <h2>שלב 2 - תמונות</h2>
                <br />
                <h2>שלב 3 - סיום: הנכס עובר לאישור בעל האתר</h2>
                <br />
                <span style={{ fontSize: '20px', color: 'grey' }}>בצע כניסה כדי לפרסם נכס. משתמש חדש? הירשם עכשיו</span>
                <br />
                <Button onClick={() => 
                { navigate(`/Add`)}}>התחל בפרסום הנכס</Button>
            </div>
        </>
    )
}