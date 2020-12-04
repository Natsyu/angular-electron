import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {Anime} from '../../classes/anime';

@Component({
    selector: 'app-anime-card',
    templateUrl: './anime-card.component.html',
    styleUrls: ['./anime-card.component.scss']
})
export class AnimeCardComponent implements OnInit, AfterViewInit {

    @Input() anime: Anime;
    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        console.log(this.anime);
        
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        
    }

}
