import React from 'react'
import { useEffect, useState } from "react";

export default function Userlist() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = [
      {
        nama: "Bariq Unggul Pribadi",
        nim: "21120118120005",
      },
      {
        nama: "Ahmad Mikail Afkar",
        nim: "21120118140087",
      },
    ];
    setData(data);
  }, []);

  const [gambar, setGambar] = useState([]);
  useEffect(() => {
    const gambar = [
      {
        img: "img/Bariq.jpg",
      },
      {
        img: "img/Mikail.jpg",
      },
    ];
    setGambar(gambar);
  }, []);

  return (
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <div class="overflow-hidden rounded-lg shadow-lg">
            <div class="group relative">
            {data.map((item) => (
              
              <div class="mt-2 flex justify-between">
                <p class="font-bold text-m mb-2">{item.nama}</p>
                <p class="text-gray-500 text-base">{item.nim}</p>
              </div>
            ))}
            {gambar.map((gambar) => (
              <><img alt="Placeholder" class="block h-auto w-full" src={gambar.img}></img></>
            ))}
          </div>
      </div>
    </div>
    </div>
    </div>
    
  );
}
