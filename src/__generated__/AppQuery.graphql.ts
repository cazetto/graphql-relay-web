/* tslint:disable */
/* eslint-disable */
/* @relayHash af5621b5136d8c87da319f353133cf45 */

import { ConcreteRequest } from "relay-runtime";
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly firstName: string | null;
    } | null> | null;
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery {
  users {
    firstName
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  users {\n    firstName\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '2d094bdf48364d02fc38a2b2c83b32b9';
export default node;
