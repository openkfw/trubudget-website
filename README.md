# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

Following command is used to install the required packages.

```console
yarn install
```

## Local Development

Following command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```console
npm start
```

## Build

Following command generates static content into the `build` directory and can be served using any static contents hosting service.

```console
npm build
```

## Deployment

Docusaurus provides a `docusaurus deploy` command that helps deploying the site from the source branch to the deployment branch in one command: clone, build, and commit.

### Configuration

The configuration settings can be set in `docusaurus.config.js`. Important for deployment are following parameters:

- organizationName: "openkfw"
- projectName: "trubudget-website"

The deploymentBranch can be only be set via environment variable in version `2.0.0-beta.3` (defaults to gh-pages):

```
DEPLOYMENT_BRANCH="gh-pages"
```

Detailed information can be found on the [official docusaurus documentation](6127899cbdc82400074cdc97--docusaurus-2.netlify.app/docs/2.0.0-beta.3/deployment#environment-settings).

`IMPORTANT`
If the provided documentation is copied from a github repository, _all_ links in the documentation must be rewritten.
This is essential since Docosaurus does not allow links with a file suffix (i.e. ./developer/documentation.md) but GitHub requires them when displaying Markdownfils in the browser.
In our case we are using the documentation of the [TruBudget main repository](https://github.com/openkfw/TruBudget/tree/master/docs).
Our `solution` is the `prepareRelease.js` script which rewrites all links. It is used in our gh-release action in the [documentation workflow](./.github/workflows/documentation.yml).

### Deploy to Github

To actually deploy the website you first need to set your GIT_USER and set USE_SSH true to authenticate you deploy step.
If you are using GitHub pages for hosting, following command is a convenient way to build the website and push to the `gh-pages` branch:

```
GIT_USER=<Your GitHub username> USE_SSH=true npm deploy
```

### Protected branches

`master`: Only approved PR-merges can modify the master branch. Links are not rewritten for docusaurus.
`gh-pages`: Only our technical user can modify the gh-pages branch. This user is used by the [gh-release github action](./.github/workflows/documentation.yml).
