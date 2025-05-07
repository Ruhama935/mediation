import { DialogTitle, Modal, ModalDialog } from '@mui/joy';

import { Dropdown } from 'primereact/dropdown';
import { ListBox } from 'primereact/listbox';
import '../ButtonCss.css'
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import { useUpdateStatusRecommendationMutation } from './RecommendationApiSlice';

export default function StatusRec({ id }) {
    const [status, setStatus] = useState(null)
    const [update, { isSuccess }] = useUpdateStatusRecommendationMutation()
    const statuss = [
        { name: 'ממתין לאישור', code: 'Awaiting confirmation' },
        { name: 'מאושר', code: 'Confirmed' },
    ];

    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (isSuccess) {
            console.log("success")
        }
    }, [isSuccess])

    const handleChange = async () => {
        console.log(status.code);
        update({ id, status: status.code })
    }
    return (
        <>
            <Button
                style={{ margin: '0.5rem' }}
                className="button"
                variant="outlined"
                color="neutral"
                onClick={() => setOpen(true)}>
                עדכן
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>עדכון סטטוס - בחר את הסטטוס הרצוי</DialogTitle>
                    <ListBox value={status} onChange={(e) => {
                        setStatus(e.value)
                    }} options={statuss} optionLabel="name" className="w-full md:w-14rem" />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                        <Button className="button" onClick={() => {
                            setOpen(false)
                            handleChange()
                        }}>
                            עדכן
                        </Button>
                        <Button className="button" variant="outlined" onClick={() => setOpen(false)}>בטל</Button>
                    </div>
                </ModalDialog>
            </Modal>
        </>
    );
}


