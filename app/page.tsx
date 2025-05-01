import { Card, Footer, Header ,Grid } from './componets/index'

const countires = [
  {
    id: 1,
    pais: 'Brasil',
    capital: 'Brasília',
    regiao: 'América do Sul',
    populacao: '214000000'
  },
  {
    id: 2,
    pais: 'Argentina',
    capital: 'Buenos Aires',
    regiao: 'América do Sul',
    populacao: '46000000'
  },
  {
    id: 3,
    pais: 'Canadá',
    capital: 'Ottawa',
    regiao: 'América do Norte',
    populacao: '39000000'
  },
  {
    id: 4,
    pais: 'Alemanha',
    capital: 'Berlim',
    regiao: 'Europa',
    populacao: '83000000'
  },
  {
    id: 5,
    pais: 'Japão',
    capital: 'Tóquio',
    regiao: 'Ásia',
    populacao: '125000000'
  },
  {
    id: 6,
    pais: 'Austrália',
    capital: 'Camberra',
    regiao: 'Oceania',
    populacao: '26000000'
  },
  {
    id: 7,
    pais: 'Nigéria',
    capital: 'Abuja',
    regiao: 'África',
    populacao: '223000000'
  },
  {
    id: 8,
    pais: 'México',
    capital: 'Cidade do México',
    regiao: 'América do Norte',
    populacao: '129000000'
  },
  {
    id: 9,
    pais: 'França',
    capital: 'Paris',
    regiao: 'Europa',
    populacao: '68000000'
  },
  {
    id: 10,
    pais: 'Índia',
    capital: 'Nova Délhi',
    regiao: 'Ásia',
    populacao: '1410000000'
  }
];



export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
          <Grid>
            {countires.map(({ id, pais, capital, regiao, populacao }) => (
              <Card
                key={id}
                pais={pais}
                capital={capital}
                regiao={regiao}
                populacao={populacao} />
            ))}
          </Grid>
      </main>
      <Footer />
    </>
  );
}
