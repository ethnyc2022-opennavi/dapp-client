class TatumService {

    baseUrl = 'https://api-us-west1.tatum.io'
    apiKey = '64b068d0-3910-4dbb-8bfe-2d5528960551'

    public async mintNft(toAddress: string, ipfsUri: string, contractAddress:string = '', chain: string = 'MATIC', netType:string = 'ethereum-ropsten') {

        try {
            const url = `${this.baseUrl}/v3/nft/mint?x-testnet-type=${netType}`

            const uriComponents = ipfsUri.split('/')
            const ipsfsMetadataUrl = `https://ipfs.io/ipfs/${uriComponents[2]}/${uriComponents[3]}`

            console.log(`ipfs url: ${ipsfsMetadataUrl}`)

            const requestBody = {
                chain: chain,
                to: toAddress,
                url: ipsfsMetadataUrl
            }

            const response = await fetch(url, {
                method: 'post',
                //mode: 'no-cors',
                headers: {
                    //'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json', 
                    'x-api-key': this.apiKey
                },
                body: JSON.stringify(requestBody)
            })

            if (response.status >= 400) {
                console.log(`error with minting request: ${JSON.stringify(response)}`)
                return null
            }

            const result = await response.json()
            console.log(result)

            return result
        } catch (error) {
            console.log(`error minting nft: ${JSON.stringify(error)}`)
        }
    }

    //public async mintNft(toAddress: string, ipfsUri: string, contractAddress:string = '', chain: string = 'MATIC', netType:string = 'ethereum-ropsten') {

}

export const tatumService = new TatumService()