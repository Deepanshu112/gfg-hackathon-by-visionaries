import React, { useEffect } from 'react'
import axios from 'axios'

export const useAxiosFetch = () => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:5000/',
    });

    //Interceptors
    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use((config) => {
            return config;
        }, function (error){
            return Promise.reject(error);
        });

        //Response Interceptor
        const responseInterceptor = axios.interceptors.response.use((response) => {
            return response;
        }, function(error){
            return Promise.reject(error);
        });

        return () => {
            axiosInstance.interceptors.request.eject(requestInterceptor);
            axiosInstance.interceptors.response.eject(requestInterceptor);
        }
    }, [axiosInstance])

  return axiosInstance;
}
