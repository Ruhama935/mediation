import { ColorPickerAreaBackground } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@mui/joy";
import { Button } from "primereact/button";
import { InputMask } from "primereact/inputmask";
import { InputTextarea } from "primereact/inputtextarea";
import { useSendEmailMutation } from "../PropertieComp/PropertyApiSlice";
import { Form } from "react-router-dom";

export default function ContactDetails() {
    const [sendFunc, { isError, isLoading, data, error, isSuccess }] = useSendEmailMutation()
    const handleChange = async (e) => {
        e.preventDefault();
        const formElements = e.target.elements;

        const payload = {
            propertyId: null,
            address: null,
            type: "מישהו מעוניין ליצור איתך קשר",
            name: formElements[0].value,
            email: formElements[1].value,
            phone: formElements[2].value,
            message: formElements[3].value || null
        };
        console.log(payload)
        sendFunc(payload);
    }

    return (
        <>
            <div className="card flex justify-content-center" style={{
                position: 'absolute',
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                gap: '1rem',
                background: '#00032e',
                paddingBottom: '40px',
                height: '100vh',
                width: '100%',
                top: 0,
                zIndex: '-1'
            }}>
                <div style={{ marginTop: '17vh', color: ' rgb(237, 191, 109)', direction: 'rtl', fontSize: '17px' }}>
                    דברו איתנו: 0548525703
                    <br />
                    <br />
                    שעות מענה: א'-ה' 9:00-17:00
                    <br />
                    <br />
                    מייל: r0548525703@gmail.com
                </div>
                <img src="/FullLogo.png" />
                <div style={{ color: ' rgb(237, 191, 109)', direction: 'rtl' }}>
                    <span style={{ fontSize: '17px' }}>
                        צרו איתנו קשר!</span>
                    <br />
                    <br />
                    <form onSubmit={(e) => {
                        handleChange(e)}}>
                        <FormControl style={{ width: '90%', marginTop: '1rem' }}>
                            <FormLabel style={{ color: 'rgb(237, 191, 109)' }}>שם</FormLabel>
                            <Input style={{ backgroundColor: '#00032e', color: 'rgb(237, 191, 109)', height: '50px' }} title="name" required />
                        </FormControl>
                        <FormControl style={{ width: '90%', marginTop: '1rem' }}>
                            <FormLabel style={{ color: 'rgb(237, 191, 109)' }}>אימייל</FormLabel>
                            <Input style={{ backgroundColor: '#00032e', color: 'rgb(237, 191, 109)', height: '50px' }} type='email' title="email" required />
                        </FormControl>
                        <FormControl style={{ width: '90%', marginTop: '1rem' }}>
                            <label htmlFor="phone" tyle={{ color: 'rgb(237, 191, 109)' }}>מס' טלפון</label>
                            <InputMask style={{ backgroundColor: '#00032e', color: 'rgb(237, 191, 109)', height: '50px' }} title='phone' id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>
                        </FormControl>
                        <FormControl style={{ width: '90%', marginTop: '1rem' }}>
                            <FormLabel style={{ color: 'rgb(237, 191, 109)' }}>הוסף הודעה(אופציונלי)</FormLabel>
                            <InputTextarea style={{ backgroundColor: '#00032e', color: 'rgb(237, 191, 109)', height: '50px' }} name="message" rows={4} cols={30} />
                        </FormControl>
                        <Button type="submit" className="my-button"  style={{ marginTop: '1.5rem', justifyContent: 'end' }} variant="outlined" color="neutral" >שלח</Button>
                    </form> 
                </div>
            </div >
        </>
    );
}