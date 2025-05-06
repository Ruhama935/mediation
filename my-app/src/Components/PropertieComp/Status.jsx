import { DialogTitle, Modal, ModalDialog } from '@mui/joy';

import { Dropdown } from 'primereact/dropdown';
import { ListBox } from 'primereact/listbox';

import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import { useUpdateStatusProperiesMutation } from './PropertyApiSlice';

export default function Status({ id }) {
    const [status, setStatus] = useState(null)
    const [update, { isSuccess }] = useUpdateStatusProperiesMutation()
    const statuss = [
        { name: 'ממתין לאישור', code: 'Awaiting confirmation' },
        { name: 'מאושר', code: 'Confirmed' },
        { name: 'נמכר', code: 'Sold' }
    ];

    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (isSuccess) {
            console.log("success")
        }
    }, [isSuccess])  

    const handleChange = async () => {
        console.log(status.code);
        update({id, status: status.code })
    }
    return (
        <>
            <Button
                style={{ margin: '0.5rem' }}

                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}>
                    עדכן סטטוס נכס
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>עדכון סטטוס - בחר את הסטטוס הרצוי</DialogTitle>
            <ListBox value={status} onChange={(e) => {setStatus(e.value)
            }} options={statuss} optionLabel="name" className="w-full md:w-14rem" />
             <Button onClick={() => {
                        setOpen(false)
                        handleChange()
                    }}>
                        עדכן
                    </Button>
                    <Button variant="outlined" onClick={() => setOpen(false)}>בטל</Button>
                </ModalDialog>
            </Modal>
        </>
    );
}


