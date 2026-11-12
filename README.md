# Atul Kumar – Portfolio

A responsive portfolio built with plain HTML, CSS and JavaScript. No build step, so it works directly on GitHub Pages.

## Folder structure

```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── images/          <- put profile.jpg and project1.jpg here
│   └── documents/resume.pdf
└── README.md
```

## 1. Add your photo (photo space is ready)

Save your portrait as `assets/images/profile.jpg` (about 800 x 1000 px, any JPG).
Until the file exists, the site shows your initials "AK" in the photo frame.

## 2. Add a project image (optional)

Save a screenshot as `assets/images/project1.jpg`. Without it, a plain green block is shown.

## 3. Resume

`assets/documents/resume.pdf` is your CV. To replace it, keep the same file name.
Your CV currently contains your date of birth, father's name and marital status. Because GitHub Pages is public, consider saving a shorter version without these before you upload.

## 4. Edit content

Open `index.html` and search for `EDIT HERE` or `TODO`:
- Add your **contribution** to the AI Support project (see the TODO in the Projects section).
- Confirm the **LMG** skill and the **certificate issuer** (see TODO comments).
- Verify the **school years** in Education.
- To add another project, certificate or qualification, copy one existing block and change the text.
- To change colours or fonts, edit the `:root` blocks at the top of `css/style.css`.
- To hide your home address, delete the `hero-loc` paragraph in the Home section.

## 5. Publish on GitHub Pages

1. Create a new repository on GitHub (for example `portfolio`).
2. Upload everything inside this folder (index.html, css, js, assets, README.md, .nojekyll) to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/ (root)**, then **Save**.
5. After a minute, your site is live at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

Tip: if you name the repository `YOUR-USERNAME.github.io`, the site opens at `https://YOUR-USERNAME.github.io/`.
