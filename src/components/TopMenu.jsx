import React       from 'react';
import { NavLink } from 'react-router-dom';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Component

// TopMenu receives state from React Router.
const TopMenu = () => (
   <menu id='TopMenu'>
      <NavLink exact to='/' id='Logo' className='item' activeClassName='current'>home</NavLink>
      <section>
         <NavLink to='/blog'  className='item' activeClassName='current'>blog</NavLink>
         <NavLink to='/test'  className='item' activeClassName='current'>code</NavLink>
         <NavLink to='/about' className='item' activeClassName='current'>about</NavLink>
      </section>
   </menu>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default TopMenu
