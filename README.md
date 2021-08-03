# Zemoga Rule Of Thumb Spa

Angular SPA to give your opinion with a vote for any celebrity listed.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Prerequisites

- Install NodeJS version 14.17.2 in your local machine
- Clone the repository on your local machine with `git clone git@github.com:darizaq/zemoga-rule-of-thumb-spa.git`
- Go to project folder with `cd zemoga-rule-of-thumb-spa`
- Run `npm install` on the project folder to download dependencies
- Use `npm run dev:ssr` to run a development server with change detection or use `npm start` to run the production version of the application
- Navigate to http://localhost:4200 if you executed `dev:ssr` command. Navigate to http://localhost:4000 if you executed `start` command.

## Architecture

- **app**: SPA base folder
  - **core**: Application core functionality
  - **features**: Feature level components
  - **shared**: Shared resources
- **assets**: Application assets
  - **fonts**: Fonts definition files
  - **i18n**: Internationalization JSON files
  - **images**: Image resources
  - **scss**: SCSS files
- **environment**: Application environment configurations
- **mocks**: Application mocks for testing purposes

## Development notes

Some tools that I used and configured in the application are the following:

- Mobile-first approach was used to develop the application
- CSS preprocessor was used (specifically SCSS)
- ESLint was used for code style validation
- StyleLint was used for SCSS style validation
- Prettier was used to have unified code formatting across the application
- Husky pre-commit hook was added to run prettier, linters and unit test
- Nightwatch was used to execute end-to-end test over the application
- Dockerfile was added to create a containerized version of the application
- AWS AppSync was used to expose a GraphQL API to retrieve rulings list and store votes for every celebrity listed
- Environment variables file includes values for API integration (For testing purposes this file was included, on a real project this shouldn't be committed)

Regarding quality

- Unit tests coverage for the code is

| Statements | Branches | Functions | Lines  |
| ---------- | -------- | --------- | ------ |
| 99.42%     | 82.5%    | 98%       | 99.34% |

- Linters to avoid static code errors and keeps an unified code styling

- End to end test added to test user interaction with the application

- SEO and accessibility tested with Lighthouse
  - SEO score: 91%
  - Accessibility score: 100%

## Commands and technical notes

### Development server

Run `npm run dev:ssr` for a server side rendering dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `npm run build:ssr` to build project with server side rendering. The build artifacts will be stored in the `dist/` directory. Browser related artifacts will be stored in the `dist/zemoga-rule-of-thumb-spa/browser`. Server related artifacts will be stored in the `dist/zemoga-rule-of-thumb-spa/server`

### Serve

Run `npm run serve:ssr` to run the application with server side rendering. To run without a previous build execute `npm run start` this will run build and serve commands.

### Linters

Run `npm run lint` to run ESLinter and StyleLinter. To run linters separately run `npm run lint:ng` and `npm run lint:scss` respectively

### Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io) with test coverage report.

### Running end-to-end tests

First run `npm start` to have the application up and running; then run `npm run e2e` in another command line window to execute the end-to-end tests via [Nightwatch](https://nightwatchjs.org/).

### Docker

#### Build

Run `npm run build:docker` to generate docker image

#### Run

Run `docker run -p 4000:4000 darizaq/zemoga-rule-of-thumb-spa` to start the generated docker image

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
