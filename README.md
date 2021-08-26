# Getting Started with backend Dating App
Here's an idea from tinder. You can like the person you want to match or not 
## Available Scripts
After clone project, you open terminal in root file and run:
### `npm i`
Create mock database:

### `npm run generate-data`
File name db.json contain a lot of record, import it to your db

Run backend:
### `npm start`

Runs the app in the development mode.
Open [http://localhost:5000](http://localhost:5000) to view if server running.

# Api
Get info user:
GET: /user?page=0&limit=1
GET: /user/:id

Store the list of liked and passed users on the server:
POST: /user/like
POST: /user/pass
body: { idUser, idLikeUser }
