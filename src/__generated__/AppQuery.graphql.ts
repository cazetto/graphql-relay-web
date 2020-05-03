/* tslint:disable */
/* eslint-disable */
/* @relayHash 58611af7ba9a1f3a4268886a7f638cbd */

import { ConcreteRequest } from "relay-runtime";
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly me: {
        readonly id: string | null;
        readonly firstName: string | null;
        readonly lastName: string | null;
        readonly userName: string | null;
    } | null;
    readonly users: ReadonlyArray<{
        readonly id: string | null;
        readonly firstName: string | null;
        readonly lastName: string | null;
        readonly userName: string | null;
    } | null> | null;
    readonly products: ReadonlyArray<{
        readonly id: string | null;
        readonly name: string | null;
        readonly description: string | null;
        readonly price: string | null;
        readonly stockQtt: number | null;
    } | null> | null;
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery {
  me {
    id
    firstName
    lastName
    userName
  }
  users {
    id
    firstName
    lastName
    userName
  }
  products {
    id
    name
    description
    price
    stockQtt
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  (v0/*: any*/),
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
],
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "me",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": (v1/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
    "selections": (v1/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "products",
    "storageKey": null,
    "args": null,
    "concreteType": "Product",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "price",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "stockQtt",
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
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  me {\n    id\n    firstName\n    lastName\n    userName\n  }\n  users {\n    id\n    firstName\n    lastName\n    userName\n  }\n  products {\n    id\n    name\n    description\n    price\n    stockQtt\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c7f472edce9636065b7c5987ff625593';
export default node;
