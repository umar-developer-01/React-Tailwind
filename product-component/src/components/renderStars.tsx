import React, { useRef, useEffect } from "react";
import StarSVG from "./starSVG";

//  props type
interface RenderStarsProps {
    rating: number;
}

// RenderStars Component
const RenderStars: React.FC<RenderStarsProps> = ({ rating }) => {
    const renderCount = useRef(0);

    useEffect(() => {
        // This effect runs after each render
        renderCount.current += 1;
    });

    console.log("count how many times this component got re-rendered", renderCount);
    return (
        <>
            {Array.from({ length: 5 }, (_, index) => (
                <StarSVG key={index} filled={index < rating} />
            ))}
        </>
    );
};


// Export the RenderStars Component
export default RenderStars;

