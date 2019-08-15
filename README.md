# intermediate-react-v2-frontendmasters

https://github.com/btholt/complete-intro-to-react-v5

https://coursehunter.net/course/intermediate-react-v2

https://btholt.github.io/complete-intro-to-react-v5

В этом курсе будут рассматриваться некоторые продвинутые вещи из экосистемы React. За основу курса взята master ветка, которая была клонирована в intermediate-react-v2. Теперь для каждой отдельной темы из этого курса, будет создана новая ветка на основе текущей ветки (intermediate-react-v2), например для темы Emotion будет создана ветка emotion, на основе intermediate-react-v2. Когда мы закончим с Emotion и перейдём к следующей теме, например к SSR, то вернёмся обратно в ветку intermediate-react-v2 и сделаем на её основе новую ветку ssr. И т.д.

## typescript

1. `npm install -D typescript`

2. `npx tsc --init`

3. Setup `tsconfig.json`

```json
{
  "target": "ES2019",
  "jsx": "react",
  "strict": true
}
```

- **Note** If you're gonna just start out with a brand new project in TypeScript, and you wanna just get started as fast as you can, you can introduce TypeScript with `"strict": false`.

4. `npm install -D @types/react @types/react-dom @types/reach__router`

- **Note** it can't do slashes so you do double underscore so `@types/reach__router`, cuz normally it's `@reach/router`

## migrate from ESLint to TSLint

1. `npm uninstall -D eslint babel-eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`

2. `npm install -D tslint tslint-react tslint-config-prettier`

3. Change `lint` script, `--project` means read all from `tsconfig.json`

```json
{
  "scripts": {
    "lint": "tslint --project"
  }
}
```

4. Delete `.eslintrc.json` and create `tslint.json`

```json
{
  "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
  "rules": {
    "ordered-imports": false,
    "object-literal-sort-keys": false,
    "member-ordering": false,
    "no-console": false,
    "jsx-no-lambda": false
  }
}
```

- **Note ** `tslint-config-prettier` must be last in order

5. Add [tslint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) extension to VS Code made by Microsoft (not egamma(deprecated))
