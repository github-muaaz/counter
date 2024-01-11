// import Raven from "raven-js";

export function init() {
//   Raven.config("https://05323d37c9a947eba9daaaab1e6171a9@sentry.io/1249956", {
//     release: "1-0-0",
//     environment: "development-test",
//   }).inctall();
}

export function log(error) {
  console.log(error);
//   Raven.captureExeption(error);
}
