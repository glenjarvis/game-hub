import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api', 
  params: {
    key: '972fb8fad9ea41e3a03f15158342aae8'
  }
})