/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonBase = styled.button`

  width: 50%;
  padding: 15px;
  font-size: 14px;
  margin-left:25%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight:bold;
  
  outline: 0;
  margin-bottom: 25px;`;

export default function Button({ type, disabled, ...props }) {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <ButtonBase type={type} disabled={disabled} {...props} />

    </div>
  );
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,

};
