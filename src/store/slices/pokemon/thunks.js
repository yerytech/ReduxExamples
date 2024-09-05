import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemon } from "./pokemonSlice";

export const getPokemons = (page=0) => {
    return  async (dispatch,) => {
        dispatch(startLoadingPokemon());
        
        // Todo realizar peticion http
        
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();
       const {data} = await  pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`)
        
           
        dispatch(setPokemons({pokemons:data.results,page:page+1}));
    }
}


export const getBackPokemons = (page = 0) => {
  return async (dispatch) => {
    dispatch(startLoadingPokemon());

    // Todo realizar peticion http

    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    // const data = await resp.json();
    const { data } = await pokemonApi.get(
      `pokemon?limit=10&offset=${page * 10}`
    );
      
    dispatch(setPokemons({ pokemons: data.results, page:(page<=1)?page:page-1 }));
  };
};