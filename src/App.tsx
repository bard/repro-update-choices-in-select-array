import React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { UserEdit } from './UserEdit';
import fakeRest from 'ra-data-fakerest';

const dataProvider = fakeRest({
  users: [
    { id: 1, name: 'Wile', client: 10, projects: [1000] },
    { id: 2, name: 'Arthur', client: 20, projects: [3000] }
  ],
  clients: [
    { id: 10, name: 'Acme, Inc.' },
    { id: 20, name: 'Sirius Cybernetics' },
  ],
  projects: [
    { id: 1000, name: 'Roadrunning', client: 10 },
    { id: 2000, name: 'Looneytuning', client: 10 },
    { id: 3000, name: 'Inter-galactic Highway', client: 20 },
    { id: 4000, name: 'Vogon Anthology', client: 20 },
  ]
});

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} edit={UserEdit} />
    <Resource name="clients" intent="register" />
    <Resource name="projects" intent="register" />
  </Admin>
);

export default App;
