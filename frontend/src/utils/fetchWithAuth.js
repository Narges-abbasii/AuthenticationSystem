export async function fetchWithAuth(url, options = {}) {
  const access = localStorage.getItem('access');
  const refresh = localStorage.getItem('refresh');

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${access}`,
    'Content-Type': 'application/json',
  };

  let response = await fetch(url, {
    ...options,
    headers,
  });

  // If access token expired, try refreshing
  if (response.status === 401 && refresh) {
    const refreshResponse = await fetch('http://localhost:8000/refresh/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh }),
    });

    if (refreshResponse.ok) {
      const data = await refreshResponse.json();
      localStorage.setItem('access', data.access);

      // Retry original request with new access token
      headers.Authorization = `Bearer ${data.access}`;
      response = await fetch(url, {
        ...options,
        headers,
      });
    } else {
      // If refresh failed, force logout
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      window.location.href = '/';
    }
  }

  return response;
}
