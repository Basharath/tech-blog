import React, { useEffect } from 'react';

import data from '../data';
import { Link } from 'react-router-dom';

export default function Post({ category, author, history }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Card = ({ image, author, date, title, excerpt, slug, category }) => (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={slug} onClick={() => history.push(slug)} />
        <span className="post-category">{category}</span>
      </div>

      <div className="card-body">
        <div className="author-time">
          <div
            className="user"
            onClick={() => history.push(author.toLowerCase())}
          >
            <i className="fas fa-user"></i> {author}
          </div>
          <div className="date">
            <i className="far fa-clock"></i> {date}
          </div>
        </div>
        <div className="title">
          <Link to={slug}>{title}</Link>
        </div>
        <div className="excerpt">{excerpt}</div>
        <button className="btn" onClick={() => history.push(slug)}>
          Read more »
        </button>
      </div>
    </div>
  );
  return (
    <>
      <div className="posts">
        <div className="heading">
          {category && category.slice(0, 1).toUpperCase() + category.slice(1)}
          {author && 'Author: ' + author}
        </div>
        {data
          .filter((i) => {
            if (author) return i.author.toLowerCase() === author.toLowerCase();
            else if (category)
              return i.category.toLowerCase() === category.toLowerCase();
            else return true;
          })
          .map((d) => (
            <Card
              image={d.image}
              tag={d.tag}
              author={d.author}
              date={d.date}
              title={d.title}
              excerpt={d.excerpt}
              slug={d.slug}
              category={d.category}
              key={d.id}
            />
          ))}
      </div>
    </>
  );
}
