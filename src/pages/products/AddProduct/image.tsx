import React, { useState } from 'react';
const FileToBase64Converter: React.FC = () => {
    const [base64String, setBase64String] = useState<string | null>(null);
    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const base64 = reader.result as string;
                setBase64String(base64);
            };
            reader.readAsDataURL(file);
        }
        console.log(file)
    };
    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileInputChange} />
            {base64String && <img src={base64String} alt="Uploaded" />}
        </div>
    );
};
export default FileToBase64Converter;