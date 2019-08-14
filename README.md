# intermediate-react-v2-frontendmasters

https://github.com/btholt/complete-intro-to-react-v5

https://coursehunter.net/course/intermediate-react-v2

https://btholt.github.io/complete-intro-to-react-v5

В этом курсе будут рассматриваться некоторые продвинутые вещи из экосистемы React. За основу курса взята master ветка, которая была клонирована в intermediate-react-v2. Теперь для каждой отдельной темы из этого курса, будет создана новая ветка на основе текущей ветки (intermediate-react-v2), например для темы Emotion будет создана ветка emotion, на основе intermediate-react-v2. Когда мы закончим с Emotion и перейдём к следующей теме, например к SSR, то вернёмся обратно в ветку intermediate-react-v2 и сделаем на её основе новую ветку ssr. И т.д.

## ssr

1. `npm i -D @babel/cli @babel/node`

2. `npm i -S express`

```json
// package.json
{
  "scripts": {
    "start": "npm -s run build && babel-node server/index.js",
    "build": "parcel build --public-url ./dist/ src/index.html"
  }
}
```

### hydrate

So `hydrate` is a special function. It's like `render`, but what it's saying is I expect there to be markup already in this place. Just take over what's there, don't re render, right? Whereas, if I said render here instead of hydrate it would say blow away whatever is there and re-render it.

Okay, now you have to go through your entire application, and make sure on the initial first render that there's no reference to documents. Like `const modalRoot = document.getElementById("modal");`
