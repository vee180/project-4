import tokenService from "./tokenService";

const BASE_URL = "/api/";

// sends a POST request to the backend to create a new review
export function createReview(review, postId) {
  return fetch(`${BASE_URL}posts/${postId}/reviews`, {
    method: "POST",
    body: JSON.stringify(review),
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

//sends a GET request to the backend to retrieve all reviews
export function getReviews() {
  return fetch(`${BASE_URL}reviews`, {
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}

//sends a DELETE request to the backend to delete a review by its ID
export function removeReview(reviewId) {
  return fetch(`${BASE_URL}reviews/${reviewId}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}
