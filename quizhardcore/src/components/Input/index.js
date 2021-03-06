/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  
  font-weight:bold;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color:white;
  background-color: black;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <InputBase onChange={onChange} placeholder={placeholder} {...props} />

    </div>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
