export const exerciseOptions = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '67e30833d5msh2aa57b3be8cb21bp12b8aajsnddd14d1033fe'
    
  }
};
  
export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };

export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
    headers: {
      'X-RapidAPI-Key': '67e30833d5msh2aa57b3be8cb21bp12b8aajsnddd14d1033fe',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
