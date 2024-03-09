import Jacket from "../assets/jacket.jpg";

const CardComponent = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-[20rem] relative bg-red-200 shadow-xl rounded-md aspect-ratio">
                <img src={Jacket} alt="Jacket" className="absolute object-fit:contain" />
            </div>
        </div>
    );
};

export default CardComponent;