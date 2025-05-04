import { Dropdown } from '@mui/joy';
import { Avatar } from 'primereact/avatar';

export default function Status({ status }) {
    const statusStyle = {
        Awaiting: "bg-yellow-500",
        Confirmed: "bg-green-500",
        Rejected: "bg-red-500",
    };

    return (
        
        <Avatar label='נמכר' size="xlarge" shape="circle" style={{backgroundColor: 'rgba(255 255 255 0.5)', color:'rgba(255 255 255 0.5)', fontSize: '20px'}}/>
        // <Avatar icon="pi pi-user" className="mr-2" size="xlarge" shape="circle" />
    );
}