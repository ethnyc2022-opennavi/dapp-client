import { Button } from '@mui/material'
import React, { FC, useState } from 'react'
import { ipfsService } from '../services/ipfs'


const FileUpload: FC = () => {

    const [fileUpload, setFileUpload]= useState()

    const handleChange = (e) => {
        setFileUpload(e.target.files[0])
    }

    const handleFileUpload = async () => {
        const result = await ipfsService.storeNFT(fileUpload, 'test-upload-file', 'some description')
        console.log(`${JSON.stringify(result)}`)
    }

    return (
    <div>
        <input accept='*' type='file' onChange={handleChange} />
        <Button onClick={handleFileUpload}>Upload</Button>
    </div>
    
    )
}

export default FileUpload