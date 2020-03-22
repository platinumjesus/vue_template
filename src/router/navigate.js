import { aboutPath } from "@/router/paths";
import _router from '@/router';

export const toAbout = () => {
    _router.push(aboutPath);
};

export const toHome = () => {
    _router.push("/");
};