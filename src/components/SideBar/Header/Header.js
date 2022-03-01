import { Link } from 'react-router-dom'
import localMarketLogo from '../../../assets/images/localMarketLogo.png'

function Header () {
    return (
        <Link to="/" className="header" >
            <img className='logo' src={localMarketLogo} alt="LocalMarket logo" />
            <h1 className='siteTitle'> LocalMarket</h1>
        </Link>
    )
}

export default Header