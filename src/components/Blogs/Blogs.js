import React from "react";

const Blogs = () => {
  return (
    <div className="mt-16 p-3">
      <div className=" p-3  m-3 rounded border">
        <h1 className="text-3xl mb-2">What is purpse of react router ?</h1>
        <p>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL. Let us create a simple application to React to
          understand how the React Router works. The application will contain
          three components: home component, about a component, and contact
          component. We will use React Router to navigate between these
          components.
        </p>
      </div>
      <div className=" p-3 m-3 rounded border">
        <h1 className="text-3xl mb-2">
          How does container contact API Works ?
        </h1>
        <p>
          React.createContext() is all you need. It returns a consumer and a
          provider. Provider is a component that as it's names suggests provides
          the state to its children. It will hold the "store" and be the parent
          of all the components that might need that store. Consumer as it so
          happens is a component that consumes and uses the state. More
          information can be found on React's
        </p>
      </div>
      <div className=" p-3 rounded border">
        <h1 className="text-3xl mb-2">What is useRef in react ?</h1>
        <p>
          Ref means just reference, so it can be a reference to anything (DOM
          node, Javascript value, etc). The useRef hook returns a mutable object
          which doesn’t re-render the component when it’s changed. Think it like
          useState, but unlike useState, doesn’t trigger re-render of the
          component. The object that useRef returns have a current property that
          can hold any modifiable value.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
