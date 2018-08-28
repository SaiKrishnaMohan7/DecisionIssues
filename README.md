# Decision Issues

A react app to help me understand React and how much it simplifies life at the front-end

## Technologies used

- React
- React DOM
- React Modal
- yarn
- Styles
  - css-loader
  - style-loader
  - sass-loader
    - node-sass
  - normalize.css - for css reset
- babel
  - cli
  - core
  - loader
  - plugin: transform-class-properties
  - presets: env, react
- Webpack
  - cli
  - dev-server
- Live Server

## Git - SubModule

- This project includes my [notes](https://github.com/SaiKrishnaMohan7/Notes) repo as a sub module
- To clone this project and have access to the said submodule run `git clone --recurse-submodules <addressOfRepo>`. This should give you the latest changes from the submodule repo. If for some reason, the latest changes aren't there, do as follows:
  - Run `git submodule update --remote`, this will check the master branch and automatically bring your submodule up to speed
  - To get the exact list of commits that the submodule was updated with, run `git diff --submodule`
- The git config (should be set locally!) for this repo should check for changes to the submodule when pushing upstream
  - If changes exist (your commits), run `git push --recurse-submodules=on-demand` to update the submodule remote with your changes
- [More on this, if stuck with problems](https://git-scm.com/book/en/v2/Git-Tools-Submodules)