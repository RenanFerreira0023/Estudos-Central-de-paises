import { Card, Footer, Header } from './componets/index'

const regioes = [
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
      <Card id={regioes[0].id} pais={regioes[0].pais} capital={regioes[0].capital} regiao={regioes[0].regiao} populacao={regioes[0].populacao} />
      <Card id={regioes[1].id} pais={regioes[1].pais} capital={regioes[1].capital} regiao={regioes[1].regiao} populacao={regioes[1].populacao} />
      <Card id={regioes[2].id} pais={regioes[2].pais} capital={regioes[2].capital} regiao={regioes[2].regiao} populacao={regioes[2].populacao} />
      <Card id={regioes[3].id} pais={regioes[3].pais} capital={regioes[3].capital} regiao={regioes[3].regiao} populacao={regioes[3].populacao} />
      <Card id={regioes[4].id} pais={regioes[4].pais} capital={regioes[4].capital} regiao={regioes[4].regiao} populacao={regioes[4].populacao} />
      <Card id={regioes[5].id} pais={regioes[5].pais} capital={regioes[5].capital} regiao={regioes[5].regiao} populacao={regioes[5].populacao} />
      <Card id={regioes[6].id} pais={regioes[6].pais} capital={regioes[6].capital} regiao={regioes[6].regiao} populacao={regioes[6].populacao} />
      <Card id={regioes[7].id} pais={regioes[7].pais} capital={regioes[7].capital} regiao={regioes[7].regiao} populacao={regioes[7].populacao} />
      <Card id={regioes[8].id} pais={regioes[8].pais} capital={regioes[8].capital} regiao={regioes[8].regiao} populacao={regioes[8].populacao} />
      <Card id={regioes[9].id} pais={regioes[9].pais} capital={regioes[9].capital} regiao={regioes[9].regiao} populacao={regioes[9].populacao} />

      </main>
      <Footer />
    </>
  );
}
