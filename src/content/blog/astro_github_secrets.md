---
title: Astro with GitHub Secrets
slug: astro_github_secrets
date: 2023-07-28
description: Astro build with GitHub Actions & Secrets
tags: [github, astro, env, actions]
heroImg: ../../assets/kristina-flour-BcjdbyKWquw-unsplash.jpg
heroImgCredit: Photo by <a href="https://unsplash.com/@tinaflour?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kristina Flour</a> on <a href="https://unsplash.com/s/photos/secrets?license=free&utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
---

If you deploy your Astro project to GitHub Pages and want to use environment variable safely then this may be helpful. I needed to do just this for some enhancements and couldn't find any specific information to make it work so had me stumped for a while.

So before I remove my test code, I'll take a few screenshots and hopefully it can help someone!

## My Scenario

I am adding an API using server side generated code in Astro and wanted to pass it some credentials. In my development environment I use a `.env` file in the root and store it using a `SECRET_` key as per [Using environment variables 🚀 Astro Documentation](https://docs.astro.build/en/guides/environment-variables/).

```env
PUBLIC_TEST = "Hello World!"
SECRET_TEST = "Hello You!"
```

I can then access this using the `import.meta` value in my code.

```jsx
<p>Testing environment variables.</p>
<p>This should be a public value: {import.meta.env.PUBLIC_TEST}</p>
<p>This should be a private value: {import.meta.env.SECRET_TEST}</p>
```

Now what happens when I publish the to GitHub and it uses the Astro Action to build and update? Well as I have my `.env` file in the `.gitignore` file (as I should), nothing happens.

## GitHub Secrets

GitHub as a way to add encrypted variables which sounds like what I needed [Encrypted secrets - GitHub Docs](https://docs.github.com/en/actions/security-guides/encrypted-secrets).

Adding them is easy but how do I use them in my Astro code? The documentation is pretty good but didn't explain exactly how to do it.

## Action YAML Config

The key (pun?) is to set them up in the `deploy.yml` file. I am using the YAML file as detailed in the Astro docs [Deploy your Astro Site to GitHub Pages 🚀 Astro Documentation](https://docs.astro.build/en/guides/deploy/github/).

Just add an `env` key under `build` then map your internal variable names with the GitHub Secrets variable names.

```yaml
jobs:
  build:
    env:
      PUBLIC_TEST: ${{ secrets.PUBLIC_TEST }}
      SECRET_TEST: ${{ secrets.SECRET_TEST }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v3
      - name: Install, build, and upload your site
        uses: withastro/action@v0
```

Just push your changes to GitHub, wait for the rebuild and they are available!
