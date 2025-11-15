export type Restaurant = {
    id: number;
    bannerUrl: string;
    name: string;
    address: string;
    rating: number;
    deliveryTime: number;
    deliveryFee: number;
    tags: string[];
};

export type FoodItem = {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
};

export type OrderStatus = 'PENDING' | 'PREPARING' | 'DELIVERED' | 'CANCELLED';

export type OrderItem = {
    id: string;
    foodName: string;
    quantity: number;
    price: number;
};

export type Order = {
    id: string;
    customerName: string;
    customerAddress: string;
    totalAmount: number;
    status: OrderStatus;
    items: OrderItem[];
    createdAt: string;
};