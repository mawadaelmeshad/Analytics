import PricingCard from "./PricingCard";

export default function LastSec(){
    return(
        <div className="text-center px-32 py-8">
            <h2 className="text-4xl font-bold text-white pt-8">Pricing Plans</h2>
            <p className="text-text py-4 px-8 sm:px-32 pb-32">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum error molestias necessitatibus? Cupiditate ea sequi earum dignissimos quaerat provident repellat, corporis voluptate necessitatibus impedit officia fuga soluta corrupti sit?</p>
            <div className="flex flex-row justify-center gap-10">
            <PricingCard title="Starter" hintText="up to 3 users" price="29" bgColor="#091740"/>
            <PricingCard title="Standard" hintText="up to 20 users" price="99" bgColor="white" titleColor="#091740" btnColor="#EF2A82"/>
            <PricingCard title="Premium" hintText="up to 200 users" price="299" bgColor="#091740"/>
            </div>
            <div className="w-full bg-dark my-16 pt-0.5"></div>

        </div>

    );
}