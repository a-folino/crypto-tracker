import Navbar from './Navbar';

const Header = () => {
    return ( 
        <>
            <header>
                <h1>CoinTrack</h1>
                <Navbar />
            </header>
            <div className="text-scroll">
                <p>Get real-time data on the top cryptocurrencies including Bitcoin, Ethereum, Binance Coin, and more. Track prices, market caps, and trading volumes on a single platform.</p>
            </div>
        </>
     );
}
 
export default Header;