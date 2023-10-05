import React from 'react'

const ListRank = () => {
    // Suponha que você tenha um array de itens
    const itens = ["Joao", "Pedro", "Maria", "Josue", "Germana", "David"];

  return (
    <div className="m-1 flex justify-center items-center">
      <div className="container mx-auto py-2">
        <li className="grid grid-cols-3 gap-1 mb-1">
          <ul className="p-3 rounded bg-gray-700 text-center ">Position</ul>
          <ul className="p-3 rounded bg-gray-700 text-center ">Player</ul>
          <ul className="p-3 rounded bg-gray-700 text-center ">Points</ul>
        </li>
      <div className="grid grid-cols-1 gap-1">
        {itens.map((item, index) => (
          <div
            key={index}
            className="bg-gray-500 p-3 rounded shadow-md hover:shadow-lg"
          >
            {item}
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default ListRank