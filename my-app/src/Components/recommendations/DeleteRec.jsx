import { Input, FormControl, FormLabel, Modal, ModalDialog, DialogTitle, Stack, DialogContent } from '@mui/joy';
import { Button } from 'primereact/button';
import React, { useState, useContext, useEffect } from 'react';
// import PostContext from './PostContext';
import { useDeleteProperiesMutation } from '../PropertieComp/PropertyApiSlice';
import { useSendEmailMutation } from '../PropertieComp/PropertyApiSlice';
import '../ButtonCss.css'
import { useDeleteRecommendationMutation } from './RecommendationApiSlice';

function DeleteRec({ id }) {
    const [open, setOpen] = useState(false);
    const [deleteFunc, { data, error, isLoading, isSuccess }] = useDeleteRecommendationMutation()
    // const [sendFunc] = useSendEmailMutation()


    const handleChange = () => {
        deleteFunc(id)
    }
    return (
        <>
            <Button className='button'
                style={{ margin: '0.5rem' }}
                onClick={() => setOpen(true)}>מחק 
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>האם אתה בטוח שאתה רוצה למחוק את ההמלצה?</DialogTitle>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                    <Button className='button' onClick={(e) => {
                        setOpen(false)
                        handleChange()
                    }}>
                        כן
                    </Button>
                    <Button className='button' variant="outlined" onClick={() => setOpen(false)}>לא</Button>
                    </div>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default DeleteRec;