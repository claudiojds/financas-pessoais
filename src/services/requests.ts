import {
  ApiGetUser,
  ApiSignIn,
  ApiSignUp,
  ApiUpdateUser,
} from "../@types/Auth";
import {
  ApiDeleteTransaction,
  ApiGetDashboard,
  ApiGetTrasaction,
  ApiGetTrasactions,
  ApiNewTransection,
  ApiUpdateTransaction,
  TransactionStatus,
} from "../@types/Transaction";
import { formatDate } from "../utils/formatDate";
import { api } from "./api";

// Auth
export const singUp = async (name: string, email: string, password: string) => {
  await api<ApiSignUp>({
    endpoint: "auth/sigunp",
    method: "POST",
    data: { name, email, password },
    withAuth: false,
  });
};

export const singIn = async (email: string, password: string) => {
  return await api<ApiSignIn>({
    endpoint: "auth/sihnip",
    method: "POST",
    data: { email, password },
    withAuth: false,
  });
};

// User
export const getUser = async () => {
  return await api<ApiGetUser>({
    endpoint: "auth/me",
  });
};

export const updateUser = async (name: string, email: string) => {
  return await api<ApiUpdateUser>({
    endpoint: "users",
    method: "PUT",
    data: { name, email },
  });
};

export const deleteUser = async () => {
  return await api<ApiUpdateUser>({
    endpoint: "users",
    method: "DELETE",
  });
};

// Transactions
export const getTransactions = async (page: number) => {
  return await api<ApiGetTrasactions>({
    endpoint: "transactions",
    data: { page },
  });
};

export const getTransaction = async (id: number) => {
  return await api<ApiGetTrasaction>({
    endpoint: `transactions/${id}`,
  });
};

export const newTransection = async (
  title: string,
  amount: number,
  status?: TransactionStatus
) => {
  return await api<ApiNewTransection>({
    endpoint: "transactions",
    method: "POST",
    data: { title, amount, status },
  });
};

export const updateTransection = async (
  id: number,
  amount: number,
  status?: TransactionStatus
) => {
  return await api<ApiUpdateTransaction>({
    endpoint: `transactions/${id}`,
    method: "PUT",
    data: { id, amount, status },
  });
};

export const deleteTransection = async (id: number) => {
  return await api<ApiDeleteTransaction>({
    endpoint: `transactions/${id}`,
    method: "DELETE",
  });
};

// Dashboard
export const getDashboard = async (month: string, year: string) => {
  const response = await api<ApiGetDashboard>({ endpoint: "dashborad" });

  let balance = 0;
  let pending_transections = response.data?.pending_transections ?? 0
  let completed_transections = response.data?.completed_transections ?? 0;

  if (response.data) {
    response.data.transections.map((transection) => {
      const date = formatDate(transection.created_at).split("/");

      if (date[1] == month && date[2] == year) balance += transection.amount;
    });
  }

  return {balance, pending_transections, completed_transections}
};
