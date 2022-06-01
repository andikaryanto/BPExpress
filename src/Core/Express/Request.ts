import UploadedFile from '../Libraries/UploadedFile';

declare namespace Express {
    export interface Request {
        uploadedFiles?:UploadedFile[] | undefined,
        getFiles: () => {

        }
    }
 }
