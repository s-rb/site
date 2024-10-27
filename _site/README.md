# My website, CV and portfolio statically generated pages using Jekyll and hosted with Github pages
- Jekyll theme - WhatATheme, modified
- Inspired by [Markdown-CV](https://github.com/elipapa/markdown-cv) - as a base for CV-to-pdf feature

## Deploy to GitHub Pages:
1. **Set up Action Permissions:**
    - Go to your repository's `Settings`, click `Actions` => `General`.
    - In the `Actions permissions` section, select `Allow all actions and reusable workflows`.
    - Enable the checkbox for `Allow actions created by GitHub` and for `Allow actions by Marketplace verified creators`, then click `Save`.

2. **Configure GitHub Pages:**
    - Go to the `Pages` section and select `GitHub Actions` from the `Source` menu under `Build and Deployment`.

3. **Configure Jekyll Workflow:**
    - Choose the `Jekyll workflow` and click `Configure`.
    - Set `ruby-version` to `3.2` and click `Commit changes`.

4. **Trigger Build and Deployment:**
    - Commit any change to your repository to trigger a new build and deployment action.
   
5. **Check your website:**
    - Go to https://{YOU_NAME}.github.io/{YOUR_REPO}/ for example https://s-rb.github.io/personal-website-whatatheme/
    - That's it! You are ready to use it!

### TODO:
- To add project pages on click (like blog posts)

### Credits :bulb:
* [Sneha Omer](http://sassyecoder.github.io/)
* [Harsh Trivedi](http://harsh98trivedi.github.io/)
* [thedevslot](https://github.com/thedevslot/WhatATheme)


### License
The contents of this repository are licensed under the [**GNU General Public License v2.0**](LICENSE)
