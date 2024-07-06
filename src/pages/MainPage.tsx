import { Component } from 'react';
import SearchInput from '../components/SearchInput';
import Results from '../components/Results';
import ErrorBoundary from '../components/ErrorBoundary';
import Button from '../components/Button';
import './MainPage.css';

class MainPage extends Component {
  state = {
    searchTerm: '',
    isInitialLoadComplete: false,
  };

  componentDidMount() {
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    this.setState({ searchTerm: savedSearchTerm, isInitialLoadComplete: true });
  }

  handleSearch = (searchTerm: string) => {
    localStorage.setItem('searchTerm', searchTerm);
    this.setState({ searchTerm });
  };

  render() {
    const { searchTerm, isInitialLoadComplete } = this.state;

    return (
      <ErrorBoundary>
        <div className="main-page">
          <Button
            variant="errorBoundary"
            onClick={() => {
              throw new Error('Test error');
            }}
          >
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
        </div>
      </ErrorBoundary>
    );
  }
}

export default MainPage;
