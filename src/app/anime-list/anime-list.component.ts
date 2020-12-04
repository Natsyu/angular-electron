import { Component, OnInit } from '@angular/core';
import { Anime } from '../../classes/anime';
import { NyaaService } from '../services/nyaa.service'

@Component({
    selector: 'app-anime-list',
    templateUrl: './anime-list.component.html',
    styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {

    animes: Anime[];
    constructor(private nyaaService: NyaaService) {

    }

    ngOnInit(): void {

        this.nyaaService.getAnimesTorrentData().then(x => {
            this.animes = this.nyaaService.animeList();
        });

    }

}
