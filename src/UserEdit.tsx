import React from 'react'
import { FormDataConsumer, FormWithRedirect, Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, ReferenceArrayInput, SelectArrayInput } from 'react-admin'

export const UserEdit = (props: any) => (
  <Edit {...props}>
    <FormWithRedirect {...props} render={() => (
      <form>
        <FormDataConsumer>
          {({ formData }: any) => (<>
            <TextInput source="id" fullWidth />
            <TextInput source="name" fullWidth />
            <ReferenceInput reference="clients" source="client" fullWidth>
              <SelectInput />
            </ReferenceInput>
            <ReferenceArrayInput
              reference="projects"
              source="projects"
              label="Projects"
              filter={{ client: formData.client }}
              fullWidth >
              <SelectArrayInput />
            </ReferenceArrayInput>
          </>)}
        </FormDataConsumer>
      </form>
    )} />
  </Edit>
);
