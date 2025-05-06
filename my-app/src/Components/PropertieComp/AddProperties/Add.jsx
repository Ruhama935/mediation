import React, { useEffect, useRef, useState } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import ChooseTags from './ChooseTags';
import Type from "./Type";
import TypeOfProperty from "./TypeOfProperty";
import MoreDetails from "./MoreDetails";
import AddImages from "./AddImages";
import { useCreatePropertyMutation } from '../PropertyApiSlice'
import { useDispatch } from 'react-redux'
import { addMyProperty } from '../PropertySlice'
import NumericalData from "./NumericalData";

export default function Add() {
    const stepperRef = useRef(null);
    const [tags, setTags] = useState([]);
    const [condition, setCondition] = useState('');
    const [type, setType] = useState('');
    const [rooms, setRooms] = useState(1);
    const [floor, setFloor] = useState(1);
    const [buildingFloor, setBuildingFloor] = useState(1);
    const [size, setSize] = useState(50);
    const [price, setPrice] = useState(1000000);
    const [description, setDescription] = useState('');
    const [comments, setComments] = useState('');
    const [date, setDate] = useState(null);
    const [address, setAddress] = useState('');
    const [imgs, setImgs] = useState([]);
    const [planImg, setPlanImg] = useState(null);
    const [flag, setFlag] = useState(false);
    const [createFunc, { isError, isLoading, data, error, isSuccess }] = useCreatePropertyMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isSuccess) {
            console.log(data)
            dispatch(addMyProperty(data))
        }
    }, [isSuccess])

    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(imgs)
        // formData.append("imgs", planImg)
        // formData.append("Images", imgs)
        imgs.forEach((img) => {
            formData.append('Images', img); // שוב ושוב לאותו שם
          });
        formData.append("length", imgs.length)
        formData.append("tags", JSON.stringify(tags))
        formData.append("condition", condition)
        formData.append("type", type)
        formData.append("rooms", rooms)
        formData.append("floor", floor)
        formData.append("buildingFloor", buildingFloor)
        formData.append("size", size)
        formData.append("price", price)
        formData.append("description", description)
        formData.append("comments", comments)
        formData.append("date", date)
        formData.append("address", address)

        // formData.append("Images", JSON.stringify(imgs))
        e.preventDefault()
        console.log(formData)
        createFunc(formData)
        console.log(data)
    }

    return (
        <div className="card flex justify-content-center"
            style={{ display: 'flex', justifyContent: 'center', height: '85%', marginTop: '5%' }}>
            <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
                <StepperPanel header="סוג הנכס">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"></div>
                    </div>
                    <br />
                    <TypeOfProperty selected={type} setSelected={setType} selected1={condition} setSelected1={setCondition} />
                    <br />
                    <div className="flex pt-4 justify-content-end" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5%' }}>
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="פרטי הנכס">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"></div>
                    </div>
                    <br />
                    <ChooseTags selected={tags} setSelected={setTags} />
                    <br />
                    <div className="flex pt-4 justify-content-between" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5%' }}>
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="נתונים מספריים">
                    <div className="flex flex-column h-12rem">
                        <NumericalData
                            rooms={rooms} setRooms={setRooms}
                            floor={floor} setFloor={setFloor}
                            buildingFloor={buildingFloor} setBuildingFloor={setBuildingFloor}
                            size={size} setSize={setSize}
                            price={price} setPrice={setPrice}
                        ></NumericalData>
                         <div className="flex pt-4 justify-content-start" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5%' }}>
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                    </div>
                </StepperPanel>
                <StepperPanel header="תאור הנכס">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"></div>
                    </div>
                    <br />
                    <MoreDetails
                        description={description} setDescription={setDescription}
                        comments={comments} setComments={setComments}
                        date={date} setDate={setDate}
                        address={address} setAddress={setAddress}
                    />
                    <br />
                    <div className="flex pt-4 justify-content-start" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5%' }}>
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="הוספת תמונות">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"></div>
                    </div>
                    <AddImages formData={imgs} setFormData={setImgs} />
                    <div className="flex pt-4 justify-content-end" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5%' }}>
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="בקשת פרסום">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"></div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', margin: '10%'}} >
                    <Button onClick={(e) => handleSubmit(e)}>פרסם נכס</Button>
                    </div><br />
                    <div className="flex pt-4 justify-content-start" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5%' }}>
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    </div>
                </StepperPanel>
            </Stepper>
        </div>
    )
}
