export default function PricingCard({ title, hintText, price, bgColor,titleColor, btnColor}){
    return(
        <div className="card flex flex-col items-center px-4 py-16 w-full rounded-3xl" style={{backgroundColor: bgColor}}>
        <h4 className="text-3xl mb-2 text-white font-bold" style={{color:titleColor}}>
        {title}
        </h4>
        <p className="text-sm mb-2 text-text">
        {hintText}
        </p>
        <div className="w-1/2 bg-gray-500 my-4 pt-0.5"></div>
        <h2 className="text-center text-6xl font-bold text-white" style={{color:titleColor}}>
        {price}<span className="text-md">$</span>
        </h2>
        <p className="py-2 text-text text-sm">per month</p>
        <button style={{ border: '1px solid #8794BA', borderRadius: '64px',backgroundColor:btnColor,borderColor:btnColor }} className="py-2 px-10 hover:bg-pink hover:border-pink  duration-300">Order</button>
    </div>
    )
}