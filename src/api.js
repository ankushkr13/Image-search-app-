import axios from 'axios';

const API_KEY = 'tKBDO_3NpgQS1oILk9etjAvviM_uq6yhnU0X5Tx8SGY';

export const fetchImages = async (query) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
