import axios from "axios";
import { AxiosResponse } from 'axios';
import { useState, useCallback } from "react";
import { API_HOST } from "@/lib/api_data";

const axiosInstance = axios.create({baseURL: API_HOST})


export const useGetFile = (
    url: string,
    filename: string
): UseGetFileReturnType => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const perform_get = useCallback(async (params: Record<string, any> = {}) => {
        setSuccess(false);
        setError(null);
        setLoading(true);
        try {
            const res: AxiosResponse = await axiosInstance.get(url, {
                params,
                responseType: 'blob'
            });
            const blob = new Blob([res.data as BlobPart])
            const fileURL = window.URL.createObjectURL(blob);
            const fileLink = document.createElement('a');
            fileLink.href = fileURL;
            fileLink.setAttribute('download', filename);
            document.body.appendChild(fileLink);
            fileLink.click();
            document.body.removeChild(fileLink);
            setSuccess(true);
            setError(null);
        } catch (error: any) {
            setSuccess(false);
            setError(error?.response?.data || "Error Occurred");
        } finally {
            setLoading(false);
            setLoaded(true);
        }
    }, [url]);

    const reset = useCallback(() => {
        setLoaded(false);
        setLoading(false);
        setSuccess(false);
        setError(null);
    }, []);

    return { 
        loaded, 
        setLoaded, 
        loading, 
        success, 
        error, 
        perform_get, 
        reset 
    };
};

export const usePost = <T = any>(url: string, initialData: T | null = null): UsePostReturnType<T> => {
    const [data, setData] = useState<T | null>(initialData);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const perform_post = useCallback(async (payload?: Record<string, any>, config?: Record<string, any>): Promise<void> => {
        setLoading(true);
        setSuccess(false);
        setError(null);
        try {
            const res = await axiosInstance.post(url, payload, config);
            setData(res.data);
            setSuccess(true);
        } catch (error: any) {
            setError(error?.response?.data ? error?.response?.data : "Error occurred");
            setSuccess(false);
        } finally {
            setLoading(false);
            setLoaded(true);
        }
    }, [url]);

    const reset = useCallback(() => {
        setData(initialData);
        setLoaded(false);
        setLoading(false);
        setSuccess(false);
        setError(null);
    }, [initialData]);

    return {
        data,
        loaded,
        setLoaded,
        loading,
        success,
        error,
        perform_post,
        reset
    };
};