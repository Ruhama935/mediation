import { Input, FormControl, FormLabel, Modal, ModalDialog, DialogTitle, Stack, DialogContent } from '@mui/joy';
import React, { useState, useContext, useEffect, useRef } from 'react';
import { useSendEmailMutation } from '../PropertyApiSlice';
import { Button } from 'primereact/button';
import '../../ButtonCss.css'
import { Toast } from 'primereact/toast';

function DeleteToUser({ id }) {
    const [open, setOpen] = useState(false);
    const [sendFunc, {isSuccess}] = useSendEmailMutation()
    const toast = useRef(null);


    useEffect(() => {
        if (isSuccess) {
            console.log("success")
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'ההודעה נשלחה בהצלחה', life: 3000 });
        }
    }, [isSuccess])

    const handleChange = () => {
        sendFunc({ propertyId: id, type: "מישהו רוצה למחוק דירה" })
    }

    return (
        <>
            <Toast ref={toast} />
            <Button className='button'
                style={{ margin: '0.5rem' }}
                onClick={() => setOpen(true)}>
                מחק נכס
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>האם אתה בטוח שאתה רוצה למחוק את הדירה?
                    </DialogTitle>
                    <span style={{ fontSize: '1rem', color: 'gray' }}>הבקשה תעבור למנהל האתר ותטופל בהקדם</span>
                    <Button onClick={(e) => {
                        setOpen(false)
                        handleChange()
                    }}>
                        כן
                    </Button>
                    <Button variant="outlined" onClick={() => setOpen(false)}>לא</Button>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default DeleteToUser;