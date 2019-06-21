# react-complete-intro-frontendmasters

https://github.com/btholt/complete-intro-to-react-v5

https://coursehunters.net/course/polnoe-vvedenie-v-react-v5

## Setup project

1. `npm init --y`

2. `npm install -D parcel-bundler` and [this](https://stackoverflow.com/a/50945539) `npm i -D npm-run-all` and add to package.json

```json
{
  "scripts": {
    "start": "parcel src/index.html",
    "pre_build": "rm -rf dist/ .cache/",
    "build_logic": "parcel build src/index.html",
    "build": "run-s pre_build build_logic"
  }
}
```

3. Create and include html, css, js files

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./style.css" />
    <title>Document</title>
  </head>

  <body>
    <div id="root">not rendered</div>

    <script src="./App.js"></script>
  </body>
</html>
```

4. `npm install -S react react-dom`

5. `npm install -D eslint eslint-config-prettier babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`

6. `touch .eslintrc.json`

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "rules": {
    "react/prop-types": 0,
    "no-console": 1,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1
  },
  "plugins": ["react", "import", "jsx-a11y", "react-hooks"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

7. `npm install -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react`

8. `touch .babelrc`

```
{
  "presets": ["@babel/preset-react", "@babel/preset-env"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

9. `touch .gitignore`

```
# dependencies
/node_modules

# production
.cache/
/dist

# testing
/coverage

# misc
.DS_Store
.vscode/
.env
```

10. `touch .editorconfig`

```
# editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

9. We don't Parcel to use Babel to translate our async/await calls (since you and I are probably both using modern browsers, you'd want to let it translate it for production.) As such, add this to your package.json:

```json
{
  "browserslist": [
    "last 2 Chrome versions",
    "last 2 ChromeAndroid versions",
    "last 2 Firefox versions",
    "last 2 FirefoxAndroid versions",
    "last 2 Safari versions",
    "last 2 iOS versions",
    "last 2 Edge versions",
    "last 2 Opera versions",
    "last 2 OperaMobile versions"
  ]
}
```

## Other

https://www.petfinder.com/

https://btholt.github.io/complete-intro-to-react-v5/effects
