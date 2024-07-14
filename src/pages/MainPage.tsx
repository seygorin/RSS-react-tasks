import { Component } from 'react';
import SearchInput from '../components/SearchInput';
import Results from '../components/Results';
import Button from '../components/Button';
import './MainPage.css';

class MainPage extends Component {
  state = {
    searchTerm: '',
    isInitialLoadComplete: false,
    hasError: false,
  };

  componentDidMount() {
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    this.setState({ searchTerm: savedSearchTerm, isInitialLoadComplete: true });
  }

  handleSearch = (searchTerm: string) => {
    localStorage.setItem('searchTerm', searchTerm);
    this.setState({ searchTerm });
  };

  throwError = (): void => {
    this.setState({ hasError: true });
  };

  render() {
    const { searchTerm, isInitialLoadComplete } = this.state;
    if (this.state.hasError) {
      throw new Error('Test error');
    }
    return (
      <main className="main-page">
        <Button variant="errorBoundary" onClick={this.throwError}>
          Throw Error
        </Button>
        <div className="top-section">
          <SearchInput
            onSearch={this.handleSearch}
            initialSearchTerm={searchTerm}
          />
        </div>
        <div className="bottom-section">
          {isInitialLoadComplete && <Results searchTerm={searchTerm} />}
        </div>
      </main>
    );
  }
}

export default MainPage;
