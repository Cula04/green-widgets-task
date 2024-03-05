# Green Widgets Task

## Application Description

### Functionality:

- The application allows users to view their product widgets.
- Users can customize widgets by changing their colors, active state, and linkage to their public profile.
- Only one widget can be active at a time.

### Implementation:

- The front-end service manages product widgets, displaying them and allowing users to update their settings.
- Each product widget has immutable properties (id, type, amount, action) and mutable settings (color, active state, linked state).
- Customization of widgets is handled on the client side using client-side state management (Vuex).

### Components Summary:

#### App.vue

- Displays product widgets in a grid layout.
- Fetches initial widget data from the Vuex store using the `fetchWidgetsAction`.
- Uses the `ProductWidget` component to render each widget.

#### ProductWidget.vue

- Renders individual product widgets with customizable settings.
- Includes components for widget header, checkbox, color selection, and toggle.
- Utilizes Vuex store to manage widget data and state.
- Retrieves widget data from the store based on the provided widget ID.

### Vuex Widget Store:

#### Description

The Vuex Widget Store is used to manage widget state as client-side state management. It handles fetching, updating, and mutating widget data through defined actions and mutations.

- The store communicates with a backend API to fetch widget data.
- Mutations are used to update state based on fetched data or user interactions.
- Actions are dispatched to perform asynchronous tasks like data fetching or state updating.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## StoryBook Setup

```sh
npm run storybook
```

## Pre-requirements (if needed):

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Install Node.js and npm:

- Download and install Node.js from the [official website](https://nodejs.org/en/download/)
- npm (Node Package Manager) comes bundled with Node.js, so you don't need to install it separately.
