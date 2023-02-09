const Trending = ({trending}) => {
    return ( 
        <div className="trending">
            <h3>Trending</h3>
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