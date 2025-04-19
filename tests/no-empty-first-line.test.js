const { RuleTester } = require('eslint')

const rule = require('../lib/index.js').rules['no-empty-first-line']

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  }
})

ruleTester.run('no-empty-first-line', rule, {
  valid: [
    {
      code: 'const x = 42'
    },
    {
      code: '// first comment\n// other comment'
    }
  ],
  invalid: [
    {
      code: '\nconst x = 42',
      output: 'const x = 42',
      errors: [{ message: 'File must not start with a blank line' }]
    },
    {
      code: '   \nconst x = 100',
      output: 'const x = 100',
      errors: [{ message: 'File must not start with a blank line' }]
    }
  ]
})
