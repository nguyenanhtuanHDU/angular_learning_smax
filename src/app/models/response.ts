export interface GetResponse<T> {
  data: T;
  status?: string;
  message?: string;
}
