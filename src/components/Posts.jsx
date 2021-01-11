import React from 'react';

import post1 from '../images/post1.png';

export default function Post() {
  const Card = ({ image, tag, author, date, title, excerpt }) => (
    <div className="card">
      <img src={image} alt="card-image" className="card-image" data-tag={tag} />
      <div className="card-body">
        <div className="author-time">
          <div className="user">
            <i className="fas fa-user"></i> {author}
          </div>
          <div className="date">
            <i className="far fa-clock"></i> {date}
          </div>
        </div>
        <div className="title">{title}</div>
        <div className="excerpt">{excerpt}</div>
        <button className="btn">Read more »</button>
      </div>
    </div>
  );
  return (
    <div className="posts">
      <Card
        image={post1}
        tag="Tech"
        author="John"
        date="December 4, 2020"
        title="Latest technology trends"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam, pariatur similique libero laborum minus, minima architecto quia ipsa, exercitationem explicabo! Eaque quam pariatur eius!"
      />
      <Card
        image={post1}
        tag="Tech"
        author="John"
        date="December 4, 2020"
        title="Latest technology trends"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam, pariatur similique libero laborum minus, minima architecto quia ipsa, exercitationem explicabo! Eaque quam pariatur eius!"
      />
      <Card
        image={post1}
        tag="Tech"
        author="John"
        date="December 4, 2020"
        title="Latest technology trends"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam, pariatur similique libero laborum minus, minima architecto quia ipsa, exercitationem explicabo! Eaque quam pariatur eius!"
      />
      <Card
        image={post1}
        tag="Tech"
        author="John"
        date="December 4, 2020"
        title="Latest technology trends"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam, pariatur similique libero laborum minus, minima architecto quia ipsa, exercitationem explicabo! Eaque quam pariatur eius!"
      />
      <Card
        image={post1}
        tag="Tech"
        author="John"
        date="December 4, 2020"
        title="Latest technology trends"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam, pariatur similique libero laborum minus, minima architecto quia ipsa, exercitationem explicabo! Eaque quam pariatur eius!"
      />
      <Card
        image={post1}
        tag="Tech"
        author="John"
        date="December 4, 2020"
        title="Latest technology trends"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam, pariatur similique libero laborum minus, minima architecto quia ipsa, exercitationem explicabo! Eaque quam pariatur eius!"
      />
    </div>
  );
}
