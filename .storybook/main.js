module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/components/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-knobs/register",
  ],
  "framework": "@storybook/react"
}