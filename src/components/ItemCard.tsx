import React from "react";

type ItemCardProps = {
    itemName: string;
    itemPrice: string;
    imageSrc: string;
}

const ItemCard = (props: ItemCardProps) => {
    return (
        <article className="items__card relative bg-body-100 rounded-3xl pt-16 px-5 pb-5 shadow-[0_4px_16px_rgba(6,5,5,0.3)] text-center group lg:pt-24 lg:px-4 lg:pb-6">
            <img src={props.imageSrc} alt="items image" className="items__img w-[100px] absolute inset-0 -top-8 my-0 mx-auto transition duration-300 group-hover:-translate-y-2 lg:w-[130px]" />

            <h3 className="items__name text-xl text-[0.938rem] font-medium mb-1 lg:text-[1rem] lg:font-bold">{props.itemName}</h3>
            <span className="items__price block font-semibold text-first-50 mb-2">{props.itemPrice}</span>

            <button className="items__button inline-flex bg-first-50 text-white py-0 px-7 rounded-[4rem] cursor-pointer transition border-none outline-none hover:bg-first-100 lg:text-[1.5rem]">
                <i className="ri-heart-3-line text-lg"></i>
            </button>
        </article>
    )
}

export default ItemCard;