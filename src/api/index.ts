import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import { serverUrl } from "./config";
import type { walletLoginPayload } from "./interface";

import type { AxiosErrorResponse, AxiosSuccessResponse } from "./types";

const prepareData = (
    payload: Record<string, any>,
    formData = new FormData(),
    parentKey = ""
): FormData => {
    for (const key in payload) {
        const value = payload[key];
        const formKey = parentKey ? `${parentKey}[${key}]` : key;

        if (
            value instanceof File ||
            (typeof File !== "undefined" && value instanceof Blob)
        ) {
            formData.append(formKey, value);
        } else if (typeof value === "object" && value !== null) {
            prepareData(value, formData, formKey);
        } else {
            formData.append(formKey, value);
        }
    }
    return formData;
};

const extractErrorMessage = (error: AxiosErrorResponse): string => {
    return (
        error?.response?.data?.message ||
        error.message ||
        "An unexpected error occurred."
    );
};

const handleRequest = async (request: Promise<AxiosSuccessResponse>) => {
    try {
        const response = await request;
        return response.data;
    } catch (err: unknown) {
        const error = err as AxiosErrorResponse;
        throw extractErrorMessage(error);
    }
};

const ApiClient = () => {
    const apiClient = axios.create({
        baseURL: serverUrl,
        withCredentials: true,
    });

    apiClient.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const token = localStorage.getItem("access");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    return {
        walletLogin: (payload: walletLoginPayload) =>
            handleRequest(
                apiClient.post("/auth/connect-wallet", prepareData(payload))
            ),
    };
};

export default ApiClient();
