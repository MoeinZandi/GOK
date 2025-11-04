export interface AppUser {
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
    // captchaToken: string;
}