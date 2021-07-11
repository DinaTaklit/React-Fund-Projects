import React, { useState } from 'react';
import './index.css'
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map(item => item.category))]


function Index() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  return (<main>
  <section className="menu section">
    <div className="title">
      <h2>Our Menu</h2>
      <div className="underline"></div>
    </div>
    <Categories categories={categories}/>
    <Menu items={menuItems}/>
  </section>
</main>)
}

export default Index;