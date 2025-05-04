import { InputNumber } from 'primereact/inputnumber';
import React from "react";

export default function NumericalData({ floor, setFloor, buildingFloor, setBuildingFloor, rooms, setRooms, size, setSize, price, setPrice, }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', direction: 'rtl' }}>
            <div>
                <div className="flex-auto" >
                    <label htmlFor="minmax-buttons" className="font-bold block mb-2">מס' חדרים </label>
                    <br />
                    <InputNumber required inputId="minmax-buttons" value={rooms} onValueChange={(e) => setRooms(e.value)} mode="decimal" showButtons min={1} max={20} />
                </div>
                <br />
                <div className="flex-auto">
                    <label htmlFor="minmax-buttons" className="font-bold block mb-2">מס' קומות בבניין </label>
                    <br />
                    <InputNumber inputId="minmax-buttons" value={buildingFloor} onValueChange={(e) => setBuildingFloor(e.value)} mode="decimal" showButtons min={1} max={30} />
                </div>
                <br />
                <div className="flex-auto">
                    <label htmlFor="minmax-buttons" className="font-bold block mb-2">מס' קומה </label>
                    <br />
                    <InputNumber required inputId="minmax-buttons" value={floor} onValueChange={(e) => setFloor(e.value)} mode="decimal" showButtons min={1} max={30} />
                </div>
            </div>
            <div>
                <div className="flex-auto">
                    <label htmlFor="minmax-buttons" className="font-bold block mb-2">שטח במ"ר </label>
                    <br />
                    <InputNumber required inputId="minmax-buttons" value={size} onValueChange={(e) => setSize(e.value)} mode="decimal" showButtons min={10} max={200} />
                </div>
                <br />
                <div className="flex-auto">
                    <label htmlFor="minmax-buttons" className="font-bold block mb-2">מחיר משוער </label>
                    <br />
                    <InputNumber required inputId="minmax-buttons" value={price} onValueChange={(e) => setPrice(e.value)} mode="decimal" showButtons min={100000} max={10000000} />
                </div>
            </div>
        </div>
    )
}