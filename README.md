# intermediate-react-v2-frontendmasters

https://github.com/btholt/complete-intro-to-react-v5

https://coursehunter.net/course/intermediate-react-v2

https://btholt.github.io/complete-intro-to-react-v5

В этом курсе будут рассматриваться некоторые продвинутые вещи из экосистемы React. За основу курса взята master ветка, которая была клонирована в intermediate-react-v2. Теперь для каждой отдельной темы из этого курса, будет создана новая ветка на основе текущей ветки (intermediate-react-v2), например для темы Emotion будет создана ветка emotion, на основе intermediate-react-v2. Когда мы закончим с Emotion и перейдём к следующей теме, например к SSR, то вернёмся обратно в ветку intermediate-react-v2 и сделаем на её основе новую ветку ssr. И т.д.

## Emotion

1. Install `npm i -S @emotion/core @emotion/babel-preset-css-prop`

2. Add to .babelrc

```json
{
  "presets": [
    // ...
    ["@emotion/babel-preset-css-prop", { "sourceMap": false }]
  ]
}
```

We had to disable source maps for now because Parcel doesn't play nice with Emotion source maps. Webpack does. This will be fixed in Parcel 2.
