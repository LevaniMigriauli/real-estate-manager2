import { ESLint } from 'eslint'

const eslint = new ESLint({
  overrideConfig: {
    linterOptions: {
      reportUnusedDisableDirectives: true // This is the API-based configuration
    }
  }
});

(async function main () {
  try {
    // Adjusted pattern to include .ts and .tsx files
    const results = await eslint.lintFiles(['src/**/*.{ts,tsx}'])

    const formatter = await eslint.loadFormatter('stylish')
    const resultText = formatter.format(results)

    console.log(resultText)
  } catch (error) {
    console.error(error)
  }
})()
