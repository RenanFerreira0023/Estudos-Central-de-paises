'use client';
import { useEffect , useState} from 'react';
import { Card, Footer, Header, Grid } from './componets/index';

export default function Home() {

const [countries, setCountries] = useState([]);


  useEffect(() => {
    const fetchcountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json()
      console.log(data)
      setCountries(data)
}

    fetchcountries();
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Grid>
          {countries.map(({ id, name, capital, region, population }) => (
            <Card
              key={id}
              pais={name.common}
              capital={capital}
              regiao={region}
              populacao={population} />
          ))}
        </Grid>
      </main>
      <Footer />
    </>
  );
}
