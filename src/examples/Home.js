import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h3>About</h3>
    <p>
      This is a small collection of advanced react patterns put into practice. I decided to maintain a collection of
      patterns/best practices for my own study
    </p>
    <p>
      Most of these components are created based on examples/articles/videos/etc. that show how to use some react
      patterns. I simply adopted them and customized them for my own study
    </p>
    <p>I have attached links to the relevant documents that the components are based on in the component source code.</p>

    <h3>Examples</h3>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/compoundcomponent">Compound Component</Link>
      </li>
      <li>
        <Link to="/compoundcomponentcontext">Compound Component With Context</Link>
      </li>
    </ul>
  </div>
);

export default Home;
