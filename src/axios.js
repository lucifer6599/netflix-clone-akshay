//Akshay Sinha 6-1-2021

//whenever we make a file which is not basically a file 
//of component we basically name it as small letters

import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
})

export default instance;
//u can only have one default export and we can rename it anywhere