import React from 'react';
import { Box } from '@chakra-ui/react';
import { Children } from '../../types';

const AuthLayout = ({ children }: Children) => {
  return <Box>{children}</Box>;
};

export default AuthLayout;
