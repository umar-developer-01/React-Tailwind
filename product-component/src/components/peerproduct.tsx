import React, { useState } from "react";
import Jacket from "../assets/jacket.jpg";
import RenderStars from "./renderStars";

interface PeerProductProps { }

const PeerProduct: React.FC<PeerProductProps> = () => {
    // State to manage the selected size
    const [selectedSize, setSelectedSize] = useState<string>('xs');
    const [rating, setRating] = useState<number>(4);

    // Function to handle size selection
    const handleSizeChange = (size: string) => {
        setSelectedSize(size);
    };




    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen antialiased text-gray-900">
            <div className="w-96 flex flex-col gap-2  rounded-lg overflow-hidden">
                <img src={Jacket} alt="Jacket" className="h-[400px] w-96 object-cover object-center shadow-md" />
                <div className="relative px-4 -mt-12">
                    <div className="bg-white p-6 pt-2 rounded-lg shadow-lg">

                        <div className="mt-1 flex items-baseline mb-1 pb-4">
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
                                        <div className={`w-9 h-9 rounded-lg uppercase flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white`}>
                                            {size}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-1 flex items-baseline mt-1">
                            <span className="bg-green-500 text-white text-sx px-2 py-1 inline-block rounded-md">New</span>
                            <h4 className="ml-2 font-semibold text-lg leading-tight truncate">Louis Philippe</h4>
                        </div>

                        <div className="mt-2">
                            $2,949.00 &bull;
                            <span className="text-gray-600 text-sm"> 41% OFF</span>
                        </div>
                        <div className="mt-2 flex items-center">
                            <RenderStars rating={rating} />
                            <span className="ml-2 text-gray-600 text-sm">  44 reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeerProduct;