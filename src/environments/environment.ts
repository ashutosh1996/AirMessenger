// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD9SmJ_yKt9ajrKfvSCcXWeOTX1_g1gvpc',
    authDomain: 'airmessenger-bface.firebaseapp.com',
    databaseURL: 'https://airmessenger-bface.firebaseio.com',
    projectId: 'airmessenger-bface',
    storageBucket: 'airmessenger-bface.appspot.com',
    messagingSenderId: '920053574006'
  }
};
