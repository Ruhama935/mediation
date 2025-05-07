// import { useUpdateProperiesMutation } from '../PropertieComp/PropertyApiSlice'
// // import {useEffect, useState} from 'react'
// import React, { useEffect, useRef, useState } from "react";
// import { Stepper } from 'primereact/stepper';
// import { StepperPanel } from 'primereact/stepperpanel';
// import { Button } from 'primereact/button';
// import ChooseTags from './AddProperties/ChooseTags';
// // import Type from "./Type";
// import TypeOfProperty from "./AddProperties/TypeOfProperty";
// import MoreDetails from "./AddProperties/MoreDetails";
// import AddImages from "./AddProperties/AddImages";
// import { useDispatch } from 'react-redux'
// // import {  } from '../PropertieComp/PropertySlice'

// export default function UpdateProperty(props) {
//     const { property } = props
//     const stepperRef = useRef(null);
//     const [tags, setTags] = useState(property.tags);
//     const [condition, setCondition] = useState(property.condition);
//     const [type, setType] = useState(property.type);
//     const [rooms, setRooms] = useState(property.rooms);
//     const [floor, setFloor] = useState(property.floor);
//     const [buildingFloor, setBuildingFloor] = useState(property.buildingFloor);
//     const [size, setSize] = useState(property.size);
//     const [price, setPrice] = useState(property.price);
//     const [description, setDescription] = useState(property.description);
//     const [comments, setComments] = useState(property.comments);
//     const [date, setDate] = useState(property.date);
//     const [address, setAddress] = useState(property.address);
//     const [imgs, setImgs] = useState([]);
//     const [prevImgs, setPrevImgs] = useState(property.imgs);
//     const [planImg, setPlanImg] = useState(property.planImg);

//     const [updateFunc, { isError, isLoading, data, error, isSuccess }] = useUpdateProperiesMutation()
//     // const dispatch = useDispatch()

//     // useEffect(() => {
//     //     if (isSuccess) {
//     //         console.log(data)
//     //         dispatch(addMyProperty(data))
//     //     }},[isSuccess])

//     const handleSubmit = (e) => {
//         const formData = new FormData()
//         // formData.append("imgs", planImg)
//         formData.append("Images", imgs)
//         formData.append("length", imgs.length)
//         formData.append("tags", JSON.stringify(tags))
//         formData.append("condition", condition)
//         formData.append("type", type)
//         formData.append("rooms", rooms)
//         formData.append("floor", floor)
//         formData.append("buildingFloor", buildingFloor)
//         formData.append("size", size)
//         formData.append("price", price)
//         formData.append("description", description)
//         formData.append("comments", comments)
//         formData.append("date", date)
//         formData.append("address", address)

//         // formData.append("Images", JSON.stringify(imgs))
//         e.preventDefault()
//         console.log(formData)
//         updateFunc(formData)
//         console.log(data)
//     }

