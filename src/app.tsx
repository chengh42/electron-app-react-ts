import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Routes,
  Route,
  Link,
  Outlet,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="page1">Page 1</Link> |{" "}
        <Link to="page2">Page 2</Link>
      </nav>
      <div className="content">
        <img
          src='./assets/images/inky-wow-1.png'
          width={200}
          height={'auto'}
        />
        <p>
          Illustration by <a href="https://icons8.com/illustrations/author/5fe0d309487a404a84cd3917">Alena Kosareva</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
        </p>
        <p><a target="_blank" href="https://icons8.com/icon/ukRbaAOR2DVX/volunteering">Volunteering</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
        <Outlet />
      </div>
    </div>
  );
}

function Page1() {
  return <h1>Page 1</h1>;
}

function Page2() {
  return <h1>Page 2</h1>;
}

function render() {
  ReactDOM.render(<App />, document.getElementById('app'));
}

render();