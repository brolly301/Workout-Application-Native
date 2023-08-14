import axios from "axios";

export default axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "13dc615feamshcb50c1cee3796a2p154961jsncd541531dbbe",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
});
