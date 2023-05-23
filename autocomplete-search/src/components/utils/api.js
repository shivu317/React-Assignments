import axios from 'axios';

export const fetchStates = async () => {
  try {
    const response = await axios.get(
      `http://cdn-api.co-vin.in/api/v2/admin/location/states`
    );

    return response.data.states;
  } catch (error) {
    console.error('Error fetching states:', error);
  }
};
