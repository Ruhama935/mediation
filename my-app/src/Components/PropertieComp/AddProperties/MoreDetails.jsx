import { InputNumber } from 'primereact/inputnumber';
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";



const MoreDetails = (prop) => {

    const { floor, setFloor, buildingFloor, setBuildingFloor, rooms, setRooms, size, setSize, price, setPrice, description, setDescription, comments, setComments, date, setDate, address, setAddress } = prop

    return (
        <>
            <div className="flex-auto">
                <label htmlFor="minmax-buttons" className="font-bold block mb-2">מס' חדרים </label>
                <InputNumber required inputId="minmax-buttons" value={rooms} onValueChange={(e) => setRooms(e.value)} mode="decimal" showButtons min={1} max={20} />
            </div>
            <br />
            <div className="flex-auto">
                <label htmlFor="minmax-buttons" className="font-bold block mb-2">מס' קומות בבניין </label>
                <InputNumber inputId="minmax-buttons" value={buildingFloor} onValueChange={(e) => setBuildingFloor(e.value)} mode="decimal" showButtons min={1} max={30} />
            </div>
            <br />
            <div className="flex-auto">
                <label htmlFor="minmax-buttons" className="font-bold block mb-2">מס' קומה </label>
                <InputNumber required inputId="minmax-buttons" value={floor} onValueChange={(e) => setFloor(e.value)} mode="decimal" showButtons min={1} max={30} />
            </div>
            <br />
            <div className="flex-auto">
                <label htmlFor="minmax-buttons" className="font-bold block mb-2">שטח במ"ר </label>
                <InputNumber required inputId="minmax-buttons" value={size} onValueChange={(e) => setSize(e.value)} mode="decimal" showButtons min={10} max={200} />
            </div>
            <br />
            <div className="flex-auto">
                <label htmlFor="minmax-buttons" className="font-bold block mb-2">מחיר משוער </label>
                <InputNumber required inputId="minmax-buttons" value={price} onValueChange={(e) => setPrice(e.value)} mode="decimal" showButtons min={100000} max={10000000} />
            </div>
            <br />
            <br />
            <div className="card flex justify-content-center">
                <FloatLabel>
                    <InputTextarea required id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={5} cols={30} />
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
            <br />
            <br />
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
        </>
    )
}

export default MoreDetails