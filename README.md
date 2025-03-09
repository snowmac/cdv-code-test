# Setup instructions

Assumptions: 
1. You have NVM (Node Version manager) installed or a modern verson of NodeJS installed. This is built with Node version v19.7.0. But should work with most other versions. 
1. You are on a \*nix system, ubuntu, macos or something similar. If you're on Windows, I am very sorry for your misfortune. However I assume you have things like nodejs, npm, git etc... installed

Steps:
1. npm i 
1. npm start // starts the backend 
1. Use postman (hoppscotch is better b/c it's open source) or curl to test the endpoints

# Movies DB has some complex data structures:

## "productionCompanies"

[{"name": "Villealfa Filmproduction Oy", "id": 2303}, {"name": "Finnish Film Foundation", "id": 2396}]

## "genres"

[{"id": 18, "name": "Drama"}, {"id": 80, "name": "Crime"}]
