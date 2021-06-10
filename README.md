# Notes To My Future Self

Notes To My Future Self is an application that helps you keep text, video, and music memories. From warning yourself about tastless cookies, to remembering the night that a certain song took your breath away, you decide what you want to tell your future self.

![Home Page](https://github.com/ashley-brown13/notes-to-my-future-self/blob/main/react-app/public/images/SplashPageTop.png)

## Link to live site
https://notes-to-my-future-self.herokuapp.com/

## Site Wiki
https://github.com/ashley-brown13/notes-to-my-future-self/wiki

## Technologies
* Python
* Flask
* SQLAlchemy
* React
* Redux

## Key Features

### Notes

Authenticated users can create text, music, and video notes. They have the option to at a greeting and ending, as well as select from a myriad of background choices. It was really important to me to give choices in design to the user, as this is their online memory box.

![Note Creation Page](https://github.com/ashley-brown13/notes-to-my-future-self/blob/main/react-app/public/images/NoteCreation.png)

### Tags

Authenticated users can create tags, and append as many as they wish to their notes. This allows for users to easily sort their memories into categories, which supports easy finding of the notes. Part of the reason I designed the application was the idea that people can look for certain notes depending on how they want to feel at the moment. For example, if the user was feeling sad, maybe they want to look at memories stored under a tag such as Laugh or Made Me Smile.

![Tags](https://github.com/ashley-brown13/notes-to-my-future-self/blob/main/react-app/public/images/Tags.png)

## Challenge

One of the challenges I ran into for the project was figuring out how and when to correctly format the spotify link into the required embed code in order to render the spotify player on the page. Attempting to put the full embed code into the database resulted in having the spotify player show up in the database in Postbird, while not actually showing up on the page. To get it to work, I had to run my embed generating function in the Redux store and save it in the new slice of state when the dispatch is run to retrieve the note for the page.

```js
function generate(spotifyLink){
    let copy = ""
    let first = spotifyLink.slice(0, 25)
    let second = "embed/"
    let third = spotifyLink.slice(25, 56)
    return copy + first + second + third
  }

const notesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ONE:
        newState = Object.assign({}, state);
        newState.note = action.note;
        if(newState.note.note.spotifyLink){
            let fixedLink = generate(newState.note.note.spotifyLink)
            newState.note.fixedLink = fixedLink
        }
        return newState
```

## Instructions
After cloning the repository to your local machine, follow the instructions below to start the app:

>1. In the root folder, run the following `pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`
>2. Make a .env file based on the .env.example (add values where required)
>3. Create your PostgreSQL user, password, and database. The information must match your .env file.
>4. Enter your shell enviroment with `pipenv shell`
>5. `flask db upgrade`
>6. `flask seed all`
>7. `flask run`
>8. In the react-app folder, run `npm install` to install all frontend dependencies.
>9. In the frontend folder, `npm start` to start the react app.
