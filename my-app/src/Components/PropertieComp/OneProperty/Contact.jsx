// import React, { useState } from "react";
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';

// export default function Contact() {
//     const [visible, setVisible] = useState(false);

//     const handleSubmit = async () => {
//         // e.preventDefault();
//         const response = await fetch("http://localhost:8080/api/email/send", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 "name": "שם המשתמש",
//                 "email": "g025871176@gmail.com",
//                 "message": "ההודעה שנכתבה בטופס"
//             })
//         });

//         const data = await response.json();
//         alert(data.message);
//     };


//     const footerContent = (
//         <div>
//             <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
//             <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
//             <Button label="gmail" onClick={() => handleSubmit()} />
//         </div>
//     );




//     return (
//         <div className="card flex justify-content-center">
//             <Button label="מתעניין בנכס" onClick={() => setVisible(true)} />
//             <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }} footer={footerContent}>
//                 <p className="m-0">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                 </p>
//             </Dialog>
//         </div>
//     )
// }



import { Input, FormControl, FormLabel, Modal, ModalDialog, DialogTitle, Stack, DialogContent } from '@mui/joy';
import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import PostContext from './PostContext';
import Add from '@mui/icons-material/Add';
import { InputTextarea } from "primereact/inputtextarea";
import { useSendEmailMutation } from '../PropertyApiSlice';
import { InputMask } from "primereact/inputmask";
import { Button } from 'primereact/button';
import { useSelector } from 'react-redux';


function Contact({ id, address }) {
    // const {post, setPosts } = useContext({})
    const [open, setOpen] = useState(false);
    const [sendFunc, { isError, isLoading, data, error, isSuccess }] = useSendEmailMutation()
    const userLoggedIn = useSelector((state) => state.auth.user);


    const handleChange = async (e) => {
        e.preventDefault();
        const formElements = e.target.elements;
        
        const payload = userLoggedIn ?{
            propertyId: id,
            address: address,
            type: "מישהו מתעניין בדירה",
            name: userLoggedIn.name,
            email: userLoggedIn.email,
            phone: userLoggedIn.phone,
            message: formElements[0].value || null
        }:{
            propertyId: id,
            address: address,
            type: "מישהו מתעניין בדירה",
            name: formElements[0].value,
            email: formElements[1].value ,
            phone: formElements[2].value ,
            message: formElements[3].value || null
        };

        sendFunc(payload);
    }
    return (
        <>
            <Button className="p-button font-bold" target="_blank" rel="noopener noreferrer"
                // variant="outlined"
                // color="neutral"
                onClick={() => setOpen(true)}>
                מתעניין בדירה</Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>מתעניין בדירה ({address})</DialogTitle>
                    <form
                        onSubmit={(e) => {
                            handleChange(e)
                            setOpen(false);
                        }}>
                        <Stack spacing={4}>
                            {userLoggedIn ? <> ההודעה תישלח עם פרטי המשתמש שלך</> : <>
                                <FormControl>
                                    <FormLabel>שם</FormLabel>
                                    <Input title="name" required />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>אימייל</FormLabel>
                                    <Input type='email' title="email" required />
                                </FormControl>
                                <FormControl>
                                    <label htmlFor="phone" className="font-bold block mb-2">מס' טלפון</label>
                                    <InputMask title='phone' id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>
                                </FormControl> </>}
                            <FormControl>
                                <FormLabel>הוסף הודעה(אופציונלי)</FormLabel>
                                <InputTextarea name="message" rows={4} cols={30} />
                            </FormControl>
                            <Button type="submit">שלח</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default Contact;