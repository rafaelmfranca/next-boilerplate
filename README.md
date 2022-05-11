[![CI](https://github.com/rafaelmfranca/next-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/rafaelmfranca/next-boilerplate/actions/workflows/ci.yml) 
[![codecov](https://codecov.io/gh/rafaelmfranca/next-boilerplate/branch/main/graph/badge.svg?token=7NF329JMS1)](https://codecov.io/gh/rafaelmfranca/next-boilerplate)

# This is a simple and effective [Next.js](https://nextjs.org/) boilerplate
## Features

This project uses lot of stuff as:

- :zap: [NextJS](https://nextjs.org/) for Static Site Generator and more
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org/)
- :nail_care: Integrate with [Styled Components](https://styled-components.com/)
- ✅ Write tests with [Jest](https://jestjs.io/) and :octopus: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- :closed_book: UI component explorer with [Storybook](https://storybook.js.org/)
- 📏 Linter with [Eslint](https://eslint.org/) + code formatter with [Prettier](https://prettier.io/)
- 🦊 [Husky](https://github.com/typicode/husky) for Git Hooks
- 🚫 [Lint-staged](https://github.com/okonet/lint-staged) for running linters on Git staged files
- 🚓 Lint git commit with [Commitlint](https://commitlint.js.org/#/)
- 💧 Save your time creating component files with consistency with [Plop](https://plopjs.com/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook
- `generate`: create component scaffold with consistency
