// Obetr os status de uma trtansação
export type TransactionStatus = "pending" | "completed"

export type Transaction = {
    id: number,
    title: string,
    status: TransactionStatus,
    amount: number,
    created_at: number,
    user_id:number
}

export type TransactionDashboard = Omit<Transaction, 'id' | 'title' | 'status' | 'user_id'>

export type ApiGetTrasactions = {
    transections: {
        itemsReceived: number,
        curPage: number,
        nextPage?: string,
        prevPage?: string,
        offset: number,
        itemsTotal: number,
        pageTotal: number,
        items: Transaction
    }
}

export type ApiGetTrasaction = {
    transections: Transaction
}

export type ApiGetDashboard = {
    transections: TransactionDashboard[],
    pending_transections: number,
    completed_transections: number
}

export type ApiNewTransection = {
    transaction: Transaction
}

export type ApiUpdateTransaction = {
    transaction: Transaction
}

export type ApiDeleteTransaction = {
    success: boolean
}