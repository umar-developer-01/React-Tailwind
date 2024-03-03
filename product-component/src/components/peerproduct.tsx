import React, { useState } from "react";
import Jacket from "../assets/jacket.jpg";



const PeerProduct = () => {


    // State to manage the selected size
    const [selectedSize, setSelectedSize] = useState('xs');

    // Function to handle size selection
    const handleSizeChange = (size: any) => {
        setSelectedSize(size);
    };


    return (
        <>
            <div className="flex justify-center items-center h-screen antialiased text-gray-900">
                <div className="bg-white w-96 flex flex-col gap-2 shadow-xl rounded-lg overflow-hidden border">
                    <img src={Jacket} alt="Jacket" className="h-[400px] w-96 object-cover object-center" />
                    <div className="p-6">

                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                            <div className="space-x-2 flex text-sm">
                                {['xs', 's', 'm', 'l', 'xl'].map((size) => (
                                    <label key={size}>
                                        <input
                                            className="sr-only peer"
                                            name="size"
                                            type="radio"
                                            value={size}
                                            checked={selectedSize === size}
                                            onChange={() => handleSizeChange(size)}
                                        />
                                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white`}>
                                            {size}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
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


export default PeerProduct