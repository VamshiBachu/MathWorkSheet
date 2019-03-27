// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  analytics: {
    trackingId: 'UA-255878-12'
  },
  firebase: {
    apiKey: "AIzaSyDRjo1edtcpbdHxJSTy9a899KTYP1KIQkM",
    authDomain: "mathworksheet-e7d9a.firebaseapp.com",
    databaseURL: "https://mathworksheet-e7d9a.firebaseio.com",
    projectId: "mathworksheet-e7d9a",
    storageBucket: "mathworksheet-e7d9a.appspot.com",
    messagingSenderId: "61700277710"
}
};
