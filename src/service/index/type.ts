// Request and Response Type for Index Service
interface RequestIndex {
  lat: number;
  lng: number;
}

// Environment Carrying Capacity Index (ECCI) Type
interface Ecci {
  score_all: number;
  eci: string;
  kategori: string;
  score: ScoreEcci[];
  detail: DetailEcci[];
}

interface ScoreEcci {
  topografi: number;
  kebencanaan: number;
  ketersediaan_air: number;
  kualitas_vegetasi: number;
  pengolahan_limbah: number;
}

interface DetailEcci {
  topografi: string;
  risk_banjir: string;
  risk_landsub: string;
  risk_kebakaran: string;
  air_tanah: string;
  pipa_air: string;
  kualitas_vegetasi: string;
  jaringan_ipal: string;
  ket_tps: string;
}

// Livability Index (LI) Type
interface Livability {
  entropy: number;
  index_kon: number;
  budaya: number;
  fasilitas: number;
  pekerjaan: number;
  pelayanan: number;
  pendidikan: number;
  ruang_terbuka: number;
  transportasi: number;
  livability: number;
  deskripsi: DeskripsiLivability[];
}

interface DeskripsiLivability {
  budaya: string;
  entropy: string;
  fasilitas: string;
  pekerjaan: string;
  pelayanan: string;
  indeks_kon: string;
  livability: string;
  pendidikan: string;
  transportasi: string;
  ruang_terbuka: string;
}

// Index Type
interface Index {
  ecci: Ecci;
  livability: Livability;
}

export type {
  Ecci,
  ScoreEcci,
  DetailEcci,
  Livability,
  DeskripsiLivability,
  Index,
  RequestIndex,
};
