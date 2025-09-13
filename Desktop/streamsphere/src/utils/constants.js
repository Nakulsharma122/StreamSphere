export const logo = "https://play-lh.googleusercontent.com/0C0cOYf8rxm7hdx-mrBFi7iTBfUYKzScGJy0s82RKfn2MOh3DJdblO9hmlCqjfD6KeNt=w240-h480-rw";
export const user_avatar = "https://avatars.githubusercontent.com/u/128743517?v=4&size=64";

export const backgroundImage ="https://images.pexels.com/photos/23495578/pexels-photo-23495578/free-photo-of-a-group-of-people-sitting-on-a-couch-watching-tv.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export const api_options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY ,
    }
  };


  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

  export const SUPPORTED_LANGUAGES = [
    {identifier:"en", name :"English"},
    {identifier:"hindi", name :"Hindi"},
    {identifier:"spanish", name :"Spanish"},
  ];


  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
