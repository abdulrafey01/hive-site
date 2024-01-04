import type { Schema, Attribute } from '@strapi/strapi';

export interface MyDuoMyDuoComponent extends Schema.Component {
  collectionName: 'components_my_duo_my_duo_components';
  info: {
    displayName: 'my_duo_component';
    icon: 'alien';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'my-duo.my-duo-component': MyDuoMyDuoComponent;
    }
  }
}
