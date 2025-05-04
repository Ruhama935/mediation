import { Input, FormControl, FormLabel, Modal, ModalDialog, DialogTitle, Stack, Button, DialogContent } from '@mui/joy';
import React, { useState, useContext, useEffect } from 'react';
// import PostContext from './PostContext';
// import { useDeleteProperiesMutation } from '../PropertieComp/PropertyApiSlice';
import { useSendEmailMutation } from '../PropertieComp/PropertyApiSlice';

function DeleteToUser({ id }) {
    // const { post, setPosts } = useContext(PostContext)
    const [open, setOpen] = useState(false);
    // const [deleteFunc, { data, error, isLoading, isSuccess }] = useDeleteProperiesMutation()
    const [sendFunc] = useSendEmailMutation()


    const handleChange = () => {
        sendFunc({ propertyId: id, type: "מישהו רוצה למחוק דירה" })
    }

    return (
        <>
            <Button
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}>
                <i className="pi pi-trash" style={{ fontSize: '1rem', color: '#fc45a6b0' }}></i>
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