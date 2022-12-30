
export const exerciseOptions={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a9a72b9e18msh92fb8f9aa76ad12p1fa805jsn2e949434f909',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };





export const fetchData= async(url,options)=>{

const response=await fetch(url,options);

const data=await response.json();



return data;  

}