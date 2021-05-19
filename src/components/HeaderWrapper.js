import React from 'react';
import PropTypes from 'prop-types';
import { Box, Close } from '@theme-ui/components';
import { useHistory } from 'react-router';
import HeaderContent from './HeaderContent';

const HeaderWrapper = ({ edit, children }) => {
  const history = useHistory();
  return (
    <Box
      p={3}
      bg="muted"
      variant="radii"
      sx={{ mx: [0, 0, 2], mt: [5, 4, 2], position: 'relative' }}
    >
      {edit && (
        <Close
          sx={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }}
          onClick={() => history.push('/')}
        />
      )}
      <HeaderContent edit={edit} />
      {children}
    </Box>
  );
};

export default HeaderWrapper;
HeaderWrapper.propTypes = {
  edit: PropTypes.bool,
  children: PropTypes.node,
};

HeaderWrapper.defaultProps = {
  edit: false,
};
