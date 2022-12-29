const TwitchFetcher = require("../");

const fetcher = new TwitchFetcher();

test("Get 7TV emotes by id", async () => {
    const emotes = await fetcher.getEmotesByID("39276140", { "7tv": true });
    expect(emotes.length).not.toBe(0);
});
