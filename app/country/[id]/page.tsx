'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { countriesApi } from "../../services";
import { useParams } from "next/navigation"

type Params = {
    id: string;
};


type DetailCountry = {
    cca3: string;
    flags: {
        svg: string;
    };
    name: {
        common: string;
    };
    capital: string[];
    region: string;
    population: number;
    languages: Record<string, string>
    currencies: Record<string, {
        name: string;
        symbol: string;
    }>;
    tld: string[];
    borders: string[];
}

export default function Country() {

    const params = useParams<Params>();
    //const name = "Brazil"


    const [id, setId] = useState<string | null>(null)
    const [country, setCountry] = useState<DetailCountry>();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (params?.id && params.id !== id) {
            setId(params.id as string)
        }
    }, [params, id]);


    useEffect(() => {
        const fetchcountries = async () => {
            const [response, error] = await countriesApi.getCountry(id)
            setLoading(false)
            if (error) {
                setError(error)
                return;
            }
            setCountry(response)

        };
        if (id) {
            fetchcountries();
        }
    }, [id]);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;


    const {
        flags,
        name,
        capital,
        region,
        population,
        languages,
        currencies,
        tld,
        borders
    } = country ?? {};

    const { svg:flag } = flags ?? {};
    const { common: countryName } = name ?? {};
    const capitalName = capital??[];


    const languagesNames = Object.values(languages ?? {}).join(", ");


    const currenciesNames = (Object.values(currencies ?? {}) as { name: string; symbol: string }[])
    .map(({ name, symbol }) => `${name} (${symbol})`)
    .join(", ");
  

    const topLevelDomainNames = tld ??[];
    const bordersIds = borders?.join(", ")?? ""


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
                <div className="flex items-center md:max-w-[400px]">
                    <Image
                        className="max-h-80 object-cover rounded-lg"
                        src={flag ||'/flag-placeholder.svg'}
                        alt={`Flag ${name}`}
                        width={500}
                        height={300}
                        priority

                    />
                </div>


                <div className="flex flex-col justify-center p-6 text=sm text-gray-600">
                    <h2 className="text-xl font-semibold mb-4">{countryName} {id}</h2>
                    <div className="space-y-2">
                        <div className="flex items-center gap-1">
                            <span className="font-semibold">Capita:</span>
                            <span>{capitalName}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-semibold">Região:</span>
                            <span>{region}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-semibold">População:</span>
                            <span>{population}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="font-semibold">Lingua:</span>
                            <span>{languagesNames}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="font-semibold">Moeda:</span>
                            <span>{currenciesNames}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="font-semibold">Nivel de domino:</span>
                            <span>{topLevelDomainNames}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="font-semibold">Fronteira:</span>
                            <span>{bordersIds}</span>
                        </div>


                    </div>
                </div>


            </div>
        </>
    )
}
