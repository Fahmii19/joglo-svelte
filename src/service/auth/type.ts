interface RequestLogin {
  email: string;
  password: string;
}

interface Token {
  active_token: string;
  refresh_token: string;
}

interface AuthUser {
  email?: string;
  first_name?: string;
  last_name?: string;
  agency_name?: string;
  agent?: boolean;
  allowed?: boolean;
  exp?: number;
  phone_number?: string;
  user_id?: string;
  password?: string;
  afiliasi?: string;
  spesialisasi_aset?: string[];
  spesialisasi_area?: string[];
  bio_singkat?: string;
  bio_panjang?: string;
}

interface RegisterUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
}

export type { RequestLogin, Token, AuthUser, RegisterUser };
