
import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  const readMore = (url) => {
    window.open(url);
  }

  if (!Array.isArray(data) || data.length === 0) {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="w-12 h-12 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-between px-0 md:px-10 lg:px-20 ml-0 md:ml-5 lg:ml-7'>
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) {
          return null;
        } else {
          return (
          <div key={index} className='w-[330px] shadow bg-amber-200 rounded-2xl ml-3.5 lg:ml-0
          md:ml-0 mt-5 border-s-amber-100 tracking-wide'>
          <img src={curItem.urlToImage} alt="" className='w-[100%] h-[180px] border-l- border-r- rounded-lg' />
          <div className='p-5'>
            <a className='font-bold text-xl mt-1 hover:underline cursor-pointer' onClick={() => readMore(curItem.url)}>{curItem.title}</a>
            <p className='mt-2 font-semibold'>{curItem.description}</p>
            <button className='bg-blue-400 border-none cursor-pointer p-2 text-white text-lg rounded-lg mt-4 font-bold' onClick={() => readMore(curItem.url)}>Read More</button>
          </div>
        </div>
          )
        }

})}
    </div>
  );
};

export default Card;
