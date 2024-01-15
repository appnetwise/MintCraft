# NestJS Blueprint Project

This is a blueprint project for a Node.js application using the [NestJS](https://nestjs.com/) framework. It includes setup for [Husky](https://typicode.github.io/husky/#/), [Prettier](https://prettier.io/), and [ESLint](https://eslint.org/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository: `git clone https://github.com/yourusername/yourrepository.git`
2. Install the dependencies: `npm install`

## Running the Application

- Development mode: `npm run start`
- Watch mode: `npm run start:dev`
- Production mode: `npm run start:prod`

## Running the Tests

- Unit tests: `npm run test`
- End-to-end tests: `npm run test:e2e`
- Test coverage: `npm run test:cov`

## Code Formatting and Linting

This project uses Prettier and ESLint to enforce a consistent code style and catch bugs. To check your code, run:

- `npm run lint` to run ESLint
- `npm run format` to run Prettier

Husky is set up to automatically run these checks before each commit.

## Built With

- [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient and scalable server-side applications.
- [Husky](https://typicode.github.io/husky/#/) - Git hooks made easy.
- [Prettier](https://prettier.io/) - An opinionated code formatter.
- [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.