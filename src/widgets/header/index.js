import React from 'react';

import {Header as RNEHeader} from '@rneui/themed';

export function Header() {
  return (
    <RNEHeader
      centerComponent={{ text: 'Header', style: {fontSize: 18} }}
    />
  );
}
