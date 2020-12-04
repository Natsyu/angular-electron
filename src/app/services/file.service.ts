import { Injectable } from '@angular/core';
import * as fs from "fs";
import * as path from "path";
import { stringify } from 'querystring';

@Injectable({
    providedIn: 'root'
})
export class FileService {

    constructor() { }

    readFrom(fileName: string): string[] {
        let lines: string[];
        fs.readFileSync(__dirname)
        return lines;
    }
}
