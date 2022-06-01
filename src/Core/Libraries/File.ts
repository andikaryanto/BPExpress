import DateFormat from './DateFormat';
import UploadedFile from './UploadedFile';
import config from '../../config';
import UploadedFileError from '../Errors/UploadedFileError';
import md5 from 'md5';
import {v4 as uuidv4} from 'uuid';

/**
 * @class File
 */
class File {
    protected files: UploadedFile|null = null;
    protected destination: string;
    protected maxSize: number = 0;
    protected allowedType: string[];
    protected errorMessage: string = '';
    protected urlfile: string = '';

    /**
      *
      * @param {string} destination
      * @param {number} maxSize
      * @param {string[]} allowedType
      */
    constructor(destination: string, maxSize: number = 0, allowedType: string[] = []) {
        this.destination = destination;
        this.maxSize = maxSize * 1000;
        this.allowedType = allowedType;
    }

    /**
      *
      * @param {UploadedFile} uploadedFiles
      * @param {boolean} usePrefixName default true
      * @param {boolean} useHashName default true
      * @return {boolean}
      */
    upload(uploadedFiles: UploadedFile, usePrefixName = true, useHashName = true) {
        return new Promise((resolve, reject) => {
            this.files = uploadedFiles;
            if (this.maxSize != 0 && this.files.getSize() > this.maxSize) {
                this.errorMessage = 'File size is to big';
                throw new UploadedFileError(this.errorMessage);
            }

            if (this.allowedType.length > 0) {
                const allowed = this.allowedType.filter((x) => x == uploadedFiles.getExtension()).length != 0;
                if (!allowed) {
                    this.errorMessage = 'File type is not supported';
                    throw new UploadedFileError(this.errorMessage);
                }
            }

            let nameex = '';
            if (usePrefixName) {
                nameex = DateFormat.getFormattedCurrentDate() + '_';
            }

            let newName = '';
            if (!useHashName) {
                // newName = $nameex . str_replace([' ', '#', '+'], ['-', '-', '-'], $files->getName());
            } else {
                newName = nameex + md5(uuidv4()) + '.' + uploadedFiles.getExtension();
            }

            uploadedFiles.move(config.sourcePath + '/' + this.destination + '/' + newName, (err: any) => {
                if (err) {
                    this.errorMessage = 'Failed To upload file';
                    reject(new UploadedFileError(this.errorMessage));
                } else {
                    this.urlfile = this.destination + '/' + newName;
                    resolve(true);
                }
            });
        });
    }

    /**
      *
      * @return {string}
      */
    getFileUrl(): string {
        return this.urlfile;
    }

    /**
      *
      * @param {string} ext
      */
    addExtention(ext: string) {
        this.allowedType.push(ext);
    }
}

export default File;
