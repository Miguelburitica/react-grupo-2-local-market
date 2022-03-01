import localMarketLogo from '/home/miguelbv/Documents/personalStuff/react_grupo_2_local_market/src/assets/localMarketLogo.png'

function Header ({name, deals}) {
    return (
        <div className="header">
            <img src={localMarketLogo} alt="LocalMarket logo" />
        </div>
    )
}

export default Header