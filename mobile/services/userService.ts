import config from '@/constants/config';

async function login(data: any) {
  const response = await fetch(`${config.BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  if (!json.success) throw new Error('Success false request')
  return json;
}

async function register(data: any) {
  const response = await fetch(`${config.BACKEND_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  if (!json.success) throw new Error('Success false request')
  return json;
}

const userService = {
  login,
  register
}

export default userService