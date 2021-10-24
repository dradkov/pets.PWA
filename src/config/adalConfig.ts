import * as AuthenticationContext from 'adal-angular';

export const adalConfig: AuthenticationContext.Options = {
  tenant: process.env.VUE_TEST as string,
  clientId: process.env.VUE_TEST as string,
  cacheLocation: "localStorage",
  redirectUri: window.location.origin + "",
}