import { InputNumber } from 'primereact/inputnumber';
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";



const MoreDetails = (prop) => {

    const {  description, setDescription, comments, setComments, date, setDate, address, setAddress } = prop

    return (
        <>
            
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', direction: 'rtl' }}>
                <div className="card flex justify-content-center">
                    <FloatLabel>
                        <InputTextarea required id="description" value={description}  onChange={(e) => setDescription(e.target.value)} rows={5} cols={30} />
                        <label htmlFor="description">Description</label>
                    </FloatLabel>
                    <br />
                    <br />
                    <div className="card flex justify-content-center">
                        <FloatLabel>
                            <InputTextarea id="description" value={comments} onChange={(e) => setComments(e.target.value)} rows={5} cols={30} />
                            <label htmlFor="description">Comments</label>
                        </FloatLabel>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', direction: 'rtl' }}>
                <div className="card flex justify-content-center">
                    <FloatLabel>
                        <Calendar required inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
                        <label htmlFor="birth_date">Eviction Date</label>
                    </FloatLabel>
                </div>
                <br />
                <br />
                <div className="card flex justify-content-center">
                    <FloatLabel>
                        <InputText required id="username" value={address} onChange={(e) => setAddress(e.target.value)} />
                        <label htmlFor="username">Address</label>
                    </FloatLabel>
                </div>
            </div>
        </>
    )
}

export default MoreDetails