import { Injectable } from '@angular/core';
import { Anime } from '../../classes/anime';
import { Dictionary } from '../../classes/dictionary';

@Injectable({
  providedIn: 'root'
})
export class AnimeListService {

  
    animes: Dictionary<string[]>;
    //animes: Anime[];
    constructor() {

        this.animes = new Dictionary<string[]>();
        
        this.animes.Add('Erai-raws', [
            'Jujutsu Kaisen 1080',
            'Black Clover 1080',
            'Higurashi no Naku Koro ni Gou 1080',
            'Enen no Shouboutai: Ni no Shou 1080',
            'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka III 1080',
            'Munou na Nana 1080']);
     }

     getCurrentAnimes() :Dictionary<string[]>{
         return this.animes;
     }
}
