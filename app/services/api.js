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

const countriesApi = {
  getAll: () =>
    api.get("/all?fields=cca3,flags,name,capital,region,population"),
  getCountry:() => api.get("/name/{name")
};

export { countriesApi };
