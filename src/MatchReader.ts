import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    static fromCsv(filename: string): MatchReader {
        return new MatchReader(new CsvFileReader(filename));
    }

    constructor(public reader: DataReader){}

    matches: MatchData[] = [];

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((row: string[]): MatchData => {
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
}