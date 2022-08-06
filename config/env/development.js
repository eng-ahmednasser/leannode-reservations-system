/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }
  jwtSecret: "secret|Jwt|prefered|token@#2@",
  jwtExpires: 60 * 60 * 2,

  firebase_config: {
    url: "https://leannode-task-1.firebaseapp.com",
    type: "service_account",
    project_id: "leannode-task-1",
    private_key_id: "00ac9b6b771185e9f37f1408250c4a622e4a7f8e",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDo8WYne7Oyw92o\nSLh8DivFts3IsHNn1MbF/63Ryb3h7Kb9a3T7jbVM6h9L2ADtnpCXfS+9tsfjtPnR\n49pVF7pkddAH6wtOM5/gJLph6Sg2j7q05tqEg21mkcGGVXRmhutU9JjvvbtILSMg\nrDcKM7ATi1EN2HjOMHlITiW5LtozZ5QzBvc/TjYJLlpYxRdAC2WrvEMtaJy6pWcm\nDgnY+IiR2nNjB2UzXDWJs1vFSVV1AFmz7cZlEG3+oQi4HmDom3yDOq+0U07loDRv\n1JBKSkFFequRVy8aTD4lqeCZ2dM/bhU1cLzytNu0433y/kkCb1L8v6crAIWdZb6F\nQ1B3WStPAgMBAAECggEAQ4lhvcbOteC1zkmvO0B8jmlOxoXqH8uACf30LmPYar1L\nOSRDmX9fdjpW8o1gz4Pulg1UnyN0Vt+sop72OT+U6fWCaBlMgNLU4o6jfymzYAZR\n8osQBeV4/Yj62/DAu80YQ9xazv9qYiW8Dof/uTR9M11sFaCSfe1t7HnD1CnyV359\nykYvkawyMdD+vwsrXHx/u530xjGCA0PtzEeNEPXwe4yGW4WWzTBdYa1pJdfNJdnK\neD8xiSmW8kEjL7uV0gXkufcvt0nKdA8EM03MDivqv9e2xLgECFGJAKCVS2pukTw1\ncC5+0aI9Unf7ZL9FMsMROVPv2TUh51gg6dHb5GPsWQKBgQD3t+MuaijRE1nEhR6w\nd9uDOhI5H69rCV9bqwl3ZqnV+YYCm+gvAntTd7q66BKe2h83VnghOqjbDVMSS/bS\nNsqvkQWC8tEIiHKoUvWV5jcPSejFdUbAnmhnM0K+h6DtIAHIBIwnuxXNGgOnfNAf\nFAaOjJscJEpROG0KCw/qmdYv/QKBgQDwuw5PiY1oVA7O0SG21F5WHxQ90JRJ8mcb\nTvhSCe6kkCbSgpld5hZ1GadSQmV92Rk0Vmd87jgYAPj0pVLMVrcY9mmWyCTskZFn\nz/C7CpnwhU+2HPFdwm1F6+2N0/sVy2wMyO+ytTcxyW7Ql1Cda9NaK9993+jqWp+y\n9KH868FMOwKBgAPpgIn8HTboElPbMlfhHLNe2GjUikWreTkOY3DiSy5Y6XfjFHCh\nnmb8DhPjlF+z3ChYkj8cGQyUkkpIrtY1DVBmfurJgOmclgr4fG5om1f/d9CegIaM\nOePfWF9/7tev2Lda8wexma+KiKI9g1/qRgw8RjrUi+PqezZcZFz1Hv/VAoGBAPAy\ntOTH60DeHqheI7W50Sc9e4TySgQ+yoKFGWFCZ8vrydDiXwVCP8Y4AqwhdANOS8fd\nLwWI7I+G6OGy1Brvq2JM/K5mpfEmjl93LEx1F4TWf+LGnk9fYIkUD8Qkb7QfdYCM\nPh+ikaArzVZ0pQtuO0UN4cJHWK/+HLsDPV6QHh9hAoGAFIKR6dfq85Xc7Fp3oq0m\nujevtq4mqj/YCAjmpKl4Wo9VyElFDpMzqholjuQFozPzkMNGMBP7ApnvUkHdLmZP\n4yzJ64xbvt0FagpzahlwFoHRG+xjcOuyCaqzntR+WKUIm8ALingOnwQdvsUWz8/2\nA17XdmkbzbMyCfcoXSX7Jw4=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-q7rvg@leannode-task-1.iam.gserviceaccount.com",
    client_id: "100181543305776437012",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-q7rvg%40leannode-task-1.iam.gserviceaccount.com"
  },
  algolia_config: {
    admin_api_key: "657f2427b75e383f04187e5423ee75e2",
    api_id: "FQMP8GOFMH",
    index_name: "user_index",
  },
};
