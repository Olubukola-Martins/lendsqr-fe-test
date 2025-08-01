import type { StatusType } from "../../components/Tag/StatusTag";

export interface PaginationParams {
  offset?: number;
  limit?: number;
}

export interface FilterParams {
  organization?: string;
  username?: string;
  email?: string;
  dateJoined?: string;
  phone?: string;
  status?: string;
}

export interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  dateJoined: string;
  phone: string;
  status: StatusType;
  
}

export interface UseFetchUsersProps {
  pagination: PaginationParams;
  filters: FilterParams;
}

export interface UseFetchUsersResult {
  data: User[];
  loading: boolean;
  errorMessage: string | null;
}
