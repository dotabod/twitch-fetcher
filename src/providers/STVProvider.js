import { normalize7TVEmotes } from "../utils/EmoteUtils";
import fetch from "node-fetch";

export default class SevenTVProvider {
    async sendGetRequest(url) {
        let req = await fetch(url);
        let body = await req.json();

        if (req.ok) {
            return body.sets;
        } else {
            throw new Error(`${body.status} ${body.error} - ${body.message}`);
        }
    }

    async getEmotesByID(id) {
        let sets = await this.sendGetRequest(
            `https://api.7tv.app/v2/users/${id}/emotes`
        );
        return normalize7TVEmotes(sets);
    }
}
