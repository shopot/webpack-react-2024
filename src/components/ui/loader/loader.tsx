import { type JSX } from 'react';

import { Box, CircularProgress } from '@mui/material';

type LoaderProps = {
  size?: number;
};

export const Loader = ({ size = 40 }: LoaderProps): JSX.Element => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <CircularProgress sx={{ color: 'primary.main', mr: 1 }} size={size} /> <span>Loading...</span>
  </Box>
);
