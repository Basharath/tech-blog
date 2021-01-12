import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import about from '../images/about.png';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <div className="breadcrumb">
        <Link to="/">
          <i className="fas fa-home"></i>
        </Link>{' '}
        » About
      </div>
      <div className="heading">About us</div>
      <div className="container">
        <img src={about} alt="about-us" />
        <p>
          <span className="first">W</span>e ipsum dolor sit amet consectetur
          adipisicing elit. Blanditiis nihil saepe dolorem minima provident
          distinctio est! Dolor, quo dicta accusamus omnis ex non mollitia vitae
          optio, blanditiis corrupti tenetur? Aspernatur cumque maiores
          reiciendis, accusamus dolore numquam eius facilis quibusdam quam
          suscipit! Rerum, odio laboriosam nostrum illo veritatis facilis
          tempora libero ut! Ipsa dolore neque assumenda, eligendi commodi, ut
          voluptatum quae dolorem aperiam asperiores magnam tempore eos. Atque,
          placeat itaque magni assumenda illum, culpa officia dolorem porro ab
          ipsa molestiae perferendis. Distinctio id fugiat, repellat ducimus
          dolore commodi dicta cupiditate, minus delectus cum nobis hic esse
          beatae? In sint natus possimus!
        </p>

        <p>
          Ipsum, rem. At omnis vel laudantium perspiciatis dolorum vitae modi
          recusandae praesentium sunt id a, quaerat molestiae maxime odit
          sapiente ea tempore quo. Exercitationem optio, ad pariatur dignissimos
          deserunt maiores, illum quo, itaque quam incidunt quisquam id
          obcaecati natus nam. Ipsum aliquid fugiat totam? Obcaecati, deleniti
          et officia doloremque cumque nesciunt est mollitia facere molestias
          rerum eos eligendi iure earum saepe debitis asperiores impedit aliquid
          quaerat libero. Voluptate nulla fuga aliquam expedita voluptates
          praesentium nobis, molestias maiores consequuntur et veniam qui
          beatae, inventore asperiores officiis facere excepturi, magni fugit
          totam nisi harum doloremque eos commodi quam. Officiis nemo alias ad?
        </p>
      </div>
    </div>
  );
}
