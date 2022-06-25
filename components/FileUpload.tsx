import { Button } from '@mui/material'
import React, { FC, useState } from 'react'
import { ipfsService } from '../services/ipfs'
//import styled from 'styled-components'


/*
const StyledButton = styled(Button)`
  border: 1px solid #e9e9e9;
  margin-left: auto;
`
*/

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