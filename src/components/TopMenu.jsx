import React       from 'react';
import { NavLink } from 'react-router-dom';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Component

// TopMenu receives state from React Router.
const TopMenu = () => (
   <menu id='TopMenu'>
      <NavLink exact to='/' id='Logo' className='item' activeClassName='current'>home</NavLink>
      <section>
         <NavLink to='/about'  className='item' activeClassName='current'>about</NavLink>
         <NavLink to='/sports' className='item' activeClassName='current'>sports</NavLink>
         <NavLink to='/school' className='item' activeClassName='current'>school</NavLink>
      </section>
   </menu>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default TopMenu
