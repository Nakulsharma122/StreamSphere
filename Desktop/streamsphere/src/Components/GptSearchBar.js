import React, { useRef } from 'react'
import Language from '../utils/LanguageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import { api_options } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const langKey  = useSelector((store) => store.config.lang);
  const searchText = useRef(null); 
  const dispatch = useDispatch();

  const searchMovieTMB =  async (movie) =>{
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",api_options
      );
      const json = await data.json();
      return json.results;
  }
  const handleGptSearch =  async () =>{
    
     console.log(searchText.current.value);
     const gptQuery = "Act as Movie Recommedation system and suggest some movie for the query "+ searchText.current.value + 
     "only give me name of 5 movies , comma separted like the example result given ahead . Example : Hera Pheri , Don , Dhol , Golmaal , Koi Mil Gaya";
     try {
      const gptResult = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: gptQuery }],
      }); 
      console.log(gptResult?.choices[0]?.message?.content);

      const gptMovies = gptResult?.choices[0]?.message?.content.split(",");

       if (!gptMovies) return <div>Loading</div>
       
       const promiseArray = gptMovies.map(movies => searchMovieTMB(movies));
       const tmdbResult = await Promise.all(promiseArray);
        console.log(tmdbResult);

        dispatch(addGptMovieResult({movieNames : gptMovies, movieResult: tmdbResult}));
        
    } catch (err) {
      console.error("OpenAI API Error:", err.response ? err.response.data : err);
    }
  }
  return (
    <div className='pt-[60%] md:pt-[20%] flex justify-center'>
       <form className='w-[100%] md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}> 
        <input  ref ={searchText}
        type="text"
        className='p-4 m-4 col-span-9'
        placeholder={Language[langKey].gptSearchHolder} />
        <button className='col-span-3 m-4 py-2 px-4  bg-green-600 text-white rounded-lg' onClick={handleGptSearch}>
           {Language[langKey].search} </button></form> 
    </div>
  )
}

export default GptSearchBar