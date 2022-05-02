# React Material-UI Template

this template sets up some basic commonly used patterns for React App. This

it initializes the app with the following dependencies:
- material-ui v5
  - custom theme
  - override button link behavior to use the routing of the react-router-dom linking
  - rtl config
- react-router v6

global settings:
- typescript:
  - noImplicitAny: false

config file:
- you can choose ui setting such rtl direction in `./src/customization/config.ts` 

this template uses pnpm to install the dependencies for speed and storage efficiency.

to use this template:
- run `git clone <thie repo url>`
- then, delete the `.git` folder in your local folder and initialize a new git repo
- run `pnpm install` to install the dependencies.
- run `pnpm run dev` to start the development server.
