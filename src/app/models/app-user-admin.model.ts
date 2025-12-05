export interface AppUserAdmin {
    userName: string;
    email: string;
    dateOfBirth: string | undefined;
    phoneNumber: string;
    gender: string;
    city: string;
    country: string;
    password: string;
    confirmPassword: string;
    adminCode: string
}