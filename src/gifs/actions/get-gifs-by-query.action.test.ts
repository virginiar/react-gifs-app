import { describe, expect, test } from "vitest";
import AxiosMockAdapter from 'axios-mock-adapter';

import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from './../../../tests/mocks/giphy.response.data';

describe('getGifsByQuery', () => {
    const mock = new AxiosMockAdapter(giphyApi);

    /* test('should return a list of gifs', async () => {
        const gifs = await getGifsByQuery('Goku');
        const [gif1] = gifs;
        // console.log(gifs);

        expect(gifs.length).toBe(10);


        expect(gif1).toStrictEqual({
            id: expect.any(String),
            height: expect.any(Number),
            width: expect.any(Number),
            title: expect.any(String),
            url: expect.any(String),
        });
    }); */
    test('should return a list of gifs', async () => {
        mock.onGet('/search').reply(200, giphySearchResponseMock);

        const gifs = await getGifsByQuery('Goku');
        
        expect(gifs.length).toBe(10);


        gifs.forEach((gif) => {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');
        });
    });
});