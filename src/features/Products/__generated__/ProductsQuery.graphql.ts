/* tslint:disable */
/* eslint-disable */
/* @relayHash bfb53a61aa009492a3a0aae8f6fb019b */

import { ConcreteRequest } from "relay-runtime";
export type ProductsQueryVariables = {};
export type ProductsQueryResponse = {
    readonly products: ReadonlyArray<{
        readonly id: string | null;
        readonly name: string | null;
    } | null> | null;
};
export type ProductsQuery = {
    readonly response: ProductsQueryResponse;
    readonly variables: ProductsQueryVariables;
};



/*
query ProductsQuery {
  products {
    id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "products",
    "storageKey": null,
    "args": null,
    "concreteType": "Product",
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
        "name": "name",
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
    "name": "ProductsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ProductsQuery",
    "id": null,
    "text": "query ProductsQuery {\n  products {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd792ff0f30b87c0e2975db2b6cd88a29';
export default node;
