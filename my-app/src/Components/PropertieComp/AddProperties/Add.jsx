import React, { useEffect, useRef, useState } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import ChooseTags from './ChooseTags';
import Type from "./Type";
import TypeOfProperty from "./TypeOfProperty";
import MoreDetails from "./MoreDetails";
import AddImages from "./AddImages";
import {useCreatePropertyMutation} from '../PropertyApiSlice'

export default function BasicDemo() {
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

    const [createFunc , { isError, isLoading, data, error, isSuccess }] = useCreatePropertyMutation()

    useEffect(() => {
        if (isSuccess) {
            console.log(data)
        }},[isSuccess])

    const handleSubmit = (e) => {
        const formData = new FormData()
        // formData.append("imgs", planImg)
        imgs.forEach((img) => {
            formData.append("Images", img)
        })
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
    <div className="card flex justify-content-center">
        <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
            <StepperPanel header="סוג הנכס">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"></div>
                </div>
                <br/>
                <ChooseTags selected={tags} setSelected={setTags}/>
                <br/>
                <div className="flex pt-4 justify-content-end">
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                </div>
            </StepperPanel>
            <StepperPanel header="Header II">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                </div>
                <br/>
                <TypeOfProperty selected={type} setSelected={setType} selected1={ condition } setSelected1={ setCondition }/>
                <br/>
                <div className="flex pt-4 justify-content-between">
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                </div>
            </StepperPanel>
            <StepperPanel header="Header III">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                </div>
                <br/>
                <MoreDetails 
                rooms={rooms} setRooms={setRooms}
                floor={floor} setFloor={setFloor}
                buildingFloor={buildingFloor} setBuildingFloor={setBuildingFloor}
                size={size} setSize={setSize}
                price={price} setPrice={setPrice}
                description={description} setDescription={setDescription}
                comments={comments} setComments={setComments}
                date={date} setDate={setDate}
                address={address} setAddress={setAddress}
                />
                <br/>
                <div className="flex pt-4 justify-content-start">
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                </div>
            </StepperPanel>
            <StepperPanel header="Header IV">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                </div>
                <AddImages formData={ imgs } setFormData={ setImgs }/>
                <div className="flex pt-4 justify-content-start">
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                </div>
            </StepperPanel>
            <StepperPanel header="Header VI">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                </div>
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
                <br/>
                <div className="flex pt-4 justify-content-start">
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                </div>
            </StepperPanel>
        </Stepper>
    </div>
    )
}
        