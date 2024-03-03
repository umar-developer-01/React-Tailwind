import React from 'react';
import Jacket from "../assets/jacket.jpg";

const ProductComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen antialiased text-gray-900">
        <div className="bg-white w-96 flex flex-col gap-2 shadow-xl rounded-lg overflow-hidden border">
          <img src={Jacket} alt="Jacket" className="h-[400px] w-96 object-cover object-center" />
          <div className="p-6">
            <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">M (Shoulder 48)</div>
            <h4 className="font-semibold text-lg leading-tight truncate">Louis Philippe</h4>

            <div className="mt-1">$2,949.00  &bull;
              <span className="text-gray-600 text-sm"> 41% OFF</span>
            </div>
            <div className="mt-4">
              <span className="text-yellow-900 font-semibold">4/5 stars</span>
              <span className="text-gray-600 text-sm"> (based on 34 reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default ProductComponent