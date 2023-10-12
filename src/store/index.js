
import {
    configureStore,
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  
//   import { MY_API_KEY, TMDB_BASE_URL } from "../utils/constant";
  
  const initialState = {
    movies: [],
    generesLoaded: false,
    genres: [],
  };
  
  export const getGenres = createAsyncThunk("netflix/genres", async () => {
    const {
      data: { genres },
    } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=d8deea3b7f7a19a55c628474ac73277b`
    );
    console.log(genres);
    return genres;
  });
  
  
  
  const arrayOfMovieData = (array, moviesArray, generes)=>{
    array.forEach((movie)=>{
      const moviesGenres = []
      movie.genre_ids.forEach((genre)=>{
        const name = generes.find(({id})=> id  === genre)
        if(name) moviesGenres.push(name.name)
      })
      if(movie.backdrop_path)
      moviesArray.push({
          id: movie.id,
          name: movie?.original_name ? movie.original_name : movie.original_title,
          image: movie.backdrop_path,
          genres: moviesGenres.slice(0,2)
      })
    })
  }
  
  const getMovieData = async (api, genres, paging = false)=>{
    const moviesArray = []
    for(let i = 1; moviesArray.length < 80 && i < 10; i++){
       const {data: {results},} =  await axios.get(`${api}${paging ? `&page=${i}` : ""}`)
        arrayOfMovieData (results, moviesArray, genres)
    }
    // console.log(moviesArray);
    return moviesArray
  }
  
  
  export const fetchMovies = createAsyncThunk("netflix/trending", async ({type}, myThunk)=>{
    const {netflix: {genres},} = myThunk.getState()
   
   return getMovieData(`https://api.themoviedb.org/3/trending/${type}/week?api_key=d8deea3b7f7a19a55c628474ac73277b`, genres, true );
//    console.log(data1);
   
  })
  
  const NetflixSlice = createSlice({
    name: "Netflix",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(getGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
        state.generesLoaded = true;
      });
      builder.addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload; 
      });
    },
  });
  
  export const store = configureStore({
    reducer: {
      netflix: NetflixSlice.reducer,
    },
  });
  