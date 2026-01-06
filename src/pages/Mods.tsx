import ModCard from "../components/mods/ModCard.tsx";


export type Mod = {
    id: string;
    name: string;
    version: string;
    fileSize?: number;
    imageUrl?: string;
};

export default function ModsPage() {

    // Mock mods, for now.
    const mockMods: Mod[] = [
        { id: '1', name: 'Mod One', version: '1.0.0', fileSize: 150 },
        { id: '2', name: 'Mod Two', version: '2.3.4' },
        { id: '3', name: 'Mod Three', version: '1.2.1', fileSize: 75 },
    ]

    return (
        <section className="ml-60 p-30 flex flex-col flex-1 h-screen gap-8">

            <div className="flex justify-between items-center w-full ">
                <h1 className="text-4xl font-bold text-center ">
                    Mods
                </h1>

                <div className="flex flex-row ">
                    <button className="bg-cyan-700 text-white px-3 py-1.5 rounded mr-2 ">Add Mod</button>
                    <button className="bg-teal-700 text-white px-3 py-1.5 rounded ">Refresh Mods</button>
                </div>
            </div>

            {/* Mods container */}
            <div className="flex flex-col gap-2 justify-around">
                {
                    mockMods.map((mod: Mod) => {
                        return <ModCard mod={mod} onRemove={() => {}}/>
                    })
                }
            </div>

        </section>
    );
}