# Portfolio Site

My portfolio and blog site built with **Next.js 16**, **Tailwind CSS**, and **Contentlayer**.  

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fdboatengg%2Fdicksonboateng.com)

##  dicksonboateng.com

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Deployment**: [Vercel](https://vercel.com)
-   **Content**: [ContentLayer](https://contentlayer.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Running Locally

```bash
$ git clone https://github.com/dboatengg/portfolio-site.git
$ cd portfolio-site
$ npm install
$ npm run dev
```

## Writing Articles

The optional writing workspace is available at `/write`. It edits the same MDX files stored in `content/blog`, so direct file editing remains fully supported.

To protect the workspace, configure one of these server-only environment variables with your GitHub account:

```bash
ADMIN_GITHUB_USERNAME=your-github-username
# or
ADMIN_GITHUB_ID=your-github-user-id
```

After signing in with GitHub, open `/write` to edit an existing article or create a new one. The signed-in GitHub username or numeric ID must match the configured admin variable. New articles are drafts by default and remain hidden until `Published` is checked and the site is deployed. Saving writes directly to the matching `.mdx` file. The public page's publish date remains the frontmatter `date`; its automatic `Last updated` date comes from the file modification time.

Use `Preview` to save the current draft and open a private rendered preview at `/write/preview/[slug]`. The preview requires the admin session and is marked `noindex`.

The current editor is designed for local development. Saving on a deployed server does not commit changes to Git, sync them back to your computer, or trigger a deployment. For production editing, the next step would be connecting the editor to the GitHub API so saves create commits and Vercel deploys them; until then, edit locally, preview locally, check `Published`, and deploy through Git.

## Cloning / Forking

Please review the [license](/LICENSE.md) and remove all of my personal information (resume, blog posts, images, etc.).