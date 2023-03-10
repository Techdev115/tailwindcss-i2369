# webpack-boilerplate

- [Talwind CSS](https://tailwindcss.com/) with [tailwindcss/custom-forms](https://github.com/tailwindcss/custom-forms)
- [React](https://reactjs.org/) and [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [ESLint](https://eslint.org/) with React plugins and an opinionated [`.eslintrc.json`](.eslintrc.json)
- [Stylelint](https://stylelint.io) with an opinionated [`.stylelintrc.json`](.stylelintrc.json)
- [Classnames](https://github.com/JedWatson/classnames) utility

```bash
npm install
```

## Directory structure

```txt
webpack-boilerplate/
├── src/
│   ├── img/
│   │   └── logo.png
│   ├── index.html
│   ├── index.js
│   └── style.css
├── .babelrc
├── .browserslistrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .stylelintignore
├── .stylelintrc.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── webpack.config.base.js
├── webpack.config.dev.js
└── webpack.config.prod.js
```

## Commands

| Command              | Description                             |
| -------------------- | --------------------------------------- |
| `npm run start`      | Serves the webpack app for development  |
| `npm run start:prod` | Serves the webpack app from dist        |
| `npm run build`      | Builds the webpack app                  |
| `npm run lint`       | Lints all source files                  |
| `npm run lint-fix`   | Fix all source files                    |
| `npm run list`       | Prints the directory tree               |
