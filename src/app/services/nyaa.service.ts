import { Injectable } from '@angular/core';
import { Anime } from '../../classes/anime';
import { si } from 'nyaapi';
import { Dictionary } from '../../classes/dictionary';
import { NyaaResponse } from '../../classes/nyaa-response';
import { AnimeListService } from './anime-list.service';
import { HttpClient } from '@angular/common/http';
import Submission from '../../classes/submissions';


@Injectable({
    providedIn: 'root'
})
export class NyaaService {

    private animeSubmissions: Submission[];
    private imageApiUrl = 'https://kitsu.io/api/edge/anime?filter[text]=';


    animeTorrents: Anime[];

    constructor(private animeListService: AnimeListService, private http: HttpClient) {
        this.animeSubmissions = animeListService.getCurrentAnimes();
        this.animeTorrents = [];
    }

    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getEpisodeNumber(name: string): string {
        return name.replace('1080', '').replace(/^\D+/g, '').substr(0, 3).trim();
    }

    async search(submiter: string, animeTitle: string): Promise<any> {

        let result = await si.searchByUser(submiter, animeTitle, 1);
        let nya = (((result as []).shift()) as NyaaResponse);

        let epNumber = this.getEpisodeNumber(nya.name)

        this.http.get<string>(`${this.imageApiUrl + animeTitle}`).subscribe(response => {
            let img = response["data"][0]["attributes"]["posterImage"]["medium"]
            let anime = new Anime(animeTitle, epNumber, nya.magnet, img);
            anime.name = this.trimName(anime.name);
            this.animeTorrents.push(anime)
            this.animeTorrents.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
            return 0
        })

    }

    private trimName(name: string): string {
        return name.replace('1080', '');
    }
    async getAnimesTorrentData(): Promise<void> {
        this.animeTorrents = [];

        for (let submiter of this.animeSubmissions) {
            for (let animeTitle of submiter.animes) {
                await this.search(submiter.submitter, animeTitle);
            }
        }
    }
    animeList(): Anime[] {
        return this.animeTorrents;
    }
}
