import config from '@/constants/config';

async function getTodos(accessToken: string) {
  const response = await fetch(`${config.BACKEND_URL}/todos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  });
  const json = await response.json();
  if (!json.success) throw new Error('Success false request')
  return json;
}

async function createTodos(accessToken: string, data: any) {
  const response = await fetch(`${config.BACKEND_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  if (!json.success) throw new Error('Success false request')
  return json;
}

async function updateTodo(accessToken: string, id: string, data: any) {
  const response = await fetch(`${config.BACKEND_URL}/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  if (!json.success) throw new Error('Success false request')
  return json;
}

async function deleteTodo(accessToken: string, id: string, data: any) {
  const response = await fetch(`${config.BACKEND_URL}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  if (!json.success) throw new Error('Success false request')
  return json;
}


const todoService = {
  getTodos,
  createTodos,
  updateTodo,
  deleteTodo
}

export default todoService