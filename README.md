# Autosuggest test

This is a test made with [Svelte](https://svelte.dev). It lives at https://github.com/sveltejs/template.

*Disclaimer*:
Currently, there's just one Jest test. After I had developed the proyect and I started looking into the Unit testing, I found out that it's not possible to mock events in contenteditable elements. This limitation could be solved changing this to a textarea or an input, for example. I left it like that to avoid extending the test development time and because I thought it was more important to have the jest environment ready.
Similarly, there's a thing with the tag adding functionality (sometimes it needs double pressing the ENTER key) that I left like that I think shouldn't be too complicated to solve. 
To create a new project type in terminal:

```bash
git clone git@github.com:miguelRivero/autosuggest-test.git
cd autosuggest-test
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. 

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

