import React from 'react';
import { data } from '../restApi.json';

const Popular = () => {
  return (
    <section className='popular' id='popular'>
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR</h1>
          <p>
            Step into our salon and discover a world of beauty and relaxation.
            From precision haircuts to rejuvenating skincare treatments, our expert team is here to pamper 
            you from head to toe. Whether you're looking to refresh your look with a stylish haircut, 
            indulge in a luxurious facial, or treat yourself to a pampering manicure, 
            we're committed to providing you with exceptional service and helping you look and feel your best.
          </p>
        </div>
        <div className="styles_container">
          {data[0].styles.map(element => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.title} />
              <h3>{element.title}</h3>
              <button>{element.category}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
