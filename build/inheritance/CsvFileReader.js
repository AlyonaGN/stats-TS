"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
// using generic for the type of the data inside of the reader, making class abstract
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        // data is an array of tuples(Match Data)
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('/n')
            .map(function (row) {
            return row.split(',');
        })
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
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
