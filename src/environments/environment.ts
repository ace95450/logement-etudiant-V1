// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC8rFD9SmvQs-XNIZZQIogg6GoMCNJUjUg",
      authDomain: "logetudiant-5880f.firebaseapp.com",
      databaseURL: "https://logetudiant-5880f.firebaseio.com",
      projectId: "logetudiant-5880f",
      storageBucket: "logetudiant-5880f.appspot.com",
      messagingSenderId: "793086693127"
    },
  users_endpoit: 'users',
  chats_endpoit: 'chats',

  mapbox: {
    accessToken: 'pk.eyJ1IjoiYWNlOTU0NTAiLCJhIjoiY2pxd2c3anpqMTJhajN4cHR5ZTE2Z2xxZCJ9.fk5CBUvAivS00i8vLHdCAA'
  },

}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
