'use client';
import { useEffect, useState } from 'react';
import { Card, Footer, Header, Grid } from './componets/index';

import {countriesApi} from "./services"

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
      const[response,error] = await countriesApi.getAll() 
        setLoading(false)
      if(error){
        setError(error)
        return;
      }
      setCountries(response)

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
