// import axios from "axios";
// import { useEffect } from "react";
// import requests from "./Requests";

const Trending = ({trending}) => {
    return ( 
        <div className="trending">
            <table>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Coin</th>
                    </tr>
                    {trending.map(coin => (
                    <tr className="trending-coin" key={coin.item.id}>
                        <td>{coin.item.market_cap_rank}</td>
                        <td className="center"><img src={coin.item.small} alt={`${coin.item.name} logo`}/> {coin.item.name}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
 
export default Trending;