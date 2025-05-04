import { useUpdateProperiesMutation } from '../PropertieComp/PropertyApiSlice'
// import {useEffect, useState} from 'react'
import React, { useEffect, useRef, useState } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import ChooseTags from './AddProperties/ChooseTags';
// import Type from "./Type";
import TypeOfProperty from "./AddProperties/TypeOfProperty";
import MoreDetails from "./AddProperties/MoreDetails";
import AddImages from "./AddProperties/AddImages";
import { useDispatch } from 'react-redux'
// import {  } from '../PropertieComp/PropertySlice'

export default function UpdateProperty(props) {
    const { property } = props
    const stepperRef = useRef(null);
    const [tags, setTags] = useState(property.tags);
    const [condition, setCondition] = useState(property.condition);
    const [type, setType] = useState(property.type);
    const [rooms, setRooms] = useState(property.rooms);
    const [floor, setFloor] = useState(property.floor);
    const [buildingFloor, setBuildingFloor] = useState(property.buildingFloor);
    const [size, setSize] = useState(property.size);
    const [price, setPrice] = useState(property.price);
    const [description, setDescription] = useState(property.description);
    const [comments, setComments] = useState(property.comments);
    const [date, setDate] = useState(property.date);
    const [address, setAddress] = useState(property.address);
    const [imgs, setImgs] = useState([]);
    const [prevImgs, setPrevImgs] = useState(property.imgs);
    const [planImg, setPlanImg] = useState(property.planImg);

    const [updateFunc, { isError, isLoading, data, error, isSuccess }] = useUpdateProperiesMutation()
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     if (isSuccess) {
    //         console.log(data)
    //         dispatch(addMyProperty(data))
    //     }},[isSuccess])

    const handleSubmit = (e) => {
        const formData = new FormData()
        // formData.append("imgs", planImg)
        formData.append("Images", imgs)
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
        updateFunc(formData)
        console.log(data)
    }

    return (
        <div className="card flex justify-content-center">
            <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
                <StepperPanel header="סוג הנכס">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"></div>
                    </div>
                    <br />
                    <ChooseTags selected={tags} setSelected={setTags} />
                    <br />
                    <div className="flex pt-4 justify-content-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="Header II">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                    </div>
                    <br />
                    <TypeOfProperty selected={type} setSelected={setType} selected1={condition} setSelected1={setCondition} />
                    <br />
                    <div className="flex pt-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="Header III">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                    </div>
                    <br />
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
                        // prevImgs={prevImgs} setPrevImgs={setPrevImgs}
                    />
                    <br />
                    <div className="flex pt-4 justify-content-start">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="Header IV">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                    </div>
                    <AddImages formData={imgs} setFormData={setImgs}  prevImgs={prevImgs} />
                    <div className="flex pt-4 justify-content-start">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="Header VI">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                    </div>
                    <button onClick={(e) => handleSubmit(e)}>Submit</button>
                    <br />
                    <div className="flex pt-4 justify-content-start">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    </div>
                </StepperPanel>
            </Stepper>
        </div>
    )
}
