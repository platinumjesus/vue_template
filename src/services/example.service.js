/**
* Timeout function
* @param {Integer} time (miliseconds)
* @param {Promise} promise
*/
export const timeout = (time, promise) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject(new Error('Request timed out.'))
        }, time);
        promise.then(resolve, reject);
    });
}

const BASE_API = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";
const TIMEOUT = 10000;

const mapIndex = (entry, index) => entry.index = index;

const controller = new AbortController();
const signal = controller.signal;

export const fetchSongs = () => {
    return timeout(TIMEOUT, fetch(BASE_API, {
        signal: signal
    }))
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject(`API endpoint error, status: ${response.status}`);
        })
        .then(data => {
            const songs = data.feed.entry;
            songs.map(mapIndex);

            return songs;
        })
        .catch(err => {
            console.error(err);
            controller.abort();
            throw err;
        });
};
