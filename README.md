# Vue 3 (Vite, Typescript, Pinia) Template

This template should help get you started developing with Vue 3 and Typescript in Vite.

[//]: # (## Recommended IDE Setup)

[//]: # ()

[//]: # ([VSCode]&#40;https://code.visualstudio.com/&#41; + [Volar]&#40;https://marketplace.visualstudio.com/items?itemName=Vue.volar&#41; &#40;and)

[//]: # (disable)

[//]: # (Vetur&#41; + [TypeScript Vue Plugin &#40;Volar&#41;]&#40;https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin&#41;.)

[//]: # ()

[//]: # (## Type Support for `.vue` Imports in TS)

[//]: # ()

[//]: # (TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for)

[//]: # (type checking. In editors, we)

[//]: # (need [TypeScript Vue Plugin &#40;Volar&#41;]&#40;https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin&#41;)

[//]: # (to make the TypeScript language service aware of `.vue` types.)

[//]: # ()

[//]: # (If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented)

[//]: # (a [Take Over Mode]&#40;https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669&#41; that is more)

[//]: # (performant. You can enable it by the following steps:)

[//]: # ()

[//]: # (1. Disable the built-in TypeScript Extension)

[//]: # (    1&#41; Run `Extensions: Show Built-in Extensions` from VSCode's command palette)

[//]: # (    2&#41; Find `TypeScript and JavaScript Language Features`, right click and select `Disable &#40;Workspace&#41;`)

[//]: # (2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.)

[//]: # ()

[//]: # (## Customize configuration)

[//]: # ()

[//]: # (See [Vite Configuration Reference]&#40;https://vitejs.dev/config/&#41;.)

## Prerequisites

- Download & install [NodeJS](https://nodejs.org).
- Install [Yarn](https://yarnpkg.com/getting-started/install).
- Install Vue 3: ```npm i -g @vue/cli```

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
yarn build

# Runs the end-to-end tests
yarn test:e2e
# Runs the tests only on Chromium
yarn test:e2e --project=chromium
# Runs the tests of a specific file
yarn test:e2e tests/example.spec.ts
# Runs the tests in debug mode
yarn test:e2e --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

### Walkthrough

<details>

<summary>Directories</summary>
### <a href="./src">src</a><br>
- sss
</details>

