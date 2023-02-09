import Navbar from './Navbar';

const Header = () => {
    return ( 
        <>
            <header>
                <h1>CoinTrack</h1>
                <Navbar />
            </header>
            <div className="text-scroll">
                <p>Stay ahead of the game with our in-depth market data, providing you with the latest prices, volume, and market movements of your favorite cryptocurrencies. With our customizable portfolio tracker, you can easily monitor the performance of your investments, set up price alerts, and see how your portfolio is performing against the overall market.</p>
            </div>
        </>
     );
}
 
export default Header;