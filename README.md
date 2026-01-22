# Tutorial page bundle

This directory collects everything for the tutorial page:

- `Index.jsx` and `tutorialData.js`
- `tutorial_assets/` screenshots referenced from the data file

## Referencing assets

Assets are bundled via `new URL(..., import.meta.url)` so paths stay relative to this folder. Example:

```js
const img = new URL('./tutorial_assets/example.png', import.meta.url).href;
```

Screenshots already use this pattern inside `tutorialData.js`; add new files into `tutorial_assets/` to make them available.
