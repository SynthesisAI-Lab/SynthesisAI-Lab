# Tutorial page bundle

This repository collects everything for the tutorial page:

- [src/Tutorial.jsx](src/Tutorial.jsx) and [src/tutorialData.js](src/tutorialData.js)
- [src/assets/tutorial_assets/](src/assets/tutorial_assets/) screenshots referenced from the data file

## Referencing assets

Assets are bundled via `new URL(..., import.meta.url)` so paths stay relative to this folder. Example:

```js
const img = new URL('./tutorial_assets/example.png', import.meta.url).href;
```

Screenshots already use this pattern inside `tutorialData.js`; add new files into `tutorial_assets/` to make them available.
