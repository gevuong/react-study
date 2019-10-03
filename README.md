# React Practice

Recommended Build Workflow for SPAs and MPAs

1. Use dependency management tool (ie. npm or yarn)
2. Use bundler (ie. webpack). Webpack also compiles before bundling. Will not be as optimal to make thousands of requests to separate files.
3. Use compiler for Next-Gen JavaScript (ie. Babel + Presets). Translation from modern features to workarounds for older browsers.
4. Use a development server (which is a web server) to test our app locally on our machine, to emulate our app running on a web server.

In React, you want to only render one root component. Anything otherwise is not what we want to do here.


Server Side Rendering

Nextjs Features

- server-side rendering


- the file system is the main API. This means every .js file becomes a route. React Router is not used. Nextjs will auto parse file structure and use its internal router.

- And along the way, it pre-renders the content of each file as pages.

- code splits