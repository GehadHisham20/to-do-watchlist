# ToDo List (watchlist)

## Overview

This project is a React.js frontend application that provides functionality for managing watchlist. Users can access the application through a web browser.

## Routes

1. `/` - Public home page

   - Description:
     - This route serves as the landing page for the application where he will find list of movies.
     - User can add a movie to his watchlist (heart button) only when he registred
   - Access: Public

2. `/register` - Register page

   - Description: This route allows users to register so he can add to his watchlist.
   - Access: Public

3. `/watchlist` - User watchlist page
   - Description:
     - This route displays watchlist items and watchlist management functionalities for authenticated users.
     - user can add to his watchlist by adding a movie to watchlist or with add button
   - Access: Private (requires authentication)

## Installation

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start the application: `pnpm run dev`

## Configuration

- Ensure you have Node.js and pnpm installed on your machine.

## Dependencies

- React.js
- React Router (for routing)
- zustand
- uuid (for generate ids) incase of creating new watch item
- axios

## Usage

- To access the application, navigate to `http://localhost:5173` in your web browser.
- Use the register page to authenticate and access the user watchlist page.
- Perform tasks management operations as needed.
  - Add new watchlist item using add button in same page or by adding movie in home page
  - edit watchlist item
  - delete watchlist item
  - filter by status (all,compeleted,uncompeleted)
