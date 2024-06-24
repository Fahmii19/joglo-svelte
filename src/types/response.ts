interface Response<T> {
  status: number;
  message: string;
  data: T;
}

export type { Response };
