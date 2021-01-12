import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

export default function SinglePost({ post }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="post">
      <div className="breadcrumb">
        <Link to="/">
          <i className="fas fa-home"></i>
        </Link>{' '}
        » <Link to={post.category.toLowerCase()}>{post.category}</Link> »{' '}
        {post.title}
      </div>
      <div className="category">
        <Link to={post.category.toLowerCase()}>{post.category}</Link>
      </div>
      <h1 className="post-title">{post.title}</h1>
      <div className="meta-data">
        <span className="author">
          <Link to={post.author}>
            <i className="fas fa-user"></i> {post.author}
          </Link>
        </span>{' '}
        <span className="date">
          <i className="far fa-clock"></i> {post.date}
        </span>
      </div>
      <div className="post-content">
        <img src={post.image} alt={post.title} className="post-image" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          obcaecati repellat necessitatibus ex ratione vitae tenetur labore,
          earum accusantium a deserunt. Voluptatibus deserunt suscipit optio a
          quis quos hic. Quia atque minus repellat amet officiis, quaerat sequi.
          Expedita unde officia dolorem enim modi nostrum hic natus adipisci
          consequatur mollitia. Accusantium illo ex veritatis adipisci. Tenetur,
          eligendi facilis doloremque, provident fuga, ex non nihil temporibus
          quidem architecto voluptatem voluptas delectus sed? Accusantium
          commodi voluptatibus esse aspernatur dolores fugiat quos iure
          blanditiis, incidunt debitis tempora ex tenetur laborum dolor? Aut
          nobis, facilis sed aliquam culpa numquam exercitationem consequatur
          dolore obcaecati. Quas magni dolore, tempora quibusdam natus molestias
          et perferendis corrupti iusto nam ullam enim explicabo in sint
          delectus sed{' '}
          <a
            href="https://en.wikipedia.org/wiki/Lorem_ipsum"
            target="_blank"
            rel="noopener noreferrer"
          >
            accusantium
          </a>{' '}
          deserunt minus aut? Quae perspiciatis corrupti saepe laborum maxime
          reprehenderit labore id illum aperiam commodi incidunt deleniti dicta
          vel omnis, animi impedit, molestiae odit a? Earum quia ad impedit,
          tempora laboriosam corrupti. Voluptatibus obcaecati dolorem dolor nam
          neque accusantium? Pariatur cupiditate eligendi, vel voluptatibus
          quaerat, exercitationem laborum, adipisci debitis minima accusantium
          dicta perferendis itaque commodi dolores autem ullam omnis consectetur
          illo assumenda iusto quos hic dolorum. Perferendis similique quae
          maxime recusandae, blanditiis odio dicta culpa dolor voluptatem
          temporibus voluptas praesentium unde assumenda?
        </p>

        <h2 className="sub-heading">Lorem ipsum dolor sit amet.</h2>
        <p>
          Nesciunt quaerat laudantium cumque unde corporis, delectus sapiente
          neque laborum magnam ducimus veniam excepturi saepe repellendus! Est
          quaerat suscipit minus dolorum magnam odio laudantium accusamus. Fuga
          molestiae, deleniti reprehenderit itaque quisquam
        </p>
        <h3 className="sub-heading">Cupiditate ducimus rerum sit eaque</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
          laboriosam dolores, tempora aliquam eos ullam! Fugit ducimus
          architecto exercitationem officia! Aliquam ab delectus, voluptatibus
          harum eaque cupiditate fugiat alias eum ducimus id mollitia ipsum
          ullam, iure libero quam voluptatum vel officia distinctio rem. Iusto
          minima rerum nisi vel, sapiente nostrum.
        </p>
        <h3 className="sub-heading">Rerum sit eaque ducimus cupiditate </h3>
        <p>
          Nostrum veritatis fugiat totam optio, recusandae dolor culpa
          repellendus similique est voluptate in quae ipsam nobis dolorum
          eligendi sunt animi magni facilis voluptates distinctio beatae natus
          deleniti! Hic error deserunt consectetur eveniet possimus inventore
          minus sint aspernatur quod dolore eum sed nulla quos dignissimos nemo
          odit, fugiat reiciendis amet illum.
        </p>
        <h3 className="sub-heading">Sit eaque ducimus cupiditate rerum </h3>
        <p>
          Culpa iste vero ab consectetur distinctio doloribus quisquam, iusto
          nihil nesciunt maxime, ad ratione? Rem exercitationem architecto iusto
          eveniet rerum modi corporis omnis debitis, perferendis ducimus et.
          Soluta, sunt. Repellat, veniam. Quidem ipsum deserunt ex ad, rerum
          repellendus aut porro unde distinctio, reiciendis quibusdam
          accusantium molestiae inventore iusto fugiat veritatis?
        </p>
        <p>
          Asperiores officia inventore quod aliquam sed esse, labore dolor quae
          a consequuntur quo repellendus corrupti illo voluptate? Eveniet itaque
          aspernatur accusamus? Ducimus cupiditate rerum sit eaque
          exercitationem inventore expedita. Distinctio illum laudantium
          pariatur saepe, dignissimos voluptatem earum, facilis dicta odio
          impedit{' '}
          <a
            href="https://en.wikipedia.org/wiki/Lorem_ipsum"
            target="_blank"
            rel="noopener noreferrer"
          >
            perspiciatis
          </a>
          , aut temporibus. Quidem voluptatum, tenetur exercitationem eum
          obcaecati ratione, ea, dolorem minima aliquam quas eos nostrum ipsum
          molestias neque ipsam itaque at eius ut odit animi maiores quaerat
          doloribus repellat. quas, odit magnam fugiat aliquam deserunt,
          expedita optio nemo nobis voluptates omnis aspernatur commodi tenetur!
          Maxime autem ducimus adipisci veritatis tempore, hic eius dignissimos
          totam nostrum earum aliquid ipsum sit rerum quae, eos cum et in odio,
          illo id velit error. Repudiandae neque dolorem corporis molestiae
          exercitationem, provident soluta consectetur eius ducimus! Mollitia
          modi quisquam, excepturi recusandae officia, quam magni quis dolores
          sapiente ipsa totam labore, officiis eum aliquam exercitationem cumque
          temporibus nihil suscipit. Natus sit, quae esse non nisi blanditiis
          dolores! Necessitatibus minima, eum illum eveniet optio facilis labore
          velit tempore nihil explicabo ipsum et enim?
        </p>

        <h2 className="sub-heading">Some sub heading of the post</h2>
        <p>
          Voluptas, praesentium dolorum amet expedita ex distinctio pariatur
          cupiditate facere eius nemo laboriosam quasi maxime culpa animi.
          Dolorum eos suscipit dolorem odit quasi non iste accusamus alias porro
          perspiciatis accusantium architecto similique earum corrupti
          cupiditate magnam explicabo dolor a aperiam, fugit saepe facere in
          quos quo? Voluptas ex ut et dolorem perspiciatis facilis, fugiat sunt
          numquam in quasi. Nemo tenetur labore quaerat quia earum dignissimos
          voluptates{' '}
          <a
            href="https://en.wikipedia.org/wiki/Lorem_ipsum"
            target="_blank"
            rel="noopener noreferrer"
          >
            architecto
          </a>{' '}
          minus a dolores. Voluptatibus deleniti enim laborum veniam nostrum
          debitis cum! Error blanditiis reiciendis voluptate nisi quis dolor
          adipisci ad exercitationem. Quibusdam maxime alias quis maiores
          quisquam accusantium neque eum est temporibus a, sapiente hic laborum
          obcaecati saepe amet quam voluptatibus cum perspiciatis iste? Magni
          amet hic ea perspiciatis exercitationem voluptatum eos asperiores,
          dicta ratione obcaecati et laboriosam, itaque maxime perferendis illo
          fuga quasi, ipsum dignissimos? Repellendus itaque ex omnis magnam
          aliquid nulla mollitia modi dolorem ad, harum id ratione unde
          obcaecati, eum voluptatum perferendis odio illo sit cupiditate non
          facilis magni? Quidem beatae voluptates error cumque temporibus at
          illum minima placeat perspiciatis? Tempora modi numquam sint,
          voluptatibus, ipsa laboriosam vitae sit assumenda non ea ipsam animi
          accusantium natus sunt obcaecati provident voluptatum culpa. Eligendi
          velit iure laboriosam assumenda ratione? Consequatur, illum quia.
        </p>

        <div className="post-tags">
          <div className="tags">#Tags</div>
          {post.tags.map((tag, idx) => (
            <div className="tag" key={idx}>
              {tag}
            </div>
          ))}
        </div>

        <div className="social-icons">
          <div className="share">
            <i className="fas fa-share-alt"></i>
          </div>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pinterest"
          >
            <i className="fab fa-pinterest"></i>
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mail"
          >
            <i className="far fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
