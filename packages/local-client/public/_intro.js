[{"content":"# jbook-notes\n\nYour All-in-One JavaScript sandbox and notepad.\n\n\n","type":"text","id":"pnpb4"},{"content":"const greeting = \"Hello, world 👋\"\n\nshow(greeting);\n","type":"code","id":"79pzu"},{"content":"## Meet our powerful `Code-Editor`\n\nA feature-rich coding environment, designed to meet the demands of a modern javascript developer.\n","type":"text","id":"kk52p"},{"content":"### Try this:\n\nChange the value of `myFavAnimal` in the code cell below and watch the preview window update automatically.\n","type":"text","id":"e4knh"},{"content":"/* This is a code cell */\n\n// Write ANY valid javascript code and it will automatically execute\nlet myFavAnimal = 'pig';\n\n// Use the show() function to display the result to the preview window 👉\nshow(myFavAnimal);\n","type":"code","id":"rlbvv"},{"content":"\n## Scope\n\nCode cells share a scope with any cells above them in your notebook. This enables you to write notes/documentation in-between cells (like this).","type":"text","id":"cdgex"},{"content":"/* Scope */\n\n// We still have access to 'myFavAnimal' here, even from a different code-cell\nconst phrase = \"My favorite animal is: \" + myFavAnimal;\n\nshow(phrase);\n","type":"code","id":"2wi4a"},{"content":"### Try this:\n\nThe upcoming section will be more fun if we have a larger dataset....\n\nAdd your `favAnimal` to the `animals` array in the cell below.\n(Alternatively, leave it as-is and we will assume dogs are your favorite 🐶).","type":"text","id":"d8qlw"},{"content":"/* We're gonna need a bigger dataset */\n\nconst animals = [\n  // TODO: uncomment the line below, then replace the \"❓\" properties to fit your favorite animal\n  // { name: myFavAnimal, emoji: '❓', says: '❓' },\n  { name: 'dog', emoji: '🐶', says: 'woof' },\n  { name: 'cat', emoji: '🐱', says: 'meow' },\n  { name: 'mouse', emoji: '🐭', says: 'squeak' },\n  { name: 'duck', emoji: '🦆', says: 'quack' },\n];\n\nmyFavAnimal = animals[0];\n\nshow(myFavAnimal);","type":"code","id":"exjcc"},{"content":"## [React](https://react.dev/) comes built-in\nReact is a very popular javascript framework. We decided to build it into jbook-notes for your convinience (no setup required).\n\nNote: Behind the scenes, your react-code is being compiled with every keystroke using [esbuild](http://esbuild.github.io/) and [Wasm](https://webassembly.org/).","type":"text","id":"46eyu"},{"content":"/* Creating a React component */\n\n// Here we define a standard React Functional Component, called Animal\nconst Animal = ({ name, emoji, says }) => {  \n  return (\n    <div style={{ fontSize: '30px', padding: \"4px 8px\"}}>\n      <h3>{emoji}</h3>\n      <span>{`${name} says \"${says}\"`}</span>\n    </div>\n  );\n};\n\n// Again, we can display our new component using the \"show\" function\nshow(<Animal {...myFavAnimal} />);\n","type":"code","id":"gnilg"},{"content":"## Third-Party Libraries\n\njbook-notes offers support for any other third-party library available on [npm](https://www.npmjs.com/). Our bundler detects any import statements in your code and downloads the dependencies into local-storage automatically. This means you can use all of your favorite javascript libraries such as [lodash](https://lodash.com/), [axios](https://axios-http.com/docs/intro), [bootstrap](https://getbootstrap.com/)  etc... with no additional setup!","type":"text","id":"fi55t"},{"content":"### Try this:\n\nLet's finish up by adding lodash and bootstrap to our project!\n\n1. Uncomment out **lines 6 and 7**, where these libraries are imported\n2. Add some bootstrap classes to the `<li>` elements containing our animals on **line 17**\n3. Use the `shuffle` method provided by lodash in our `handleShuffle` function on **line 34**","type":"text","id":"yw6cn"},{"content":"/* Styles and interactivity */\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { useState } from 'react';\n// TODO: uncomment the two import statements below\n// import 'bootstrap/dist/css/bootstrap.min.css';\n// import _ from 'lodash';\n\nconst AnimalsList = ({ animals }) => {\n  return (\n    <ul>\n      {animals.map((animal, idx) => (\n        <li\n          key={idx}\n          // TODO: add some bootstrap classes to these list items...\n          // className=\"card my-1 p-2\"\n          style={{\n            backgroundColor:\n              animal.name === myFavAnimal.name ? 'lightskyblue' : '',\n          }}\n        >\n          <Animal {...animal} />\n        </li>\n      ))}\n    </ul>\n  );\n};\n\nconst App = () => {\n  const [renderedAnimals, setRenderedAnimals] = useState(animals);\n\n  const handleShuffle = () => {\n    // TODO: add some shuffling-logic to this function using the \"shuffle\" function provided by lodash...\n    // setRenderedAnimals((a) => _.shuffle(a));\n  };\n\n  return (\n    <section class=\"d-flex flex-column align-items-center text-center\">\n      <div class=\"d-flex gap-2 justify-content-center py-5\">\n        <button\n          onClick={handleShuffle}\n          class=\"btn btn-primary rounded-pill px-3\"\n          type=\"button\"\n        >\n          Shuffle\n        </button>\n      </div>\n      <AnimalsList animals={renderedAnimals} />\n    </section>\n  );\n};\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);","type":"code","id":"sshd5"}]