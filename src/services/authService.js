import axios from 'axios';

// Register User
export const registerUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/register', userData);
        return response.data;
    } catch (err) {
        throw err.response ? err.response.data : { error: 'Network error' };
    }
};

// Login User
export const loginUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', userData);
        return response.data;
    } catch (err) {
        throw err.response ? err.response.data : { error: 'Network error' };
    }
};