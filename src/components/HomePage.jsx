import React from 'react';
import Posts from './Posts';
import Sidebar from './Sidebar';
import SinglePost from './SinglePost';
import { Redirect, Route, Switch } from 'react-router-dom';

import data, { categories, authors } from '../data';
import Contact from './Contact';
import About from './About';

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="block-1">
        <Switch>
          {data.map((d, idx) => (
            <Route
              path={'/' + d.slug}
              key={idx}
              render={(props) => <SinglePost {...props} post={d} />}
            />
          ))}

          {categories.map((c, idx) => {
            return (
              <Route
                path={'/' + c}
                key={idx}
                render={(props) => <Posts {...props} category={c} />}
              />
            );
          })}

          {authors.map((a, idx) => {
            return (
              <Route
                path={'/' + a}
                key={idx}
                render={(props) => <Posts {...props} author={a} />}
              />
            );
          })}

          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Redirect from="/home" to="/" exact />
          <Route path="/" component={Posts} />
        </Switch>
      </div>

      <div className="block-2">
        <Sidebar />
      </div>
    </div>
  );
}
