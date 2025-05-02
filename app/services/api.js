const ApiClient = (baseUrl) => ({
  async get(endpoint) {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`);

      if (!response.ok) {
        return [null, `HTTP ERRO` + response.statusText];
      }

      const data = await response.json();
      return [data, null];
    } catch (error) {
      setError(`Deu um erro: ${error.message}`);
      console.log(error);
      return [data, error.message];
    }
  },
});

const api = ApiClient("https://restcountries.com/v3.1");

const baseFiltes = 'cca3,flags,name,capital,region,population';
const countriesApi = {
  getAll: () =>
    api.get(`/all?fields=${baseFiltes}`),

  getCountry:(id) => api.get(`/alpha/${id}?fields=${baseFiltes},languages,currencies,tld,borders`),


};

export { countriesApi };
