import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

// extending an abstract class and defining the type of the data for reading
export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
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
    }
}