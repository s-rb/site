# My website, CV and portfolio statically generated pages using Jekyll and hosted with Github pages
- Jekyll theme - WhatATheme, modified
- Inspired by [Markdown-CV](https://github.com/elipapa/markdown-cv) - as a base for CV-to-pdf feature

---
## How to edit:
- Edit CV data: [_data/cv_data.yml](_data/cv_data.yml)
- Remove old cv.pdf's here: [assets/files/cv.pdf](assets/files/cv.pdf) and [assets/files/Roman Surkoff_CV.pdf](assets/files/Roman Surkoff_CV.pdf)
- Run in terminal `jekyll serve`
- Go to website in browser `http://127.0.0.1:4000`
- Go to CV page `http://127.0.0.1:4000/cv`
- Click CV.pdf button and print pdf cv document
- Copy it to [assets/files/cv.pdf](assets/files/cv.pdf) and [assets/files/Roman Surkoff_CV.pdf](assets/files/Roman Surkoff_CV.pdf)
- Commit changes

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
   - Go to https://{YOUR_NAME}.github.io/{YOUR_REPO}/ for example https://s-rb.github.io/personal-website-whatatheme/
   - That's it! You are ready to use it!

### TODO:
- To add project pages on click (like blog posts)

### Credits :bulb:
* [Sneha Omer](http://sassyecoder.github.io/)
* [Harsh Trivedi](http://harsh98trivedi.github.io/)
* [thedevslot](https://github.com/thedevslot/WhatATheme)


### License
The contents of this repository are licensed under the [**GNU General Public License v2.0**](LICENSE)
