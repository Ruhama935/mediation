// import React, { useRef, useState, useEffect } from 'react';
// import { Toast } from 'primereact/toast';
// import { FileUpload } from 'primereact/fileupload';
// import { Button } from 'primereact/button';
// import { Tooltip } from 'primereact/tooltip';

// export default function AddImages(props) {
//     const toast = useRef(null);
//     const fileUploadRef = useRef(null);
//     const { formData, setFormData, prevImgs } = props;

//     const BASE_URL = "http://localhost:8080/uploads/";

//     // ברגע שהקומפוננטה עולה - נטפל בתמונות הקיימות
//     useEffect(() => {
//         if (prevImgs && prevImgs.length > 0) {
//             const existingImages = prevImgs.map((imgName, index) => ({
//                 name: imgName,
//                 url: `${BASE_URL}${imgName}`
//             }));
//             setFormData(existingImages);
//         }
//     }, [prevImgs, setFormData]);

//     const onTemplateSelect = (e) => {
//         let files = e.files;
//         setFormData((prev) => [...prev, ...files]);
//     };

//     const onTemplateRemove = (file, callback) => {
//         setFormData((prev) => prev.filter((f) => f !== file));
//         callback();
//     };

//     const onTemplateClear = () => {
//         setFormData([]);
//     };

//     const headerTemplate = (options) => {
//         const { className, chooseButton, cancelButton } = options;
//         return (
//             <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
//                 {chooseButton}
//                 {cancelButton}
//             </div>
//         );
//     };

//     const itemTemplate = (file, props) => {
//         const isExistingImage = file.objectURL === undefined && file.url;
//         const src = isExistingImage ? file.url : file.objectURL;

//         return (
//             <div className="flex align-items-center flex-wrap">
//                 <div className="flex align-items-center" style={{ width: '40%' }}>
//                     <img alt={file.name || 'Image'} role="presentation" src={src} width={100} />
//                     <span className="flex flex-column text-left ml-3">
//                         {file.name || 'Existing Image'}
//                         <small>{new Date().toLocaleDateString()}</small>
//                     </span>
//                 </div>
//                 <Button 
//                     type="button" 
//                     icon="pi pi-times" 
//                     className="p-button-outlined p-button-rounded p-button-danger ml-auto" 
//                     onClick={() => onTemplateRemove(file, props.onRemove)} 
//                 />
//             </div>
//         );
//     };

//     const emptyTemplate = () => {
//         return (
//             <div className="flex align-items-center flex-column">
//                 <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
//                 <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
//                     Drag and Drop Image Here
//                 </span>
//             </div>
//         );
//     };

//     const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
//     const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };

//     return (
//         <div>
//             <Toast ref={toast} />
//             <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
//             <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

//             <FileUpload 
//                 ref={fileUploadRef}
//                 name="demo[]"
//                 multiple
//                 accept="image/*"
//                 maxFileSize={1000000}
//                 customUpload
//                 files={formData}
//                 onSelect={onTemplateSelect}
//                 onError={onTemplateClear}
//                 onClear={onTemplateClear}
//                 headerTemplate={headerTemplate}
//                 itemTemplate={itemTemplate}
//                 emptyTemplate={emptyTemplate}
//                 chooseOptions={chooseOptions}
//                 cancelOptions={cancelOptions}
//             />
//         </div>
//     );
// }



import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';

export default function AddImages(props) {
    const { formData, setFormData } = props;
    const toast = useRef(null);
    // const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef(null);
    
    const onTemplateSelect = (e) => {
        // let _totalSize = totalSize;
        let files = e.files;
        setFormData((prev) => [...prev, ...files]);
        // Object.keys(files).forEach((key) => {
        //     _totalSize += files[key].size || 0;
        // });

        // setTotalSize(_totalSize);
    };

    // const onTemplateUpload = (e) => {
    //     // let _totalSize = 0;

    //     // e.files.forEach((file) => {
    //     //     _totalSize += file.size || 0;
    //     // });

    //     // setTotalSize(_totalSize);
    //     toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    // };

    const onTemplateRemove = (file, callback) => {
        // setTotalSize(totalSize - file.size);
        setFormData((prev) => prev.filter((f) => f !== file));

        callback();
    };

    const onTemplateClear = () => {
        setFormData([]);
        // setTotalSize(0);
    };

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {cancelButton}
                <div className="flex align-items-center gap-3 ml-auto">
                </div>
            </div>
        );
    };

    const itemTemplate = (file, props) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                {/* <Tag value={props.formatSize} severity="warning" className="px-3 py-2" /> */}
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
                    Drag and Drop Image Here
                </span>
            </div>
        );
    };

    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    // const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };

    return (
        <div>
            <Toast ref={toast}></Toast>

            <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
            {/* <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" /> */}
            <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

            <FileUpload ref={fileUploadRef} name="demo[]" url="/api/upload" multiple accept="image/*" maxFileSize={1000000}
                onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
                headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions} cancelOptions={cancelOptions} />
        </div>
    )
}
        
