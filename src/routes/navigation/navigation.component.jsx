import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo} from '../../assests/crown.svg'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import { CartContext } from '../../contexts/cart.context'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { hidden } = useContext(CartContext)

  return(
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink className='nav-link' to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to='/auth'>
                SIGN IN
              </NavLink>
            )
          }
          <CartIcon/>
        </NavLinks>
        {
          hidden ? null : <CartDropdown />
        }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation