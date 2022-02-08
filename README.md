# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## How to push changes?

Apply your changes to the next branch. _Do not push to master directly!_
The PR Merge of next to master performs updates to the links in docusaurus which are essential for the website deployment!

Why?
Essentially, the provided documentation is copied from the TruBudget main repository.
When copying the documentation the documentation from the main repository, _all_ links in the documentation must be rewritten.
This is essential since Docosaurus does not allow links with a file suffix (i.e. ./developer/documentation.md) but GitHub requires them when displaying Markdownfils in the browser.

"But the pipeline does change the repository?"
Yes, but this is not necessarily an issue since the content is generated trough a PR on the master branch via the next branch.
