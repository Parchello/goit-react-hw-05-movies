import styled from 'styled-components';
import { TextField } from '@mui/material';

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 16px;
  width: 400px;
`;
