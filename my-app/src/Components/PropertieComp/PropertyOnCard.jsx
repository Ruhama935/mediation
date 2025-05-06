import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { useNavigate } from 'react-router-dom';
import DeleteProperty from './DeleteProperty';
import DeleteToUser from './DeleteToUser';
import { Avatar } from 'primereact/avatar';

export default function PropertyOnCard(props) {
    const { property } = props;
    const { address, type, price, size, imgs } = property;
    console.log(imgs)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/property/${property._id}`, { state: { property } }); // נווט לדף הנכס עם ה-ID המתאים
    }

    return (<>
        <Card sx={{
            minHeight: '280px', width: 320, margin: 5, overflow: 'hidden', position: 'relative',
            cursor: 'pointer',
        }}
        >
            {property.status === 'Sold' &&
                <Avatar label='נמכר' size="xlarge" shape="circle" style={{zIndex: 2, 
                    backgroundColor: 'rgb(255 255 255 / 50%)', 
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: 'rgb(83 83 90)',
                    padding: '46px' }} />
            }
            <CardCover >
                <img
                    src={`http://localhost:8080/uploads/${imgs[0]}`}
                    srcSet={`http://localhost:8080/uploads/${property.imgs[0]}`}
                    loading="lazy"
                    alt=""
                    style={{ transition: 'transform 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
            </CardCover>
            <CardCover
                sx={{
                    // zIndex: 2 ,
                    background:
                        'linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0) 300px)',
                }}
                style={{ transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <CardContent sx={{ justifyContent: 'flex-end' }}
                onClick={handleClick} 
            >
                <Typography level="title-lg" textColor="#fff">
                 ₪ {Number(price).toLocaleString()}
                </Typography>
                <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                >
                    {address}
                </Typography>
            </CardContent>
           
        </Card>

    </>

    );
}