//     return (
//         <div className="card flex justify-content-center">
//             <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
//                 <StepperPanel header="סוג הנכס">
//                     <div className="flex flex-column h-12rem">
//                         <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"></div>
//                     </div>
//                     <br />
//                     <ChooseTags selected={tags} setSelected={setTags} />
//                     <br />
//                     <div className="flex pt-4 justify-content-end">
//                         <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
//                     </div>
//                 </StepperPanel>
//                 <StepperPanel header="נתונים מספריים">
//                     <div className="flex flex-column h-12rem">
//                         <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
//                     </div>
//                     <br />
//                     <TypeOfProperty selected={type} setSelected={setType} selected1={condition} setSelected1={setCondition} />
//                     <br />
//                     <div className="flex pt-4 justify-content-between">
//                         <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
//                         <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
//                     </div>
//                 </StepperPanel>
//                 <StepperPanel header="תאור הנכס">
//                     <div className="flex flex-column h-12rem">
//                         <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
//                     </div>
//                     <br />
//                     <MoreDetails
//                         rooms={rooms} setRooms={setRooms}
//                         floor={floor} setFloor={setFloor}
//                         buildingFloor={buildingFloor} setBuildingFloor={setBuildingFloor}
//                         size={size} setSize={setSize}
//                         price={price} setPrice={setPrice}
//                         description={description} setDescription={setDescription}
//                         comments={comments} setComments={setComments}
//                         date={date} setDate={setDate}
//                         address={address} setAddress={setAddress}
//                         // prevImgs={prevImgs} setPrevImgs={setPrevImgs}
//                     />
//                     <br />
//                     <div className="flex pt-4 justify-content-start">
//                         <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
//                     </div>
//                 </StepperPanel>
//                 <StepperPanel header="הוספת תמונות">
//                     <div className="flex flex-column h-12rem">
//                         <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
//                     </div>
//                     <AddImages formData={imgs} setFormData={setImgs}  prevImgs={prevImgs} />
//                     <div className="flex pt-4 justify-content-start">
//                         <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
//                     </div>
//                 </StepperPanel>
//                 <StepperPanel header="בקשת עדכון">
//                     <div className="flex flex-column h-12rem">
//                         <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
//                     </div>
//                     <button onClick={(e) => handleSubmit(e)}>עדכן פרטי נכס</button>
//                     <br />
//                     <div className="flex pt-4 justify-content-start">
//                         <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
//                     </div>
//                 </StepperPanel>
//             </Stepper>
//         </div>
//     )
// }
import React, { useEffect, useRef, useState } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import ChooseTags from './AddProperties/ChooseTags';
import Type from "./AddProperties/Type";
import TypeOfProperty from "./AddProperties/TypeOfProperty";
import MoreDetails from "./AddProperties/MoreDetails";
import AddImages from "./AddProperties/AddImages";
// import { useCreatePropertyMutation } from '../PropertyApiSlice'
import { useDispatch } from 'react-redux'
import { addMyProperty } from './PropertySlice'
import NumericalData from "./AddProperties/NumericalData";
import { useUpdateProperiesMutation } from "./PropertyApiSlice";
import UpdatePrevImgs from "./UpdatePrevImgs";
import { useLocation } from "react-router-dom";
import '../ButtonCss.css'

export default function UpdateProperty() {
    const location = useLocation();
    const { property } = location.state;    
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

    const [createFunc, { isError, isLoading, data, error, isSuccess }] = useUpdateProperiesMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isSuccess) {
            console.log(data)
            // dispatch(addMyProperty(data))
        }
    }, [isSuccess])

    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(price)
        // formData.append("imgs", planImg)
        // formData.append("Images", imgs)
        imgs.forEach((img) => {
            formData.append('Images', img); // שוב ושוב לאותו שם
          });
        // formData.append("length", imgs.length)
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
        prevImgs.forEach(img => {
            formData.append('prevImgs', img); // או פשוט 'prevImgs'
        });
        
        // formData.append("Images", JSON.stringify(imgs))
        e.preventDefault()
        console.log(formData)
        createFunc({formData, id: property._id})
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
                        <Button className="button" label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
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
                        <Button className="button" label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
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
                        <Button className="button" label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
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
                        <Button className="button" label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="הוספת תמונות">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"></div>
                    </div>
                    <UpdatePrevImgs prevImgs={prevImgs} setPrevImgs={setPrevImgs} />
                    <br />
                    <AddImages formData={imgs} setFormData={setImgs}/>
                    <br />
                    {/* <AddImages formData={imgs} setFormData={setImgs} prevImgs={prevImgs} setPrevImgs={setPrevImgs} /> */}
                    <div className="flex pt-4 justify-content-end" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5%' }}>
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                        <Button className="button" label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="בקשת עדכון">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium"></div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', margin: '10%'}} >
                    <Button className="button" onClick={(e) => handleSubmit(e)}>עדכן פרטי נכס</Button>
                    </div><br />
                    <div className="flex pt-4 justify-content-start" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5%' }}>
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    </div>
                </StepperPanel>
            </Stepper>
        </div>
    )
}
