import React from 'react';

const Menu = ({items}) => {
  return (
    <div className="section-center">
      {items.map((item, i) => {
        const { id, title, img, desc, price } = item; 
        return (
          <article className="menu-item">
            <img className="photo" src={img} alt={title} />
            <div className="item-info">
              <header>
                <h4> {title}</h4>
                <h4 className="price">
                  ${price}
                </h4>
              </header>
              <p className="item-text">
                {desc}
              </p>
            </div>
          </article>
        )
      })
      }
    </div>
  )
};

export default Menu;