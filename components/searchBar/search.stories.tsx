import SearchBar from './searchBar';

export default { title: 'SearchBar' };

export const simple = () => <SearchBar placeholder='search' value='value' setValue={(e: 'setValue')=> e} />;