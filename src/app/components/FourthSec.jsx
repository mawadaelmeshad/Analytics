import Chart from "react-google-charts";

export default function FourthSec(){
    const data = [
        ["Year", "Sales", "Expenses"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540],
    ];
    return(
        <div className="bg-[#eeeef4] text-text flex flex-row justify-between flex-wrap sm:px-32 px-8 py-2">
            <div className="sm:w-1/2 w-full pr-8 rounded-3xl bg-white pl-4">
                <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                />

            </div>
            <div className="sm:w-1/3 w-full">
                <h2 className="title">Fully customizable to address your need</h2>
                <p className="pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, iure, illum adipisci possimus eos nisi nostrum recusandae ducimus architecto quae consequatur porro qui quasi atque expedita. Est tempora nemo soluta?</p>

            </div>
        </div>

    );
}