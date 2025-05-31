import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export interface RetryableRequest extends InternalAxiosRequestConfig {
    _retry?: boolean;
}


export interface ApiResponse {
    code: 0 | 1 | 2 | 3 | 4 | 11 | 78 | 79 | 104;
    message?: string;
    data: Record<any, any>;
}

export type AxiosErrorResponse = AxiosError<
    Omit<ApiResponse, "data">
>;

export type AxiosSuccessResponse = AxiosResponse<ApiResponse>;
