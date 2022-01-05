# Portfolio Website

![image](https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white) ![image](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white) ![image](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)

A minimalist single-page portfolio website developed using [Gatsby](https://www.gatsbyjs.com/) & [Material-UI](https://material-ui.com/).

**View Deployment:** [Avi Mishra's portfolio](https://avimishra18.github.io/)

## Features

- ⚡️ Static Website
- 📱 Mobile Responsive Design
- 🎨 Dark/Light Mode

## Usage

### Development

```sh
yarn // Install NPM packages
yarn dev // Start development server
```

### Deployment (Github Pages)

In the Github project settings, set the default branch from which the site is currently being built in this case it is `gh-pages`. Then run this script:

```sh
yarn deploy
```

Visit [Github Pages](https://pages.github.com/) & [gh-pages](https://www.npmjs.com/package/gh-pages).

### Personalize Portfolio

#### Home Section

Update personal information such as name, email & IDs in `basic_information.json`

#### Projects Section

1. `projects_information.json`: Contains an array of objects, where each object corresponds to an individual project.

   ```json
   [
     {
       "name": "Project A",
       "img_src": "abc.png", // Display Image ("src/assets/abc.png")
       "stacks": ["react", "node"], // Stack Badges (stackPresets.js)
       "description": "Lorem ipsum...",
       "url": "<deployment-url>", // URL of project
       "github_url": "<github-url>" // URL of Github Repo
     }
   ]
   ```

1. `stackPresets.js`: Create a new stack presets by adding label & SVG. You can find SVGs from [@fortawesome](https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=brands) and [@material-ui/icons](https://mui.com/components/material-icons/).

1. `src/assets/<img_src>`: Add the display image, filename should match the `image_src` specified in `projects_information.json`.

#### About Section

To update the contact form, visit [Formspree](https://formspree.io/) or any similar API and update it in `basic_information.json`.

```json
"contact_form_url": "<api-endpoint>",
```

#### Path of all Customizable Files :-

```
├── src
│   ├── assets
│   │   ├── IMAGE ASSETS
│   ├── content
│   │   ├── basic_information.json
│   │   ├── projects_information.json
│   │   ├── stackPresets.js
│   │
├── static
│   ├── favicon.ico
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` file for more information.
