# ⚡️ Vue Starter Kit

A modern **Vue 3 + Vite** starter template — preconfigured for fast development, unit testing, and API mocking.

> Get started quickly with a clean, scalable setup that’s production-ready out of the box.

---

## 🚀 Features

- 🧩 **Vue 3 + Vite** for instant hot reloads and blazing fast builds
- 🧠 **TypeScript** support with `vue-tsc`
- 🧪 **Vitest** configured for unit testing
- 🎭 **Mock API setup** for isolated frontend testing
- 🧹 **ESLint + Prettier** for code quality and formatting
- 📦 Alias support (`@/`) for cleaner imports
- 🧰 Ready for expansion with Pinia, Vue Router, and more

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/hdjerry/vue-starter.git
cd vue-starter
```

### 2. Install dependencies

```bash
yarn
# or
npm install
```

### 3. Start the development server

```bash
yarn dev
# or
npm run dev
```

App will be running at [http://localhost:5173](http://localhost:5173)

---

## 🧪 Testing

### Run unit tests

```bash
yarn test:run
```

### Run tests in watch mode

```bash
yarn test
```

---

## 🧱 Project Structure

```
├── src/
│   ├── assets/        # Assets folder
│   ├── components/        # Vue components
│   ├── composables/       # Reusable logic
│   ├── mock/               # Mocked or real API modules
│   ├── router/            # Vue Router setup
│   ├── store/             # Pinia or Vuex store
│   ├── tests/             # unit tests
│   ├── view/             # Pages
│   └── App.vue
│             # Vitest unit tests
├── vite.config.ts         # Vite configuration (includes @ alias)
├── tsconfig.json
└── package.json
```

---

## 🧰 Linting & Formatting

```bash
yarn lint
yarn format
```

---

## 🧾 Recommended Setup

- **Editor:** [VS Code](https://code.visualstudio.com/)

- **Extensions:**
  - [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - Disable _Vetur_

- **Browser DevTools:**
  - [Vue.js Devtools for Chrome](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Vue.js Devtools for Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

---

## 🧑‍🏫 License

[MIT](./LICENSE) © [Jerry Hogan](https://github.com/hdjerry)

---

### 💬 Want to Contribute?

Feel free to open issues, submit pull requests, or fork the project.
Let’s make Vue starters simpler and more powerful for everyone ✨

```

---

### 🔧 Why this version is better
- Highlights what makes your starter kit **different** (tests + mocking)
- Gives **clear install and usage instructions**
- Looks professional with emojis, sections, and syntax highlighting
- Ready for sharing or open-source publication

---

Would you like me to tailor this further — for example:
- Add **badges** (build, test, license, etc.)
- Include **demo deploy instructions (Vercel/Netlify)**
- Or make it **npm create–ready** (so users can do `npx create-vue-starter`)?

That would make it even more polished depending on your goal (open-source showcase vs. internal use).
```
