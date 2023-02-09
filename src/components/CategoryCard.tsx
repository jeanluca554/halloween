import React from "react";

type CategoryCardProps = {
    imgSrc: string;
    title: string;
    description: string;
}

const CategoryCard = (props: CategoryCardProps) => {
    return (
        <div className="category__card bg-body-100 pt-[4.5rem] px-9 pb-8 rounded-[2rem] text-center shadow-[0_4px_16px_rgba(6,5,5,0.3)] relative group lg:pt-24 lg:px-10 lg:pb-8">
            <img src={props.imgSrc} alt="category image" className="category__img w-[120px] absolute inset-0 my-0 mx-auto -top-14 transition duration-300 group-hover:-translate-y-2 lg:w-[150px]" />

            <h3 className="category__title text-xl font-semibold text-first-50 mb-2">{props.title}</h3>
            <p className="category__description text-sm">
                {props.description}
            </p>

            <img src="/stars.png" alt="category image" className="category__star w-10 absolute top-14 right-2 rotate-[15deg] lg:right-4" />
        </div>
    )

}

export default CategoryCard;