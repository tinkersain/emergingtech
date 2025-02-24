import fs from 'fs';

export default class FileManager {
    constructor(filePath) {
        this.filePath = filePath;
    }

    writeFile(content) {
        fs.writeFileSync(this.filePath, content);
    }

    readFile() {
        return fs.readFileSync(this.filePath, 'utf8');
    }

    appendFile(content) {
        fs.appendFileSync(this.filePath, content);
    }

    deleteFile() {
        fs.unlinkSync(this.filePath);
    }
}
