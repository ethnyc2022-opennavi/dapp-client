// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage'

// The 'mime' npm package helps us set the correct file type on our File objects
import mime from 'mime'

// The 'fs' builtin module on Node.js provides access to the file system
//import * as fs from 'fs'

// The 'path' module provides helpers for manipulating filesystem paths
//import path from 'path'
import { arrayBufferToBlob } from 'blob-util'

// Paste your NFT.Storage API key into the quotes:
const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE2MjA3NzEzMzMyMGRmMDFhOTZEYmE3RTQ0NkYzNkQ1ODY4MGE1NzYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NjE3NjcwOTI3NiwibmFtZSI6Im5hdmkifQ.7A3lNisCwnPHJhayIixzb4x6MReiKAeL2prIKW1zxIM'

class IpfsService {
    /**
     * Reads an image file from `imagePath` and stores an NFT with the given name and description.
     * @param {string} imagePath the path to an image file
     * @param {string} name a name for the NFT
     * @param {string} description a text description for the NFT
     */
    public async storeNFT(file, name: string, description: string) {
        // load the file from disk
        const image = await this.fileToBlob(file)
        // create a new NFTStorage client using our API key
        const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })
        
        // call client.store, passing in the image & metadata
        const token = await nftstorage.store({
            image,
            name,
            description,
        })

        console.log(`nft store token: ${token}`)

        return token
    }
    
    private async fileToBlob(file): Promise<Blob> {
        
        return new Promise((resolve, reject) => {
            try {
                let reader = new FileReader();
                let fileByteArray;
                
                //reader.readAsDataURL(file)
                //reader.readAsArrayBuffer(file);
                reader.onloadend = (evt) => {
                    if (evt.target.readyState == FileReader.DONE) {
                        let arrayBuffer = evt.target.result
                        //const type = mime.getType(filePath)
                        //const type = mime.getType(file)
                        const type = 'image/*'
                        fileByteArray = arrayBufferToBlob(arrayBuffer, type)

                        //fileByteArray = new ArrayBuffer(arrayBuffer.byteLength);
                        //new Uint8Array(fileByteArray).set(new Uint8Array(arrayBuffer));

                    }
                    resolve(fileByteArray);
                }
                reader.readAsArrayBuffer(file);
            }
            catch (e) {
                reject(e);
            } 
        })
        
    }
    
}

export const ipfsService = new IpfsService()








