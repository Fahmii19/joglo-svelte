import type { User } from "../users/type";

interface Property {
  harga: number;
  judul: string;
  luas_tanah: number;
  luas_bangunan: number;
  kelurahan: string;
  kecamatan: string;
  kota: string;
  tipe_aset: string;
  surat: string;
  user_id: number;
  alamat1: string;
  user?: User;
  media?: Media[];
  kamar_tidur: number;
  kamar_mandi: number;
  list_id?: number;
  deskripsi: string;
  tahun_bangun: number;
  geom: Number[];
  tipe_penjual?: string;
  like_count?: Number;
  score_total_li?: Number;
  kategori_li?: string;
  score_param_li?: Number[];
  deskripsi_param_li?: string[];
  njop?: number;
  kode_zona?: string;
  nama_zona?: string;
}

interface Media {
  media_id?: number;
  list_id?: number;
  path: string;
}

interface GeoJSON {
  type: string;
  features: Feature[];
}

interface Feature {
  type: string;
  properties: Property;
  geometry: {
    type: string;
    coordinates: number[];
  };
}

interface PropertyLiked {
  id: Number;
  user_id: Number;
  listing: Property;
  like_count: Number;
}

export type { Property, GeoJSON, Feature, Media, PropertyLiked };
