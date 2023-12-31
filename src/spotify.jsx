// 

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://saadkhandeveloper.github.io/spotify-clone/";

const clientId = "b12858f7dec648ab97ff9a7c58fc4459";


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1)
    .split('&')
    .reduce((initial, item) => {
        // #accessToken=4234234
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
