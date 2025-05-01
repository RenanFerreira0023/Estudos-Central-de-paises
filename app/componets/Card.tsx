type CardProps ={
    pais: string,
    capital: string,
    regiao: string,
    populacao: string,
}
const Card = ({ pais, capital, regiao, populacao}: CardProps )  => {
    return (
        <div className="h-full overflow-hidden bg-white rounded-lg shadow-lg">
            <div className=" aspect-video w-full">
                <img  src="https://placehold.co/600x400" className="w-full h-full object-cover"/>
            </div>

            <div className="p-6 text=sm text-gray-600">
                <h2 className="text-xl font-semibold mb-4">{pais}</h2>
                <div className="space-y-2">
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Capita:</span>
                        <span>{capital}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Região:</span>
                        <span>{regiao}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">População:</span>
                        <span>{populacao}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
