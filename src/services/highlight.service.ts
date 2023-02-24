import { RegisterOnlyHighlight } from './RegisterOnlyHighlightService';
import { Injectable } from '@nestjs/common';
import { ReadOnlyHighlightAbstraction } from './interfaces/ReadOnlyHighlight'
import { RegisterOnlyHighlightAbstraction } from './interfaces/RegisterOnlyHighlight'
import { ReadOnlyHighlight } from './ReadOnlyHighlightService';

@Injectable()
export class HighlightService {
    readHighlight: ReadOnlyHighlightAbstraction; 
    registerHighlight: RegisterOnlyHighlightAbstraction;

    constructor (){
        this.readHighlight = new ReadOnlyHighlight();
        this.registerHighlight = new RegisterOnlyHighlight();
    }
}