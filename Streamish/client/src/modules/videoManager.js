import { getToken } from "./AuthManager";

const baseUrl = "/api/video";

export const getAllVideos = () => {
    return fetch(baseUrl + "/getwithcomments").then((res) => res.json());
};

export const searchVideos = (searchTerm, sortByDescending) => {
    return getToken().then((token) => {
        return fetch(
            `${baseUrl}/search?q=${encodeURIComponent(
                searchTerm,
            )}&{sortByDescending}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            },
        ).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("An unknown error occurred while trying to get video.");
            }
        });
    });
};

export const addVideo = (video) => {
    return getToken().then((token) => {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(video)
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else if (resp.status === 401) {
                throw new Error("Unauthorized");
            } else {
                throw new Error("An unknown error occurred while trying to save a new video.");
            }
        });
    });
};