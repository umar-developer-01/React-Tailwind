import React, { useState } from "react";
import Jacket from "../assets/jacket.jpg";

interface PeerProductProps { }

const PeerProduct: React.FC<PeerProductProps> = () => {
    // State to manage the selected size
    const [selectedSize, setSelectedSize] = useState<string>('xs');
    const [rating, setRating] = useState<number>(4);

    // Function to handle size selection
    const handleSizeChange = (size: string) => {
        setSelectedSize(size);
    };

    // render stars
    const renderStars = () => {
        const stars = Array.from({ length: 5 }, (_, index) => (
            <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 fill-current ${index < rating ? 'text-teal-500' : 'text-gray-300'}`}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
        ));

        return stars;
    };


    return (
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
                                    <div className={`w-9 h-9 rounded-lg uppercase flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white`}>
                                        {size}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                    <h4 className="font-semibold text-lg leading-tight truncate">Louis Philippe</h4>
                    <div className="mt-1">
                        $2,949.00 &bull;
                        <span className="text-gray-600 text-sm"> 41% OFF</span>
                    </div>
                    <div className="mt-2 flex items-center">
                        {renderStars()}
                        <span className="ml-2 text-gray-600 text-sm">  44 reviews</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeerProduct;