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
- Download & install [Docker](https://www.docker.com/) (Optional)

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

### Deploy and run using [Docker](https://www.docker.com/)

```sh
docker-compose up
```

### Walkthrough

<details>
    <summary>Directories</summary>

### <a href="./src">src</a>

- <a href="./src/components">components</a>
    - This folder breaks the application into small parts (components) which you can glue together in
      the <a href="./src/views">views</a> folder, e.g. The <a href="./src/components/authentication/LoginForm.vue">Login
      Form</a> is defined in
      the <a href="./src/components/authentication/LoginForm.vue">```/src/components/authentication/LoginForm.vue```</a>
      component and called in
      the <a href="./src/views/authentication/LoginView.vue">```/src/views/authentication/LoginView.vue```</a> view
      alongside the <a href="./src/components/containers/BgWhiteFlexibleContainer.vue">Container</a>. Same thing applies
      to the <a href="./src/components/book">Books</a> CRUD (Check the <a href="./src/components/book">Book components
      folder</a> and <a href="./src/views/book">Book views folder</a> for more).

- <a href="./src/views">views</a>
    - As mentioned above, the <a href="./src/views">views</a> folder is the glue that glues components together (It is
      recommended to keep the logic in either the <a href="./src/components">components</a>, <a href="./src/stores">
      stores</a> or <a href="./src/services">services</a>).

- <a href="./src/router">router</a>
    - This folder contains <a href="./src/router/index.ts">index.ts</a> which holds all the routes and anything related
      to the router (e.g. Middleware, Route guards, etc...).

- <a href="./src/stores">stores</a>
    - Since this application uses [Pinia](https://pinia.vuejs.org/) as the store it is an industry standard to keep all
      the store logic in a folder <a href="./src/stores">stores</a> directory.
    - This template only has one store, the <a href="./src/stores/auth/index.ts">auth</a> store.
    - It is possible to put all your components' logic in the store, but it is not necessary. It is recommended to only
      use the store for shared logic, in this template we only used the store to handle the JWT Token (saving the token
      to local storage and removing the token).
    - Why Pinia?
        * Since this project uses Vue 3 which comes with new features such
          as [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html), it's efficient to use the same
          syntax and coding style throughout the whole project for readability and productivity reasons. This is
          where [Pinia](https://pinia.vuejs.org/) shines it uses the new Composition API by default and supports
          Typescript seamlessly and without headaches unlike Vuex that needs some complicated configurations to support
          Typescript and doesn't support Composition API.

- <a href="./src/types">types</a>
    - This folder contains global custom Typescript types and interfaces.
    - In this template we used the folder to define interfaces that group data coming from the backend, (e.g. IBook,
      IUser and IBookResp). This way we can manipulate the data coming from the backend using axios, and we benefit from
      typescript's type system + we get auto-complete from our favorite IDE.

- <a href="./src/services">services</a>
    - This folder is just a utility folder that contains custom tools that you can use throughout the whole project.
    - In this template we only used this folder to register a new [Axios instance](https://axios-http.com/docs/instance)
      using the ```create()``` method we passed it only 1 parameter ```baseURL``` which acts like a prefix URL so that
      we don't repeat ourselves each time we send a request to the backend.

### <a href="./e2e">e2e</a>

- You can use this folder to run End-to-End tests of your application using
  the [Playwright](https://playwright.dev/) framework.

</details>

<details>
    <summary>Files</summary>

- <a href="./src/App.vue">App.vue</a>
    - This file contains the [Root Component](https://vuejs.org/guide/essentials/application.html#the-root-component).
      As the official Vue.js documentation
      says: ```Every app requires a "root component" that can contain other components
      as its children.```

- <a href="./src/main.ts">main.ts</a>
    - This file is the index file of the project, we register the root component as a new application instance using
      the ```createApp("./App.vue")``` method.
    - We also create a new Pinia instance using the ```use(createPinia())``` method.
    - We register the router using the ```use("./router")``` method.
    - And lastly we tell vue that the root component has the id ```app``` hence the ```mount("#app")``` method.
    - ```NOTE: We can do more things in this file (e.g. Registering Font Awesome icons, Importing css files globally, etc...)```

</details>
