import fs from 'fs';

// using generic for the type of the data inside of the reader, making class abstract
export abstract class CsvFileReader<T> {
    // data is an array of tuples(Match Data)
    data: T[] = [];
    
    constructor(public filename: string) {}

    // saying that mapRow method will be defined in children's classes
    abstract mapRow(row: string[]): T;

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('/n')
        .map((row: string): string[] => {
            return row.split(',');
        })
        .map(this.mapRow);
    }  
}


/* export class CsvFileReader {
    // data is an array of tuples(Match Data)
    data: MatchData[] = [];
    
    constructor(public filename: string) {}

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('/n')
        .map((row: string): string[] => {
            return row.split(',');
        })
        .map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                // Type Assertion - override TS typing, saying that it may have only MatchResult values
                row[5] as MatchResult,
                row[6],
            ]
        });
    }
} */