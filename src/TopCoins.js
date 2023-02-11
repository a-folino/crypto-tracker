import Tippy from '@tippyjs/react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import 'tippy.js/dist/tippy.css'; 

const TopCoins = ({top50, loadRequest, page}) => {
    const checkString = (string) => {
        if (string.charAt(0) === '-') {
            return "red"
        } else {
            return "green"
        }
    }

    return ( 
        <div className="coins">
            <h3>Top Coins</h3>
            <table>
                    <tbody>
                        <tr>
                            <th>Rank</th>
                            <th>Coin</th>
                            <th><Tippy content="Price per coin AUD" className="tooltip" placement='top-end'><div>Price <AiOutlineInfoCircle /></div></Tippy></th>
                            <th>24hr High</th>
                            <th><Tippy content="Percentage price change in the last 24 hours" className="tooltip" placement='top-end'><div>24hr% <AiOutlineInfoCircle /></div></Tippy></th>
                            <th><Tippy content="Total value of all circulating coins" className="tooltip" placement='top-end'><div>Market Cap <AiOutlineInfoCircle /></div></Tippy></th>
                        </tr>
                    {top50.map(coin => {
                        return (
                            <tr className="coin" key={coin.market_cap_rank}>
                                <td>{coin.market_cap_rank}</td>
                                <td className="center"><img src={coin.image} alt={`${coin.id} logo`} />{coin.name}</td>
                                <td>${coin.high_24h.toFixed(2)}</td>
                                <td>${coin.current_price.toFixed(2)}</td>
                                <td className={checkString(coin.price_change_24h.toString())}>{coin.price_change_24h.toFixed(2)}%</td>
                                <td>{coin.market_cap.toLocaleString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button className="next-btn" onClick={loadRequest}>Page {page}</button>
        </div>
    );
}
 
export default TopCoins;
