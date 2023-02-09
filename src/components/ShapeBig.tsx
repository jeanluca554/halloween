import React from "react";

type ShapeBigProps = {
    positionY: string;
    positionX: string;
}

const ShapeBig = (props: ShapeBigProps) => {
    return (
        <div className={`
            absolute 
            bg-first-50 
            rounded-[50%] 
            blur-[96px] 
            z-[-1] 
            w-[250px] 
            h-[250px] 
            opacity-[.8]
            ${props.positionX}
            ${props.positionY} 
            md:blur-[132px]
            md:opacity-[.5]
            md:w-[450px]
            md:h[450px]
        `}>

        </div>
    )

}

export default ShapeBig;