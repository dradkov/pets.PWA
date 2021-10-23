import * as AuthenticationContext from 'adal-angular';

export const adalConfig: AuthenticationContext.Options = {
    tenant: "Add process.env.TenantId" as string,
    clientId: "ClientId" as string,
    cacheLocation: "localStorage",
    redirectUri: window.location.origin + ""
}