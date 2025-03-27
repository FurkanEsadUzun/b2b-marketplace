const BASE_URL = 'https://b2b-backend-production.up.railway.app/api';

// API İstekleri için yardımcı fonksiyon
export async function apiRequest(endpoint: string, method: string = 'GET', body?: any, token?: string) {
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Token varsa Authorization başlığına ekle
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Bir hata oluştu.');
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || 'İstek sırasında bir hata oluştu.');
  }
}
