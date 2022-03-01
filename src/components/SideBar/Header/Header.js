import localMarketLogo from '../../../assets/images/localMarketLogo.png'

function Header () {
    return (
        <div className="header">
            <img src={localMarketLogo} alt="LocalMarket logo" />
        </div>
    )
}

export default Header