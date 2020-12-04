export class Anime {
    name: string;
    episode: string;
    magnet: string;

    /**
     *
     */
    constructor(name: string, episode: string, magnet: string) {
        this.name = name;
        this.episode = episode;
        this.magnet = magnet;
    }
}