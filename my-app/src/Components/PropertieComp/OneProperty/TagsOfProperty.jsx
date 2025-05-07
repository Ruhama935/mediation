import React from 'react';
import { Tag } from 'primereact/tag';

export default function TagsOfProperty({ tags }) {
    return (<>
        {(tags.length > 0) && tags.map((tag, index) => (
            <span style={{padding: '15% 2% 2% 2%'}} key={index}>
                <Tag 
                 value={tag} style={{color: 'rgb(237, 191, 109)',backgroundColor: '#00032e', margin: '2% 2% 2% 2%'}}></Tag>
            </span>
        ))}
    </>
    );
}
