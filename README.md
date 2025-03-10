# Setup instructions

Assumptions:

1. You have NVM (Node Version manager) installed or a modern verson of NodeJS installed. This is built with Node version v19.7.0. But should work with most other versions.
1. You are on a \*nix system, ubuntu, macos or something similar. If you're on Windows, I am very sorry for your misfortune. However I assume you have things like nodejs, npm, git etc... installed

Steps:

1. npm i
1. npm start // starts the backend
1. Use postman (hoppscotch is better b/c it's open source) or curl to test the endpoints

# Available endpoints:

- **HTTP: GET**

  - **URL:** `http://localhost:3000/movies/all`
  - **Options:**
    - Query param of page number, e.g., `http://localhost:3000/movies/all?page=3`
  - **Expected output:** Returns a list of movies by page number.

- **HTTP: GET**
  - **URL:** `http://localhost:3000/movies/25`
  - **Options:**
    - URL Param of ID of a movie
  - **Expected output:** Your movie with an average computed rating
