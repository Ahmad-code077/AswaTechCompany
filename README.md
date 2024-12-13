# AswaTech Company Project

## Overview
This repository contains the source code for an IT company's website. The goal of this project is to build a modern, responsive website to represent the company's services, projects, and team. The website follows clean coding principles and modular development practices to ensure scalability and maintainability.

## Collaboration Guidelines

### Branching and Pull Requests (PR)
- **Main Branch**: The `main` branch is **protected**. Direct commits to this branch are **not allowed**.
- **Working on Features**: Each developer should work on their own **feature branch**. 
- **Pull Requests**: Once a feature or fix is ready, submit a **Pull Request (PR)** to the `main` branch. 
- **Code Reviews**: All PRs must be reviewed by at least one team member. The PR will not be merged until it has been approved by a reviewer.
- **Conflict Resolution**: If there are conflicts, resolve them before submitting a PR.

### Project Structure and Coding Guidelines
- **Component Structure**: 
  - Each page's components should be placed in a separate folder under the `components` directory. For example, if you're working on the homepage, create a `HomeComp` folder under `components/`. 
  - Inside this folder, create all relevant components and export them from an `index.js` (or similar file) for easy importing. 
  - Once components are created, they should be imported and used in the respective page, such as the homepage, in order to keep the code modular and organized.

### Image Optimization
To ensure fast loading times and better performance, images in this project should be optimized using the following methods:
- **Image Compression**: Use image compressors like [TinyPNG](https://tinypng.com/) or [ImageOptim](https://imageoptim.com/) to reduce the size of images without losing quality.
- **Lazy Loading**: Implement lazy loading for images using the `loading="lazy"` attribute in `img` tags or use a JavaScript library to load images only when they are visible in the viewport, improving the initial page load time.
- **Responsive Images**: Use `srcset` for responsive images to load different image sizes based on the user's screen size and resolution.

These practices will help keep the website fast and responsive for all users.
