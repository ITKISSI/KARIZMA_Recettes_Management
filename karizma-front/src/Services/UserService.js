import axios from "axios";
const API_URL ="http://localhost:8080/users/";


const getuser = (usersId) => {
    return axios.get(`${API_URL}${usersId}`);
}

const login = async (user) => {
    try {
      const response = await axios.post(API_URL, user);
      const userData = response.data;
  
      localStorage.setItem('user', JSON.stringify(userData));
  
      return userData; 
    } catch (error) {
      
      throw new Error('Login failed. Please check your credentials.');
    }
  };

const usersService = {
    getuser,
    login,
};


export default usersService;