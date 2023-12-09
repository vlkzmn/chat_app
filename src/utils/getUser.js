export function getUser() {
  const storage = localStorage.getItem('user');

  return JSON.parse(storage);
}
