/************************* imports *************************/
import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api/v1.0/auth" : "/api/v1.0/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
   user: null,
   isAuthenticated: false,
   error: null,
   isLoading: false,
   isCheckingAuth: true,
   message: null,

   signup: async (email, password, name) => {
      set({ isLoading: true, error: null });
      try {
         const response = await axios.post(`${API_URL}/sign-up`, { email, password, name });
         set({ user: response.data.user, isAuthenticated: true, isLoading: false });
      } catch (error) {
         set({ error: error.response.data.message || "Error signing up", isLoading: false });
         throw error;
      }
   },
   signin: async (email, password) => {
      set({ isLoading: true, error: null });
      try {
         const response = await axios.post(`${API_URL}/sign-in`, { email, password });
         set({
            isAuthenticated: true,
            user: response.data.user,
            error: null,
            isLoading: false,
         });
      } catch (error) {
         set({ error: error.response?.data?.message || "Error signing in", isLoading: false });
         throw error;
      }
   },
   verifyEmail: async (code) => {
      set({ isLoading: true, error: null });
      try {
         const response = await axios.post(`${API_URL}/verify-email`, { code });
         set({ user: response.data.user, isAuthenticated: true, isLoading: false });
         return response.data;

      } catch (error) {
         set({
            error: error.response.data.message || "Error verifying email",
            isLoading: false
         });
         throw error;
      }
   },
   checkAuth: async () => {
      set({ isCheckingAuth: true, error: null });
      try {
         const response = await axios.get(`${API_URL}/check-authorization`);
         set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
      } catch (error) {
         set({ error: null, isCheckingAuth: false, isAuthenticated: false });
      }
   },



















}));