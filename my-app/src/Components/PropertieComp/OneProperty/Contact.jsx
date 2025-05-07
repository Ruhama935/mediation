import { Input, FormControl, FormLabel, Modal, ModalDialog, DialogTitle, Stack, DialogContent } from '@mui/joy';
import React, { useState, useContext, useRef, useEffect } from 'react';
import { InputTextarea } from "primereact/inputtextarea";
import { useSendEmailMutation } from '../PropertyApiSlice';
import { InputMask } from "primereact/inputmask";
import { Button } from 'primereact/button';
import { useSelector } from 'react-redux';
import '../../ButtonCss.css'
import { Toast } from 'primereact/toast';


function Contact({ id, address }) {
    const [open, setOpen] = useState(false);
    const [sendFunc, { isError, isLoading, data, error, isSuccess }] = useSendEmailMutation()
    const userLoggedIn = useSelector((state) => state.auth.user);

    const toast = useRef(null);

    useEffect(() => {
        if (isSuccess) {
            console.log("success")
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'ההודעה נשלחה בהצלחה', life: 3000 });
        }
    }, [isSuccess])

    const handleChange = async (e) => {
        e.preventDefault();
        const formElements = e.target.elements;


        const payload = userLoggedIn ? {
            propertyId: id,
            address: address,
            type: "מישהו מתעניין בדירה",
            name: userLoggedIn.name,
            email: userLoggedIn.email,
            phone: userLoggedIn.phone,
            message: formElements[0].value || null
        } : {
            propertyId: id,
            address: address,
            type: "מישהו מתעניין בדירה",
            name: formElements[0].value,
            email: formElements[1].value,
            phone: formElements[2].value,
            message: formElements[3].value || null
        };

        sendFunc(payload);
    }
    return (
        <>
            <Toast ref={toast} />
            <Button className="button" target="_blank" rel="noopener noreferrer"
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
                            <Button className='button' type="submit">שלח</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default Contact;