# Trending Github Repositories in Last week

The idea of this project is to implement a small client application for discovering
trending repositories on GitHub.
A list of the most popular repositories of the last week should be displayed and the
user should be able to star them. The starred repositories should be visible either
through a filter or in a diferent tab. Some basic info about the repo should be
displayed, such as: repo name, link to GitHub, description and number of stars. To keep
things simple, the starring won’t be sent back to GitHub’s servers but just stored in
localStorage.

## How it runs

#### Install modules and start webpack server

```
npm install
npm start
```

#### Navigate to http://localhost:3000/ in your browser

## How it works

```
Click on Stars in the list of repositories
Count of starts will be increased and repository will be added to starred list
Go to Starred list stored in localStorage and click on the button to remove repo from starred list

```
