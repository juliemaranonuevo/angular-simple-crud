// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// 192.168.1.10
// const domain = 'localhost';
const domain = '192.168.1.10';
const port = '8080';

export const environment = {
  production: false,
  dbConnectionUrl: `http://${domain}:${port}/api/check-connection`,
  userUrl: `http://${domain}:${port}/api/users`,
  // userCreateUrl: `http://${domain}:${port}/api/users`,
  
};

/*
 * userListUrl
 * userCreateUrl
 * userUpdateUrl
 * userDeleteUrl
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */

 
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
