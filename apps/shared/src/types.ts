export interface MySharedType {
  id: string;
  name: string;
}

export type StorageFileInfo = {
  url: string;
};

export interface ApiResponse<T> {
  status: number;
  message: string;
  data?: T;
  error?: string;
}
