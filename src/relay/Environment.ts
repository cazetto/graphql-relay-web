import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import fetchQuery from './fetchQuery';

let network = Network.create(fetchQuery);

let source = new RecordSource();
let store = new Store(source);

let env = new Environment({
  network,
  store
});

export default env;
