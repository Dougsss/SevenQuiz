import React from 'react'

const ListRank = () => {
    // Suponha que você tenha um array de itens
    const itens = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"];
    
  return (
    <div className="m-1 flex justify-center items-center">
      <div className="container mx-auto py-2">
      <div className="grid grid-cols-1 gap-1">
        {itens.map((item, index) => (
          <div
            key={index}
            className="bg-gray-500 p-4 rounded shadow-md hover:shadow-lg"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
      {/* <img className=" rounded-md h-80" src='https://excelforever.com.br/wp-content/uploads/2021/03/image.png'/> */}
    </div>
  )
}

export default ListRank