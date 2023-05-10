import tokenService from "./tokenService";

const BASE_URL = "/api/";

// sends a POST request to the backend to create a new review
export function createReview(review) {
  return fetch(`${BASE_URL}reviews`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
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
export function deleteReview(reviewId) {
  return fetch(`${BASE_URL}reviews/${reviewId}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}
