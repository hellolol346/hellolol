import React       from 'react';
import { NavLink } from 'react-router-dom';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Component

// TopMenu receives state from React Router.
const TopMenu = () => (
   <menu id='TopMenu'>
      <NavLink exact to='/' id='Logo' className='item' activeClassName='current'>Home</NavLink>
      <section>
         <NavLink to='/about'  className='item' activeClassName='current'>About</NavLink>
         <NavLink to='/sports' className='item' activeClassName='current'>Sports</NavLink>
         <NavLink to='/school' className='item' activeClassName='current'>School</NavLink>
         <NavLink to='/test'   className='item' activeClassName='current'>Test</NavLink>
      </section>
   </menu>
)

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Export

export default TopMenu
