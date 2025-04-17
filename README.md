# eslint-plugin-no-empty-first-line

[pt-BR] - 🚫 ESLint plugin que impede arquivos de começarem com uma linha em branco.
[en] - 🚫 ESLint plugin that prevents files from starting with an empty line.

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
