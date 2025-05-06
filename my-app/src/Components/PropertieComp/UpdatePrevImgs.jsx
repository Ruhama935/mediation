import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
// import { CardCover } from "@mui/joy";
import { Button } from "primereact/button";
import { useEffect, useState, useRef } from "react";
import { Typography } from '@mui/joy';

export default function UpdatePrevImgs({ prevImgs, setPrevImgs }) {
    const BASE_URL = "http://localhost:8080/uploads/";
    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     if (prevImgs && prevImgs.length > 0) {
    //         const existingImages = prevImgs.map((imgName) => ({
    //             name: imgName,
    //             url: `${BASE_URL}${imgName}`
    //         }));
    //         setImages(existingImages);
    //     }
    // }, [prevImgs]);

    const onTemplateRemove = (file) => {
        setPrevImgs((prevImgs) => prevImgs.filter((f) => f !== file));
        // callback();
    };

    const onTemplateClear = () => {
        setPrevImgs([]);
    }


    const itemTemplate = (file) => {
        // const isExistingImage = file.objectURL === undefined && file.url;
        // const src = isExistingImage ? file.url : file.objectURL;

        return (
            <Card sx={{
                minHeight: '180px', width: 220, margin: 5, overflow: 'hidden', position: 'relative',
                cursor: 'pointer', margin: '5px'
            }}
            >
                <CardCover >
                <img
                    src={`http://localhost:8080/uploads/${file}`}
                    // srcSet={`http://localhost:8080/uploads/${file}`}
                    // loading="lazy"
                    alt=""
                    // style={{ transition: 'transform 0.3s ease' }}
                    // onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    // onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <Button  label="Clear" icon="pi pi-times" style={{zIndex: '2'}}/>

            </CardCover>
            <CardContent>
                <Typography>
                <Button  label="Clear" icon="pi pi-times" onClick={() => onTemplateRemove(file)}/>

                </Typography>
            </CardContent>
                {/* <CardCover>
                    
                <Button  label="Clear" icon="pi pi-times" 
                // onClick={
                //     onTemplateRemove
                //     }
                     />
                </CardCover> */}
            </Card>
        );
    };

    // const headerTemplate = (options) => {
    //     const { className, chooseButton, cancelButton } = options;
    //     return (
    //         <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
    //             {chooseButton}
    //             {cancelButton}
    //         </div>
    //     );
    // }

    return (<>
        <div className="card flex justify-content-start" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', gap: '1rem' }}>
            {prevImgs && prevImgs.map((image) => <>
                {console.log(image, typeof image)}
                {itemTemplate(image)}
                {/* <img src={`http://localhost:8080/uploads/${image}`} alt={image} /> */}
                {/* <img src={image} alt
                {/* < Card sx = {{
                minHeight: '280px', width: 320, margin: 5, overflow: 'hidden', position: 'relative',
                cursor: 'pointer',
            }}
            >
            <CardCover >
                <img
                    src={`http://localhost:8080/uploads/1746493333147-26577965-p_sections_image1_id124_rndzMQy_R1.webp`}
                    srcSet={`http://localhost:8080/uploads/1746493333147-26577965-p_sections_image1_id124_rndzMQy_R1.webp`}
                    loading="lazy"
                    alt=""
                    style={{ transition: 'transform 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
            </CardCover>

        </Card>*/}
        {/* <Card>
                <img src={`http://localhost:8080/uploads/${image}`}/></Card>
                {/* <Button label="Clear" icon="pi pi-times" onClick={onTemplateRemove(image)}/> */}
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