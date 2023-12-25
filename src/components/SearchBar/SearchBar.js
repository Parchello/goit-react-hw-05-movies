import { Box, Button } from '@mui/material';
import { StyledFormContainer, StyledTextField } from './SearchBar.styled';

export default function SearchBar({ onSubmit, inputData, onChange }) {
  return (
    <StyledFormContainer>
      {/* <form onSubmit={onSubmit}>
        <input
          id="movies"
          type="text"
          name="search"
          value={inputData}
          onChange={onChange}
          placeholder="Enter name of movie here"
        />
        <TextField id="movies" label="Search field" type="search" />
        <label htmlFor="movies"></label>

        <button type="submit">Search</button>
      </form> */}
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
