# eslint-plugin-no-empty-first-line

🚫 ESLint plugin que impede arquivos de começarem com uma linha em branco.

## Instalação

```bash
yarn add -D eslint-plugin-no-empty-first-line
```

## Uso

```js
// .eslintrc.js
module.exports = {
  plugins: ['no-empty-first-line'],
  rules: {
    'no-empty-first-line/no-empty-first-line': 'error',
  },
};
```
