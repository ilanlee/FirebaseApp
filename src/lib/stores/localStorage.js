const LOCAL_STORAGE_KEY = "user"; 

export function loadUserFromLocalStorage() {
  const storedUser = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedUser) {
    return JSON.parse(storedUser); 
  }
  return null; 
}

export function saveUserToLocalStorage(user) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
}

export function removeUserFromLocalStorage() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}