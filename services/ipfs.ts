// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage'

// The 'mime' npm package helps us set the correct file type on our File objects
import mime from 'mime'

// The 'fs' builtin module on Node.js provides access to the file system
import fs from 'fs'

// The 'path' module provides helpers for manipulating filesystem paths
import path from 'path'

// Paste your NFT.Storage API key into the quotes:
const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE2MjA3NzEzMzMyMGRmMDFhOTZEYmE3RTQ0NkYzNkQ1ODY4MGE1NzYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NjE3NjcwOTI3NiwibmFtZSI6Im5hdmkifQ.7A3lNisCwnPHJhayIixzb4x6MReiKAeL2prIKW1zxIM'

class IpfsService {
    /**
     * Reads an image file from `imagePath` and stores an NFT with the given name and description.
     * @param {string} imagePath the path to an image file
     * @param {string} name a name for the NFT
     * @param {string} description a text description for the NFT
     */
    public async storeNFT(imagePath, name, description) {
        // load the file from disk
        const image = await this.fileFromPath(imagePath)

        // create a new NFTStorage client using our API key
        const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

        // call client.store, passing in the image & metadata
        return nftstorage.store({
            image,
            name,
            description,
        })
    }

    /**
     * A helper to read a file from a location on disk and return a File object.
     * Note that this reads the entire file into memory and should not be used for
     * very large files. 
     * @param {string} filePath the path to a file to store
     * @returns {File} a File object containing the file content
     */
    public async fileFromPath(filePath) {
        const content = await fs.promises.readFile(filePath)
        const type = mime.getType(filePath)
        return new File([content], path.basename(filePath), { type })
    }
}

export const ipfsService = new IpfsService()








