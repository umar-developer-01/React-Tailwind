import React, { useMemo } from "react";
import StarSVG from "./starSVG";

//  props type
interface RenderStarsProps {
    rating: number;
}

// RenderStars Component
const RenderStars: React.FC<RenderStarsProps> = ({ rating }) => {
    const stars = useMemo(() => {
        return Array.from({ length: 5 }, (_, index) => (
            <StarSVG key={index} filled={index < rating} />
        ));
    }, [rating]);
    return (
        <>
            {stars}
        </>
    );
};

// Export the RenderStars Component
export default RenderStars;

