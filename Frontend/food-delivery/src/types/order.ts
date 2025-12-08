// src/types/order.ts
export type OrderStatus = 'pending' | 'confirmed' | 'cooking' | 'delivering' | 'completed' | 'cancelled';

export interface Order {
    id: string;
    customerName: string;
    items: string; // VD: "2x Phở Bò, 1x Trà đá"
    totalAmount: number;
    status: OrderStatus;
    createdAt: string; // Giờ đặt: "10:30"
    paymentMethod: 'COD' | 'Banking';
}