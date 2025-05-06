import { Input, FormControl, FormLabel, Modal, ModalDialog, DialogTitle, Stack, DialogContent } from '@mui/joy';
import { Button } from 'primereact/button';
import React, { useState, useContext, useEffect } from 'react';
// import PostContext from './PostContext';
import { useDeleteProperiesMutation } from '../PropertieComp/PropertyApiSlice';
import { useSendEmailMutation } from '../PropertieComp/PropertyApiSlice';

function DeleteProperty({ id }) {
    // const { post, setPosts } = useContext(PostContext)
    const [open, setOpen] = useState(false);
    const [deleteFunc, { data, error, isLoading, isSuccess }] = useDeleteProperiesMutation()
    const [sendFunc] = useSendEmailMutation()


    const handleChange = () => {
        deleteFunc(id)
        // setPosts((prev) => prev.filter((post) => post.id !== id))
    }

    // useEffect(() => {
    //     if (isSuccess) {
    //         sendFunc({ propertyId: id, type: "מישהו מחק דירה" })
    //     }
    // }, [isSuccess])
    return (
        <>
            <Button
                style={{ margin: '0.5rem' }}
                onClick={() => setOpen(true)}>מחק נכס
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>האם אתה בטוח שאתה רוצה למחוק את הדירה?</DialogTitle>
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

export default DeleteProperty;