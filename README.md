# unit-1-calander-project

# Host on github pages

## Assumptions

1. Your project directory looks like this (because you are a good citizen and ran 'yo galvanize-html'):
```
  ├── README.md
  ├── gulpfile.js
  ├── package.json
  └── src
      ├── about.html
      ├── images
      │   └── background.jpeg
      ├── index.html
      ├── main.js
      └── style.css
```
1. You have a .git repo with the project

## Initial Push


1. `git add -A`
2. `git commit -m "inti"`
3. Create the repo on github
4. Add the remote
5. `git push origin master`
6. `git branch gh-pages`
7. `git subtree push --prefix src origin gh-pages`
8. Profit

## As you work

1. `git add -A`
2. `git commit -m "Enter A BETTER MESSAGE"`
3. `git push origin master`
4. `git subtree push --prefix src origin gh-pages`
