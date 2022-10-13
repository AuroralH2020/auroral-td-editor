export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface UserProfile {
  name: string;
  email: string;
}

export interface UserLoginDetail {
  email: string;
  password: string;
}

export interface UserSignupDetail {
  name: string;
  email: string;
  password: string;
}

export interface UserLoginServerResponse {
  tokens: AuthTokens;
  profile: UserProfile;
}