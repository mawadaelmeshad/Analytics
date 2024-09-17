import Chart from "react-google-charts";

export default function FirstSec(){
    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ];
    return(
        <div className="home-container h-fit md:h-screen w-full  flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-16 py-8">
            <div className="w-1/2 justify-center sm:w-full sm:px-16">
                    <h2 className='text-4xl font-bold'>Monitor your business on real-time dashboard</h2>
                    <p className='text-text py-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat aliquid saepe molestias tenetur aspernatur, repellendus fugiat non dolores sequi laborum ducimus ipsum magni consequuntur. Quasi, amet quidem! In, culpa ipsum?</p>
                    <button style={{border: '1px solid #EF2A82',borderRadius:'64px',backgroundColor:'#EF2A82'}} className="py-2 px-10">Try for free</button>
            </div>
                <div className="w-full bg-white flex flex-row justify-center border rounded-3xl">
                <Chart
                chartType="PieChart"
                data={data}
                width={"80%"}
                height={"400px"}
                />
                </div>
            </div>
        

    );
}