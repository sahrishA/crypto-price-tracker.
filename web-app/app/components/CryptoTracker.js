"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import { useQuery } from "react-query";

const fetchCryptoPrices = async () => {
  const response = await fetch(
    "https://api.coincap.io/v2/assets?limit=5",
    {
      headers: { Authorization: "Bearer 2941e7c6-fd7a-4904-98b4-7d113c79dd37" },
    }
  );
  if (!response.ok) throw new Error("Failed to fetch prices");
  return response.json();
};

export default function CryptoTracker() {
  const [search, setSearch] = useState("");
  const { data, error, isLoading, refetch } = useQuery({
  queryKey: ["cryptoPrices"],
  queryFn: fetchCryptoPrices,
});


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  const filteredData = data.data.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Crypto Price Tracker</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => refetch()}>Refresh</button>
      <ul>
        {filteredData.map((crypto) => (
          <li key={crypto.id}>
            {crypto.name}: ${parseFloat(crypto.priceUsd).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}