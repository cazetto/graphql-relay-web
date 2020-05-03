/* tslint:disable */
/* eslint-disable */
/* @relayHash 98ebdb63fe55a9cd9c0550571e575470 */

import { ConcreteRequest } from "relay-runtime";
export type AuthorsQueryVariables = {};
export type AuthorsQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly id: string | null;
        readonly firstName: string | null;
        readonly lastName: string | null;
        readonly userName: string | null;
    } | null> | null;
};
export type AuthorsQuery = {
    readonly response: AuthorsQueryResponse;
    readonly variables: AuthorsQueryVariables;
};



/*
query AuthorsQuery {
  users {
    id
    firstName
    lastName
    userName
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "firstName",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "lastName",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "userName",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AuthorsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AuthorsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AuthorsQuery",
    "id": null,
    "text": "query AuthorsQuery {\n  users {\n    id\n    firstName\n    lastName\n    userName\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'cbbee2d980c7f23ec56e4b975d24b2da';
export default node;
