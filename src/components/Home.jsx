import { useEffect, useState } from "react";

function Home() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en";

  useEffect(() => {
    async function fetchCoins() {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setCoins(data);
        setFilteredCoins(data);
      } catch (error) {
        alert(`There was an error loading data...`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCoins();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = coins.filter((coin) =>
      coin.symbol.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCoins(filtered);
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-700 text-xl text-white">
      <div className="flex flex-col justify-between">
        <input
          type="text"
          placeholder="Search crypto"
          className="p-2 m-4 w-36 text-black resize rounded-md md:w-56 "
          value={searchQuery}
          onChange={handleSearch}
        />
        <ul className="flex justify-between items-center text-xl p-4 ">
          <li>#</li>
          <li>Coin</li>
          <li>Price (USD)</li>
          <li>Market Cap (USD)</li>
        </ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          filteredCoins.map((coin, id) => (
            <ul
              className="flex justify-between  items-center border p-4 "
              key={id}
            >
              <li>{coin.market_cap_rank}</li>
              <div className="flex items-center ">
                <img
                  className="w-10"
                  src={coin.image}
                  alt={`${coin.symbol} logo`}
                />
                <li className="px-4 ">{coin.symbol}</li>
              </div>
              <li>${coin.current_price}</li>
              <li>${coin.market_cap}</li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
