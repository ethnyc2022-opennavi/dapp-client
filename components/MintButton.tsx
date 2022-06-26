import { Button } from '@mui/material'
import React, { FC, useState } from 'react'
import { tatumService } from '../services/tatum'

type Props = {
    account: string
    ipfsUri: string
}

const MintButton: FC<Props> = (props) => {
    const {account, ipfsUri} = props


    const [isMinting, setIsMinting] = useState(false)

    async function handleMint(account) {
        setIsMinting(true)
        const response = await tatumService.mintNft(account, ipfsUri)

        console.log(response)
        setIsMinting(false)
        return response
    }

    return <Button onClick={() => handleMint(account)}>MINT NFT</Button>

}

export default MintButton