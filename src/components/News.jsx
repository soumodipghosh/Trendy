import React, { useEffect, useState } from 'react'
import Card from './Card'

const News = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([])
  

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const getData = async() => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles)
  } 

  {/* const getData = async () => {
  try {
    const response = await fetch(`https://trendy-9.onrender.com/api/news?q=${search}`);
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  } catch (error) {
    console.error("Error fetching data from backend proxy:", error);
  }
}; */} 

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)
  }
  // const userInput = (e) => {
  //   setSearch(e.target.value)
  // }
  useEffect(() => {
    getData()
  }, [])



  return (
    <div>
    
      <nav className='flex items-center justify-around bg-blue-200 p-2 lg:p-2 gap-16 font-semibold fixed top-0 z-50 w-full'>
        <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-2 rounded-lg font-mono'>
            <h1>Trendy</h1>
        </div>
        <ul className='hidden lg:flex md:flex lg:gap-10 md:gap-5'>
            <li onClick={() => setSearch("All News")} className='hover:underline cursor-pointer'>All News</li>
            <li onClick={() => setSearch("Trending")} className='hover:underline cursor-pointer'>Trending</li>
        </ul>
        <div className='flex gap-1 items-center'>
            <input type="text" placeholder='Search Here...' value={search} className='w-[150px] border-none p-1 rounded-lg' onChange={handleInput} />
            <button className='bg-rose-400 p-1.5 md:px-3 rounded-lg text-white cursor-pointer' onClick={getData}>Search</button>
        </div>
      </nav>
    
  <div className="w-full overflow-hidden bg-yellow-200 mt-14">
  <div
    className="whitespace-nowrap inline-block animate-[scroll_15s_linear_infinite] font-semibold text-blue-800 text-sm sm:text-base md:text-lg px-4 py-2"
    style={{
      display: 'inline-block',
      whiteSpace: 'nowrap',
      animation: 'scroll 20s linear infinite',
    }}
  >
    🔥 Breaking News : India launches new satellite | 🌍 Global Markets Rally | 🏏 Cricket World Cup Highlights | ⚽ Football World Cup highlights | 🛠️ Tech Giant Unveils New AI Tools | 💡 Stay Tuned !
  </div>

  <style>
    {`
      @keyframes scroll {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
    `}
  </style>
</div>





      <div className='justify-center gap-2 grid grid-cols-3 lg:flex p-1 lg:gap-5 font-semibold text-white mt-3 md:px-8'>
        <button className='bg-blue-400 p-1 rounded-xl cursor-pointer lg:px-6 lg:py-1' onClick={() => setSearch("Sports")}>Sports</button>
        <button className='bg-blue-400 p-1 rounded-xl cursor-pointer lg:px-6 lg:py-1' onClick={() => setSearch("Politics")}>Politics</button>
        <button className='bg-blue-400 p-1 rounded-xl cursor-pointer lg:px-6 lg:py-1' onClick={() => setSearch("Entertain")}>Entertain</button>
        <button className='bg-blue-400 p-1 rounded-xl cursor-pointer lg:px-6 lg:py-1' onClick={() => setSearch("Health")}>Health</button>
        <button className='bg-blue-400 p-1 rounded-xl cursor-pointer lg:px-6 lg:py-1' onClick={() => setSearch("Fitness")}>Fitness</button>
        <button className='bg-blue-400 p-1 rounded-xl cursor-pointer lg:px-6 lg:py-1' onClick={() => setSearch("Technology")}>Tech</button>
      </div> 

      <div>
        {newsData ? <Card data={newsData}/> : [] }
      </div>
    </div>
  )
}

export default News
