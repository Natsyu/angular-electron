export class Anime {
    name: string;
    episode: string;
    magnet: string;
    image: string;

    /**
     *
     */
    constructor(name: string, episode: string, magnet: string, image: string) {
        this.name = name;
        this.episode = episode;
        this.magnet = magnet;
        this.image = image;
    }
}