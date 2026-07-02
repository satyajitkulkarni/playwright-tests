//Import file system from node
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync'

export function readCSV(filepath: string) {
    const fullPath = path.resolve(filepath)
    console.log(fullPath)
    const fileContent = fs.readFileSync(fullPath, 'utf-8')

    const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true
    });
    return records;
}
