import { Injectable } from '@angular/core';
import { Anime } from '../../classes/anime';
// import { si, pantsu } from 'nyaapi';
import { Dictionary } from '../../classes/dictionary';
import { NyaaResponse } from '../../classes/nyaa-response';
import { AnimeListService } from './anime-list.service';

@Injectable({
    providedIn: 'root'
})
export class NyaaService {

    private animesDictionary: Dictionary<string[]>;

    animeTorrents :Anime[];

    constructor(private animeListService: AnimeListService) {
        this.animesDictionary = animeListService.getCurrentAnimes();
        this.animeTorrents = [];
        this.getAnimesTorrentData();
    }
    
    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getEpisodeNumber(name: string): string {
        return name.replace('1080', '').replace(/^\D+/g, '').substr(0, 3).trim();
    }

    // async search(submiter: string, animeTitle: string): Promise<number> {

    //     let result = await si.searchByUser(submiter, animeTitle, 1);
    //     let nya = (((result as []).shift()) as NyaaResponse);

    //     let epNumber = this.getEpisodeNumber(nya.name)

    //     let anime = new Anime(nya.name, epNumber, nya.magnet);
    //     this.animeTorrents.push(anime)
    //     return 0
    // }

    
    async getAnimesTorrentData(): Promise<void> {
        this.animeTorrents = [];

        for (let submiter of this.animesDictionary.Keys()) {
            for (let animeTitle of this.animesDictionary.Item(submiter)) {
                // await this.search(submiter, animeTitle);
            }
        }
    }
    animeList():Anime[]{
        return this.animeTorrents;
    }
}
