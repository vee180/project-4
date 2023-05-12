import tokenService from "./tokenService";

const BASE_URL = "/api/";

export function create(postId) {
  return fetch(`${BASE_URL}posts/${postId}/bookmarks`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(), // < this is how we get the token from localstorage and and it to our api request
    },
  }).then((res) => res.json());
}

export function removeBookmark(bookmarkId) {
  return fetch(`${BASE_URL}bookmarks/${bookmarkId}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}
