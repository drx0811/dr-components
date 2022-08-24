---
nav:
  title: 组件
  path: /components
---

## FormJson

Demo:

```tsx
import React from 'react';
import { FormJson } from 'dr-components';
import './index.less';
const schema = {
  title: 'Schema default properties',
  type: 'object',
  properties: {
    valuesInFormData: {
      title: 'Values in form data',
      $ref: '#/definitions/defaultsExample',
    },
    noValuesInFormData: {
      title: 'No values in form data',
      $ref: '#/definitions/defaultsExample',
    },
  },
  definitions: {
    defaultsExample: {
      type: 'object',
      properties: {
        scalar: {
          title: 'Scalar',
          type: 'string',
          default: 'scalar default',
        },
        array: {
          title: 'Array',
          type: 'array',
          items: {
            type: 'object',
            properties: {
              nested: {
                title: 'Nested array',
                type: 'string',
                default: 'nested array default',
              },
            },
          },
        },
        object: {
          title: 'Object',
          type: 'object',
          properties: {
            nested: {
              title: 'Nested object',
              type: 'string',
              default: 'nested object default',
            },
          },
        },
      },
    },
  },
};
export default () => <FormJson schema={schema} />;
```
