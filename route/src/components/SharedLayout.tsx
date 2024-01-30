import NavBar from './NavBar'
import NavLinks from '../utils/NavLinks'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import FooterLinks from '../utils/FooterLinks'

const SharedLayout = () => {

    return(
      <>
          <NavBar links={NavLinks} />
          <Outlet/>
          <Footer FooterLinks={FooterLinks}/>
      </>
    )
}

export default SharedLayout

