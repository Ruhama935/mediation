import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import { Button } from "primereact/button";
import { useEffect, useState, useRef } from "react";
import { Typography } from '@mui/joy';

export default function UpdatePrevImgs({ prevImgs, setPrevImgs }) {
    const onTemplateRemove = (file) => {
        setPrevImgs((prevImgs) => prevImgs.filter((f) => f !== file));
    };

    const onTemplateClear = () => {
        setPrevImgs([]);
    }


    const itemTemplate = (file) => {
        return (
            <Card sx={{
                minHeight: '180px', width: 220, margin: 5, overflow: 'hidden', position: 'relative',
                cursor: 'pointer', margin: '5px'
            }}
            >
                <CardCover >
                <img
                    src={`http://localhost:8080/uploads/${file}`}
                    alt=""
                />
                <Button  label="Clear" icon="pi pi-times" style={{zIndex: '2'}}/>

            </CardCover>
            <CardContent>
                <Typography>
                <Button  label="Clear" icon="pi pi-times" onClick={() => onTemplateRemove(file)}/>
                </Typography>
            </CardContent>
            </Card>
        );
    };

    return (<>
        <div className="card flex justify-content-start" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', gap: '1rem' }}>
            {prevImgs && prevImgs.map((image) => <>
                {console.log(image, typeof image)}
                {itemTemplate(image)}
            </> 
            )
            }        </div >
            {prevImgs.length > 0 &&
            <div className="flex align-items-center" style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                <span className="flex flex-column text-left ml-3" >
                    <Button label="מחק את כל התמונות הקודמות" icon="pi pi-times" onClick={onTemplateClear}/>
                </span>
            </div>}</>
    );
}