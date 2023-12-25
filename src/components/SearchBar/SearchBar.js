import { Box, Button } from '@mui/material';
import { StyledFormContainer, StyledTextField } from './SearchBar.styled';

export default function SearchBar({ onSubmit, inputData, onChange }) {
  return (
    <StyledFormContainer>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
        }}
        noValidate
        onSubmit={onSubmit}
      >
        <StyledTextField
          id="movies"
          label="Enter name of movie here"
          type="search"
          variant="outlined"
          value={inputData}
          onChange={onChange}
          color="warning"
        />
        <Button
          type="submit"
          variant="contained"
          color="warning"
          sx={{ marginTop: '16px', backgroundColor: 'orange' }}
        >
          Search
        </Button>
      </Box>
    </StyledFormContainer>
  );
}
