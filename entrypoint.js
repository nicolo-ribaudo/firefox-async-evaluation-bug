// entrypoint.js

import { logs, pB, pE_start, pB_start } from "./setup.js";

const pA = import("./a.js");
let pD;

pB_start.promise.then(() => {
  return import("./c.js");
}).then(() => {
  pD = import("./d.js");
  return pE_start.promise;
}).then(() => {
  pB.resolve();
  return Promise.all([pA, pD]);
}).then(() => {
  (typeof alert === "undefined" ? print : alert)(logs + ` (should be A,D)`);
});
