# intermediate-react-v2-frontendmasters

https://github.com/btholt/complete-intro-to-react-v5

https://coursehunter.net/course/intermediate-react-v2

https://btholt.github.io/complete-intro-to-react-v5

В этом курсе будут рассматриваться некоторые продвинутые вещи из экосистемы React. За основу курса взята master ветка, которая была клонирована в intermediate-react-v2. Теперь для каждой отдельной темы из этого курса, будет создана новая ветка на основе текущей ветки (intermediate-react-v2), например для темы Emotion будет создана ветка emotion, на основе intermediate-react-v2. Когда мы закончим с Emotion и перейдём к следующей теме, например к SSR, то вернёмся обратно в ветку intermediate-react-v2 и сделаем на её основе новую ветку ssr. И т.д.

## testing

1. `npm install -D jest babel-jest @testing-library/react`

2. Create folder `__tests__`

3. Add option to .babelrc [link](https://jestjs.io/docs/en/getting-started#using-babel) [link2](https://stackoverflow.com/a/56267658)

```json
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

4. Add test script to package.json

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

5. Add jest variable to env section in .eslintrc.json

```json
{
  "env": {
    "jest": true
  }
}
```

## warning

> It looks like you're using a version of react-dom that supports the "act" function, but not an awaitable version of "act" which you will need. Please upgrade to at least react-dom@16.9.0 to remove this warning.

Updated react-dom to 16.9.0

> TypeError: Cannot read property 'current' of undefined

Updated react to 16.9.0 and it started working again. https://github.com/testing-library/react-testing-library/issues/439
