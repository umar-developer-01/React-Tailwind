
import React from 'react'

interface AnchorProps {
    route: string;
    className: string;
    name: string
}



const Anchor: React.FC<AnchorProps> = ({ route, className, name }) => {
    return (
        <>
            <a href={route} className={className}>{name}</a>
        </>
    )
}

export default Anchor