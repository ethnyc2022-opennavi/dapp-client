// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage'

// The 'mime' npm package helps us set the correct file type on our File objects
import mime from 'mime'

// The 'fs' builtin module on Node.js provides access to the file system
//import * as fs from 'fs'

// The 'path' module provides helpers for manipulating filesystem paths
//import path from 'path'
import { arrayBufferToBlob, base64StringToBlob } from 'blob-util'
//import { b64toBlob } from 'b64-to-blob'

var b64toBlob = require('b64-to-blob');


// Paste your NFT.Storage API key into the quotes:
const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE2MjA3NzEzMzMyMGRmMDFhOTZEYmE3RTQ0NkYzNkQ1ODY4MGE1NzYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NjE3NjcwOTI3NiwibmFtZSI6Im5hdmkifQ.7A3lNisCwnPHJhayIixzb4x6MReiKAeL2prIKW1zxIM'

class IpfsService {

    private async b64toBlob(b64Data, contentType='', sliceSize=512) {
        
        //const byteCharacters = atob(b64Data);
        const byteCharacters = b64Data.toString('base64')
        const byteArrays = [];
      
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          const slice = byteCharacters.slice(offset, offset + sliceSize);
      
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
      
          const byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }
      
        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
        
        //fetch(b64Data).then(res => res.blob())
      }

    public async storeb64ToNFT(b64Image, name: string, description: string){
        // load the file from disk
        //const imageBlob = await this.b64toBlob(b64Image)
        //const imageBlob = b64toBlob(b64Image)
        //const imageBlob = new Blob(b64Image, {type: 'image/png'})
        const imageResponse = await fetch(b64Image)
        const imageBlob = await imageResponse.blob()

        console.log(`image blob`, imageBlob)
        const type = 'image/png'
        const imageFile = new File([imageBlob], name, {type})

        // create a new NFTStorage client using our API key
        const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })
        //console.log(`blob`, imageBlob)
        
        // call client.store, passing in the image & metadata
        const token = await nftstorage.store({
            image: imageFile,
            name,
            description,
        })

        console.log(`nft store token: ${token}`)

        return token

    }
    /**
     * Reads an image file from `imagePath` and stores an NFT with the given name and description.
     * @param {string} imagePath the path to an image file
     * @param {string} name a name for the NFT
     * @param {string} description a text description for the NFT
     */
    public async storeNFT(file, name: string, description: string) {
        // load the file from disk
        const imageBlob = await this.fileToBlob(file)
        const type = imageBlob.type
        const imageFile = new File([imageBlob], name, {type})

        // create a new NFTStorage client using our API key
        const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })
        //console.log(`blob`, imageBlob)
        
        // call client.store, passing in the image & metadata
        const token = await nftstorage.store({
            image: imageFile,
            name,
            description,
        })

        console.log(`nft store token: ${token}`)

        return token
    }

    /*
    private b64ToBlob(preview){
        const blob = base64StringToBlob(preview.toString(), 'image/png')
        console.log(`blob`, blob)

        return blob
    }
    */
    
    private async fileToBlob(file): Promise<any> {
        
        return new Promise((resolve, reject) => {
            try {
                let reader = new FileReader();
                let fileBlob;
                let arrayBuffer
                
                reader.onloadend = (evt) => {
                    if (evt.target.readyState == FileReader.DONE) {
                        arrayBuffer = evt.target.result
                        const type = 'image/png'
                        fileBlob = arrayBufferToBlob(arrayBuffer, type)
                    }
                    resolve(fileBlob);
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








