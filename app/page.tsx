'use client';
import { useEffect, useState } from 'react';
import { Card, Footer, Header, Grid } from './componets/index';

type Country = {
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
};

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchcountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=cca3,flags,name,capital,region,population");
        const data = await response.json();
        console.log(data);
        setCountries(data);
        setLoading(false); // Após a requisição, setamos loading como false
      } catch (error) {
        setError(`Deu um erro: ${error}`);
        console.log(error)
        setLoading(false); // Mesmo em caso de erro, setamos loading como false
      }
    };

    fetchcountries();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;



  return (
    <>
      <Header />
      <main className="flex-1">
        <Grid>
          {countries.map(({ cca3, flags, name, capital, region, population }, index) => {
            const { svg } = flags ?? {};
            const { common: countryName } = name ?? {};
            const capitalName = capital[0];

            return (
              <Card
                key={cca3}
                index={index}
                flags={svg}
                name={countryName}
                capital={capitalName}
                region={region}
                population={population}
              />
            );
          })}
        </Grid>
      </main>
      <Footer />
    </>
  );
}
