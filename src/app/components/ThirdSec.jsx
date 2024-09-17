import Chart from "react-google-charts";

export default function ThirdSec(){
    const data = [
        ["Dinosaur", "Length"],
        ["Acrocanthosaurus (top-spined lizard)", 12.2],
        ["Albertosaurus (Alberta lizard)", 9.1],
        ["Allosaurus (other lizard)", 12.2],
        ["Apatosaurus (deceptive lizard)", 22.9],
        ["Archaeopteryx (ancient wing)", 0.9],
        ["Argentinosaurus (Argentina lizard)", 36.6],
        ["Baryonyx (heavy claws)", 9.1],
        ["Brachiosaurus (arm lizard)", 30.5],
        ["Ceratosaurus (horned lizard)", 6.1],
        ["Coelophysis (hollow form)", 2.7],
        ["Compsognathus (elegant jaw)", 0.9],
        ["Deinonychus (terrible claw)", 2.7],
        ["Diplodocus (double beam)", 27.1],
        ["Dromicelomimus (emu mimic)", 3.4],
        ["Gallimimus (fowl mimic)", 5.5],
        ["Mamenchisaurus (Mamenchi lizard)", 21.0],
        ["Megalosaurus (big lizard)", 7.9],
        ["Microvenator (small hunter)", 1.2],
        ["Ornithomimus (bird mimic)", 4.6],
        ["Oviraptor (egg robber)", 1.5],
        ["Plateosaurus (flat lizard)", 7.9],
        ["Sauronithoides (narrow-clawed lizard)", 2.0],
        ["Seismosaurus (tremor lizard)", 45.7],
    ];
    return(
        <div className="bg-[#eeeef4] text-text flex flex-row justify-between flex-wrap sm:px-32 px-8 py-32">
            <div className="sm:w-1/4 w-full">
                <h2 className="title">Automated Reports & Widget Alerts</h2>
                <p className="py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, iure, illum adipisci possimus eos nisi nostrum recusandae ducimus architecto quae consequatur porro qui quasi atque expedita. Est tempora nemo soluta?</p>

            </div>
            <div className="sm:w-1/2 w-full border rounded-3xl bg-white pl-4">
            <Chart
                chartType="Histogram"
                width="90%"
                height="400px"
                data={data}
                />

            </div>
        </div>

    );
}