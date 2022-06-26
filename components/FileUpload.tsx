import { Button } from '@mui/material'
import React, { FC, useState } from 'react'
import { ipfsService } from '../services/ipfs'


type Props = {
    setIpfsResultCallback: any
}

const FileUpload: FC<Props> = (props) => {

    const [fileUpload, setFileUpload]= useState()
    const [isUploading, setIsUploading] = useState(false)

    const {setIpfsResultCallback} = props

    const handleChange = (e) => {
        setFileUpload(e.target.files[0])
    }

    const handleFileUpload = async () => {

        if (!fileUpload) {
            return
        }

        setIsUploading(true)
        const result = await ipfsService.storeNFT(fileUpload, 'test-upload-file.png', 'some description')
        setIsUploading(false)
        setIpfsResultCallback(result)
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