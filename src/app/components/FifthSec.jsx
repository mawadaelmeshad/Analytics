import Chart from "react-google-charts";

export default function FifthSec(){
    const data = [
        [
          {
            type: "date",
            id: "Date",
          },
          {
            type: "number",
            id: "Won/Loss",
          },
        ],
        [new Date(2023, 3, 13), 37032],
        [new Date(2023, 3, 14), 38024],
        [new Date(2023, 3, 15), 38024],
        [new Date(2023, 3, 16), 38108],
        [new Date(2023, 3, 17), 38229],
        // Many rows omitted for brevity.
        [new Date(2024, 9, 4), 38177],
        [new Date(2024, 9, 5), 38705],
        [new Date(2024, 9, 12), 38210],
        [new Date(2024, 9, 13), 38029],
        [new Date(2024, 9, 19), 38823],
        [new Date(2024, 9, 23), 38345],
        [new Date(2024, 9, 24), 38436],
        [new Date(2024, 9, 30), 38447],
      ];
    return(
        <div className="bg-[#eeeef4] text-text flex flex-row justify-between flex-wrap sm:px-32 px-8 py-32">
            <div className="sm:w-1/4 w-full">
                <h2 className="title">Pre-built Dahboard Templates</h2>
                <p className="pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, iure, illum adipisci possimus eos nisi nostrum recusandae ducimus architecto quae consequatur porro qui quasi atque expedita. Est tempora nemo soluta?</p>

            </div>
            <div className="sm:w-1/2 w-full ">
            <Chart
                chartType="Calendar"
                width="100%"
                height="400px"
                data={data}
            />

            </div>
        </div>

    );
}