import AuthenticationContext from "adal-angular";
import { adalConfig } from "@/config/adalConfig";
import LocalStorageService from "./LocalStorageService";

class AuthService {
    public authenticationContext = new AuthenticationContext(adalConfig);
    public localStorageService = new LocalStorageService();

    public initialize(): Promise<void> {
        this.localStorageService.set({
            key: 'VUE_APP_ENDPOINT_API',
            value: process.env.VUE_APP_ENDPOINT_API
        });
        this.authenticationContext = new AuthenticationContext(adalConfig);
        return new Promise((resolve) => {
            const user = this.authenticationContext.getCachedUser();
            if (user) {
                resolve();
            } else {
                this.signIn();
            }
            resolve();
        })
    }

    public signIn() {
        this.authenticationContext.login();
    }

    public signOut() {
        this.authenticationContext.logOut();
    }
}

export default AuthService;