import { Input, FormControl, FormLabel, Modal, ModalDialog, DialogTitle, Stack, DialogContent } from '@mui/joy';
import { Button } from 'primereact/button';
import React, { useState, useContext, useEffect, useRef } from 'react';
import { useDeleteProperiesMutation } from '../PropertyApiSlice';
import { useSendEmailMutation } from '../PropertyApiSlice';
import '../../ButtonCss.css'
import { useNavigate } from 'react-router-dom';

function DeleteProperty({ id }) {
    const [open, setOpen] = useState(false);
    const [deleteFunc, { data, error, isLoading, isSuccess }] = useDeleteProperiesMutation()
    const [sendFunc] = useSendEmailMutation()
    const navigate = useNavigate()

    useEffect(() => {
        if (isSuccess) {
            console.log("success")
            alert("הנכס נמחק בהצלחה")
            navigate('/properties')
        }
    }, [isSuccess])

    const handleChange = () => {
        deleteFunc(id)
    }
    return (
        <>
            <Button className='button'
                style={{ margin: '0.5rem' }}
                onClick={() => setOpen(true)}>מחק נכס
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>האם אתה בטוח שאתה רוצה למחוק את הדירה?</DialogTitle>
                    <Button
                        className='button'
                        onClick={(e) => {
                            setOpen(false)
                            handleChange()
                        }}>
                        כן
                    </Button>
                    <Button className='button' variant="outlined" onClick={() => setOpen(false)}>לא</Button>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default DeleteProperty;