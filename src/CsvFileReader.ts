import fs from 'fs';


export class CsvFileReader {
    // data is an array of tuples(Match Data)
    data: string[][] = [];
    
    constructor(public filename: string) {}

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('/n')
        .map((row: string): string[] => {
            return row.split(',');
        });
    }
}