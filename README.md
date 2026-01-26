https://github.com/bcms/starters/assets/15079459/ceed3ea4-c6c6-40f7-9e18-746874015120

# The IEEE International Symposium on Integrated Circuits and Systems (ISICAS 2026) 

## BCMS Conference for Astro.js

This is an Astro.js starter kit for BCMS, a headless CMS. It's minimal but solid, with a clean codebase that hooks directly into your BCMS project, ready to extend and scale as needed.

## Getting Started

First, run the development server:

```bash
npm run dev
```

You can also run the Astro template easily using Wasmer (check out the [install guide](https://docs.wasmer.io/install)):

```bash
npm run build
wasmer run . -- --port 3000
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Wasmer Edge

The easiest way to deploy your Astro App is to use the [Wasmer Edge](https://wasmer.io/products/edge).

Live example: https://astro-wasmer-starter.wasmer.app/

First, you'll need to run `npm run build`, and then, to deploy to Wasmer Edge:

```bash
wasmer deploy
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

---

### Useful links:

-   [BCMS website](https://thebcms.com/)
-   [BCMS documentation](https://thebcms.com/docs/)
-   [BCMS and Astro integration](https://thebcms.com/docs/integrations/astro)
-   [All BCMS starters](https://thebcms.com/starters)
-   [Join our Discord](https://discord.com/invite/SYBY89ccaR)
