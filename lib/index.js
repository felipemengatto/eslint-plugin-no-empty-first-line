module.exports = {
  rules: {
    'no-empty-first-line': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Disallow empty first line in files',
          category: 'Stylistic Issues',
          recommended: false,
        },
        schema: [],
      },
      create(context) {
        return {
          Program(node) {
            const sourceCode = context.getSourceCode();
            const lines = sourceCode.getText().split('\n');
            if (lines[0].trim() === '') {
              context.report({
                node,
                message: 'Arquivo não pode começar com linha em branco.',
              });
            }
          },
        };
      },
    },
  },
};
