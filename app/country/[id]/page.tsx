import Link from "next/link";
import Image from "next/image";

type Props = {
    params: Promise<{ id: string }>;
};



export default async function Country({ params }: Props) {
    const id = (await params).id;
    const name = "Brazil"
    return (
        <>
            <div className="mb-8">
                <Link href={"/"}>
                    <button className="bg-gray-200 houver:bg-gray-300 font-semibold py-2 px-4 rounded">
                        Back
                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4">
                <div className="w-full md:max-w-[400px]">
                    <Image
                        className="w-full h-full"
                        src={'/flag-placeholder.svg'}
                        alt={`Flag ${name}`}
                        width={500}
                        height={300}

                    />
                </div>


                <div className="flex flex-col justify-center p-6 text=sm text-gray-600">
                    <h2 className="text-xl font-semibold mb-4">Brazil {id}</h2>
                    <div className="space-y-2">
                        <div className="flex items-center gap-1">
                            <span className="font-semibold">Capita:</span>
                            <span>Brazilia</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-semibold">Região:</span>
                            <span>America do sul</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-semibold">População:</span>
                            <span>12324324</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="font-semibold">Lingua:</span>
                            <span>ptbr</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="font-semibold">Moeda:</span>
                            <span>BRL</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="font-semibold">Nivel de domino:</span>
                            <span>.br</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="font-semibold">Fronteira:</span>
                            <span>paraguai, argentica, chine,venezuela</span>
                        </div>


                    </div>
                </div>


            </div>
        </>
    )
}
