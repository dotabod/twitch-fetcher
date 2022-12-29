import BTTVProvider from "./providers/BTTVProvider";
import FFZProvider from "./providers/FFZProvider";
import SevenTVProvider from "./providers/STVProvider";

class TwitchFetcher {
    constructor(config = {}) {
        this.bttvProvider = new BTTVProvider();
        this.ffzProvider = new FFZProvider();
        this.stvProvider = new SevenTVProvider();
    }

    async getEmotesByID(id, config = { twitch: true }) {
        if (id == null) {
            throw new Error("You must specify an ID.");
        }

        let result = [];

        if (config.ffz) {
            result = [...result, ...(await this.ffzProvider.getEmotesByID(id))];
        }

        if (config.bttv) {
            result = [
                ...result,
                ...(await this.bttvProvider.getEmotesByID(id)),
            ];
        }

        if (config["7tv"]) {
            result = [...result, ...(await this.stvProvider.getEmotesByID(id))];
        }

        return result;
    }
}

export default TwitchFetcher;
