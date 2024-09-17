export default function Card({ icon, name, description }) {
    return (
        <div className="card flex flex-col items-center px-8 bg-[#eeeef4]">
            <div className="icon text-6xl mb-4 text-pink">
            {icon}
            </div>
            <h3 className="name text-xl mb-2 text-dark font-bold">
            {name}
            </h3>
            <p className="description text-text text-center">
            {description}
            </p>
        </div>
        );
}
