import React from "react";

type ShapeSmallProps = {
    positionY: string;
    positionX: string;
}

const ShapeSmall = (props: ShapeSmallProps) => {
    return (
        <div className={`
            absolute 
            bg-first-50 
            rounded-[50%] 
            blur-[96px] 
            z-[-1] 
            w-[150px] 
            h-[150px] 
            ${props.positionY} 
            ${props.positionX}
            md:blur-[132px]
            md:opacity-[.5]
            md:w-[350px]
            md:h[350px]
        `}>

        </div>
    )

}

export default ShapeSmall;