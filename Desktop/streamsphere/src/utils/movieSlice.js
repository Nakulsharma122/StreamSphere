import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice(
    {
       name : "movies",
       initialState:{
        nowPlayingMovies : null,
        trailerVideo:null,
        popularMovies : null,
        topRatedMovies : null ,
        upcomingMovies : null
       },
       reducers:{
        setNowPlayingMovies :(state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        setAddTrailerVideo : (state, action) =>{
            state.trailerVideo = action.payload
        },
        setPopularMovies : (state, action) =>{
            state.popularMovies = action.payload
        },
        setUpcomingMovies : (state, action) =>{
            state.upcomingMovies = action.payload
        },
        setTopRatedMovies : (state, action) =>{
            state.topRatedMovies= action.payload
        }
        
       } 
    }
);
export const {setNowPlayingMovies,setAddTrailerVideo,setPopularMovies,setUpcomingMovies,setTopRatedMovies} = movieSlice.actions;
export  default movieSlice.reducer; 