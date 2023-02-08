import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import requests from "./Requests";
import Summaries from "./Summaries";
import TopCoins from "./TopCoins";
import Trending from "./Trending";


const Home = () => {
    const [top50, setTop50] = useState([]);
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const loadRequest = () => {
        if (page === 1) {
            axios.get(requests.top502).then(response => {
                setTop50(response.data)
                setPage(2)
                console.log(page)
            }).catch(err => {
                console.log(err)
            });
            // document.querySelector('.prev-btn').className = "prev-btn"
        } else {
            axios.get(requests.top50).then(response => {
                setTop50(response.data)
                setPage(1)
                console.log(page)
            }).catch(err => {
                console.log(err)
            })
            // document.querySelector('.next-btn').classList = "next-btn greyed"
        }
    }

    const fetchData = () => {
        const getTop50 = axios.get(requests.top50);
        const getTrending = axios.get(requests.trending);

        axios.all([getTop50, getTrending]).then(
            axios.spread((...allData) => {
                const top50Data = allData[0].data;
                const trendingData = allData[1].data.coins;

                setTop50(top50Data);
                setTrending(trendingData);
                setIsLoading(false)
            })
        )
    }

    useEffect(() => {
        fetchData()
    }, [])

    return ( 
        <>
        {!isLoading &&
        <div className="home">
            <TopCoins 
                loadRequest={loadRequest} 
                top50={top50} 
                page={page}/>
            <Trending 
                trending={trending}
            />
            <Summaries />
            <Footer />        
        </div>
        }
        
        </>
        
    );
}
 
export default Home;