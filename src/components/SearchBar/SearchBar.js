export default function SearchBar({ onSubmit, inputData, onChange }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <span>
          <input
            id="movies"
            type="text"
            name="search"
            value={inputData}
            onChange={onChange}
            placeholder="Enter name of movie here"
          />
          <label htmlFor="movies"></label>
        </span>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
