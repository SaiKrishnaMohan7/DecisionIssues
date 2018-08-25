# Notes

- *JS _class declarations_ are _not hoisted_, _function declarations_ are*
  - Class expression is another way of declaring classes. The name of a class can be accessed on the class's _name_ property
  and not the instances'.

      ```javascript
        //unnamed

          let Rectangle = class {
            constructor(height, width) {
              this.height = height;
              this.width = width;
            }
          };
          console.log(Rectangle.name);
          //output: "Rectangle"

          //named

          let Rectangle = class Rectangle2 {
            constructor(height, width) {
              this.height = height;
              this.width = width;
            }
          };
          console.log(Rectangle.name);
          //output: "Rectangle2"
      ```
  - [More on Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

  - _Static Methods_ - *static* keyword, can be called without instantiating classes and can't accessed through instance
    - best used for util functions of a class like [so](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Static_methods)

- A CSS reset makes sure all browsers start form the same place, style wise. every browser has its own default styles.

## Babel,React

- src/app.js

  - This file will contain JSX and stuff that babel will use to generate a browser compatible version(JavaScript XML)
  - The generated file will be in `public/scripts/app.js` since that is where we want the client side to have the changes we need
  - What Babel will do:

  ```javascript
  let template = <p>This is something</p>;
  let appRoot = document.getElementById("app");
  ```

  ```javascript
  //The above doesn't work, so we need to use Babel to use JSX. When using babel, template gets translated to:
  var template = React.createElement("p", null, "This is something");
  ```

  ```javascript
  let template = <p id="shalala">This is something</p>;
  let template = React.createElement(
    "p",
    { id: "shalala" },
    "This is something"
  );
  ```

- Babel CLI `babel src/app.js --out-file=public/scripts/app.js --presets=react,env --watch`

- `undefined, null, boolean` are ingnored by JSX, nothing will be rendered

- Conditions can be used to render elements as well `{age > 18 ? <p>lalalal<p>}`

- _class_ is _className_ in JSX, class is reserved

- JSX doesn't have built-in data binding, React Componnets help with that

- To see the REACT rerendering just the changed component, check dev tools, the changed component will flash and get re-rendered

- JS _&&_ operator, if the first val is truthy, that won't be used and second val used, if first value is falsy, that value will be used!

  - This concept is used by JSX for conditional rendering

- The _state_ of a React Component is an object, when changed, re-renders a Component

- Calls to _setState_ are async!

- React is a declatrative UI framework written in JS.

- `React.Component` subclass

  - Tells react what needs to be rendered.
    ex:
    ```javascript
    class ToDo extends React.Component{
      render(
        <div className="todo-list">
          <h1>Todo List for {this.props.name}</h1>
          <ul>
            <li>Tel</li>
            <li>Danda</li>
            <li>Kaante</li>
          </ul>
      </div>
      );
    }
    ```
  - Above, _ToDo_ is _React component type_ or _React component class_. It takes _props_ as parameters and returns _views_ in a particular hierarchy via _render_ method.

  - _render_ method returns _React Elements_ which React then takes and throws it on the screen to display. React Elements are written in JSX, which calls `React.createElement(<elementType>, <listOfProps>, <dataToBeRendered>)` ex: `React.createElement('h1', ,'Todo List For', props.name)`

  - Any JS expression can be used within `{}` in JSX. Each React Element is JS object, they can be assigned to a variable or passed around.

  - There are two types of data in React, props and states. _States_ are _private_, can be controlled by components while _props_ are _external_ and can't be controlled by components.

  - Each component has its own state and can change it accordingly while props are hierarchical, they are passed up or down or between components and can't be changed by components directly.

  - Props can be used to pass state around amongst child components and from parents to child components.

  - When trying to manage states amogst children, such that, multiple component children tlak to each other, its better to _Lift State Upwards into the parent_. This makes sure that the children and parent are always in sync.

  - When a child component gets its state change directives from its parent, its called a controlled component.

  - Instead of extending the React.Component class, if a component has just the render method, it can be replaced with a function the returns that component. This is called _functional component_

  - React uses the concept of DOM Virtaulization. Instead of redering the whole DOM, only the part of the DOM that has changed is rendered. The judgement is call is made by a diff algo.

  - React components mount to an element.

  - Render method is a _spec_, the only required onw for creating a component.

  - Lifecycle Methods:

    - _componentWillMount_ - invoked once, before rendering, on both client and server
    - _componentDidMount_ - invoked once, after rendering, only client
    - _shouldComponentUpdate_ - official doc, bad on performance
    - _componentWillUnmount_ - invoked before unmounting component

  - Specs:
    - _getInitialState_ - returns init state
    - _getDefaultProps_ - default props if no props supplied
    - _mixins_ - used to extend component fucntionality

- Data (Props) flow in React is unidirectional, from Parent to Child
  - Child components will get pros from the parent but they will have their own state
  - State management should be done by parent, children should only trigger (report) state change via _setState_
    - Basically any mutation to global state object should be handled by the parent

## Webpack

- Single `<script>` tag instead of multiple. Will contain app code and dependecy code.
- Solves the issue of clouding global object
- Helps with splitting front-end code into modules
- Webpack restart everytime change to config
- For letting webpack know that it has to use babel it has to be told that via the module object in the rules array as an object. See webpack.config.js for idea.
- Same is for styles. The `use` array can be used to specify multiple loaders
  
### Source Maps

- Source maps help with debugging. Point to the exact file where the issue is instead of the minified file.

### Webpack dev-server

- The bundle that gets served up isn't the bundle.js file. The dev-server doesn't write the physical bundle.js file (slower), it does it all in memory so dev is responsive.

#### Class Properties

- _transform-class-properties_, [source and examples](http://babeljs.io/docs/en/babel-plugin-transform-class-properties/), is a babel plugin that allows us to add properties on the class. in short, arrow functions as opposed to class methods, with `this` bound to the class!!!

- Why we loose `this` binding:
  So, after some digging around, I found that with ES6, the functions defined will, by default, have `this` as undefined. This is to prevent folks, like me, from mutating globals (JavaScript is forgiving, plus I have done that before). The `class` keyword is syntactic sugar, enforces the use of `new` while spawning children (subclasses) because it used to be possible to mutate the global object in previous versions. However, in ES6, when the class gets initialized `this` will be bound to that instance via the constructor. One thing to notice is the file that babel outputs to, it runs in strict mode that prevents `this` referring to the global (window) object, thereby, confirming my suspicion. [strict mode, `this` undefined, stackoverflow](https://stackoverflow.com/questions/9822561/why-is-this-in-an-anonymous-function-undefined-when-using-strict).

  Now, in context of React, `handleRemoveAll` is  a function that is that is the part of the sub class and not of the parent, hence, `this` is undefined. The `render` function is part of the parent class, hence, it knows whom `this` refers to because our subclass will be instantiated via the parents' constructor. On overloading the constructor we ensure that `this` is bound to the subclass that we have created.

  Also, classes or the code inside class syntactic boundary is executed in strict mode always and in strict mode functions will have `this` undefined