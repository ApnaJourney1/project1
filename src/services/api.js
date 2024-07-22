const API_URL = 'http://localhost:5000/api';

export async function apiRequest(endpoint, method = 'GET', data = null, isFormData = false) {
  const options = {
    method,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  };

  if (data) {
    if (isFormData) {
      options.body = data;
    } else {
      options.headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(data);
    }
  }

  const response = await fetch(`${API_URL}${endpoint}`, options);
  
  if (!response.ok) {
    throw new Error('API request failed');
  }

  return response.json();
}

