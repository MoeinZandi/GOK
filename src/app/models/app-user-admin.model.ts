export interface AppUserAdmin {
    userName: string;
    email: string;
    age: number;
    phoneNumber: string;
    gender: string;
    city: string;
    country: string;
    password: string;
    confirmPassword: string;
    avatar: string | undefined;
    adminCode: string
}