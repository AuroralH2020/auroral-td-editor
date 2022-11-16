export interface AuthTokens {
  token: string;
  refreshToken: string;
}

export interface DecodedToken {
  aud: string
  iat: number
  iss: string
  name: string
  email: string
}

export interface UserProfile {
  name: string
  email: string
}

export interface UserLoginDetail {
  username: string;
  password: string;
}

export interface UserSignupDetail {
  name: string;
  email: string;
  password: string;
}