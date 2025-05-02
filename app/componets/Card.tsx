import Image from "next/image";
type CardProps = {
    index:number,
    flags: string;
    name: string;
    capital: string,
    region: string,
    population: number,
}
const Card = ({ index,flags, name, capital, region, population }: CardProps) => {
    return (
        <div className="h-full overflow-hidden bg-white rounded-lg shadow-lg">
            <div className=" aspect-video w-full">
                <Image
                    className="w-full h-full object-cover"
                    src={flags || '/flag-placeholder.svg'}
                    alt={`Flag ${name}`}
                    width={500}
                    height={300}
                    priority={index < 12}
                />
            </div>

            <div className="p-6 text=sm text-gray-600">
                <h2 className="text-xl font-semibold mb-4">{name}</h2>
                <div className="space-y-2">
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Capita:</span>
                        <span>{capital}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Região:</span>
                        <span>{region}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">População:</span>
                        <span>{population}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
