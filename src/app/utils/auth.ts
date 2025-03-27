import { apiRequest } from './api';

// Kullanıcı Kaydı (Signup)
export async function signupUser(userData: { name: string; email: string; password: string }) {
  try {
    const data = await apiRequest('/auth/signup', 'POST', userData);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// Kullanıcı Girişi (Login)
export async function loginUser(credentials: { email: string; password: string }) {
  try {
    const data = await apiRequest('/auth/login', 'POST', credentials);
    
    if (data.token) {
      localStorage.setItem('token', data.token); // Token saklanıyor
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// Çıkış Yapma
export function logoutUser() {
  localStorage.removeItem('token');
}
