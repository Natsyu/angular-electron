import { Component, Input, OnInit } from '@angular/core';
import {Anime} from '../../classes/anime';

@Component({
    selector: 'app-anime-card',
    templateUrl: './anime-card.component.html',
    styleUrls: ['./anime-card.component.scss']
})
export class AnimeCardComponent implements OnInit {

    @Input() anime: Anime[];
    constructor() { }

    ngOnInit(): void {
    }

}
