const handleFixerRule = ({ context, fixer, node }) => {
  const rangeStart = 0

  const [firstToken] = context.sourceCode.getTokens(node)

  const [rangeEnd] = firstToken.range

  return fixer.removeRange([rangeStart, rangeEnd])
}

const handleCreateProgramRule = ({ context, node }) => {
  const sourceCode = context.getSourceCode()

  const lines = sourceCode.getText().split('\n')

  const hasEmptyLine = lines[0].trim() === ''

  if (hasEmptyLine) {
    context.report({
      fix: (fixer) => handleFixerRule({ context, fixer, node }),
      message: 'File must not start with a blank line',
      node
    })
  }
}

const handleCreateRule = (context) => {
  return {
    Program: (node) => handleCreateProgramRule({ context, node })
  }
}

module.exports = {
  rules: {
    'no-empty-first-line': {
      create: handleCreateRule,
      meta: {
        docs: {
          description: 'Disallow empty first line in files',
          category: 'Stylistic Issues',
          recommended: false,
        },
        fixable: 'code',
        schema: [],
        type: 'problem'
      }
    }
  }
}
