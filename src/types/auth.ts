export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface User {
  id: string;
  email: string;
  storeName?: string;
}

export interface AuthResponse {
  success: boolean;
  accessToken?: string;
  expiresIn?: number;
  message?: string;
}

export interface AuthStatus {
  authenticated: boolean;
  user?: User;
}
