import { Injectable } from '@angular/core';
import { Anime } from '../../classes/anime';
import { Dictionary } from '../../classes/dictionary';
import * as animeList from '../../../submissions.json';
import Submission from '../../classes/submissions'

@Injectable({
  providedIn: 'root'
})
export class AnimeListService {

  
    animes: Submission[];
    //animes: Anime[];
    constructor() {
        
        this.animes = Object.assign(new Array<Submission>(), animeList )['default'];
     }

     getCurrentAnimes() :Submission[]{
         return this.animes;
     }

}
