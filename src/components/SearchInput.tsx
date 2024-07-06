import { Component, ChangeEvent, FormEvent } from 'react';
import Button from './Button';
import './SearchInput.css';

interface Props {
  onSearch: (searchTerm: string) => void;
  initialSearchTerm: string;
}

interface State {
  searchTerm: string;
}

class SearchInput extends Component<Props, State> {
  state: State = {
    searchTerm: this.props.initialSearchTerm,
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps.initialSearchTerm !== this.props.initialSearchTerm) {
      this.setState({ searchTerm: this.props.initialSearchTerm });
    }
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmedSearchTerm = this.state.searchTerm.trim();
    this.props.onSearch(trimmedSearchTerm);
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="search-input"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <Button type="submit" variant="search">
          Search
        </Button>
      </form>
    );
  }
}

export default SearchInput;
