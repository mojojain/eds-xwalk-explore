import React from 'react';
import { Tabs } from '@kubit-ui-web/react-components'

const Component = () => {
  return (
        <Tabs
        variant="DEFAULT"
        tabs={[{ content: 'option 1' }, { content: 'option 2' }, { content: 'option 3' }]}
        content={['Content option 1', 'Content option 2', 'Content option 3']}
    />
  );
};

export default Component;

