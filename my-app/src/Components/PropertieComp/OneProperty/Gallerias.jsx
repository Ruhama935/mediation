import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import 'react-image-gallery/styles/css/image-gallery.css';
// import 'primereact/resources/themes/saga-blue/theme.css'; // theme
// import 'primereact/resources/primereact.min.css'; // core css
// import { PhotoService } from './service/PhotoService';

export default function Gallerias(props) {
    const { images } = props;
    const galleria = useRef(null);

    const responsiveOptions = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const processedImages = useMemo(() => {
        if (!images || images.length === 0) return [];

        // אם זה סתם כתובות (string), נהפוך לאובייקט נכון
        if (typeof images[0] === 'string') {
            return images.map(url => ({
                itemImageSrc: `http://localhost:8080/uploads/${url}`,
                thumbnailImageSrc: `http://localhost:8080/uploads/${url}`,
                alt: 'Image'
            }));
        }
        // אחרת, נניח שכבר זה אובייקט נכון
        return images;
    }, [images]);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt}  sx={{ minHeight: '280px', width: 320, margin: 5 ,overflow: 'hidden' ,position: 'relative'}} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} sx={{ minHeight: '280px', width: 320, margin: 5 ,overflow: 'hidden' ,position: 'relative'}} />;
    }

    return (
        <div className="card flex justify-content-center">
            <Galleria ref={galleria} value={processedImages} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }} 
                circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

            <Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
        </div>
    )
}
        