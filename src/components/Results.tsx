import { Component } from 'react';
import { fetchPeople } from '../services/api';
import { Person } from '../services/interfaces';
import Button from './Button';
import './Results.css';

interface Props {
  searchTerm: string;
}

interface State {
  people: Person[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  isSearchMode: boolean;
}

class Results extends Component<Props, State> {
  state: State = {
    people: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
    isSearchMode: false,
  };

  componentDidMount() {
    this.loadPeople();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.setState(
        { currentPage: 1, isSearchMode: this.props.searchTerm !== '' },
        () => {
          this.loadPeople();
        },
      );
    }
  }

  async loadPeople() {
    const { searchTerm } = this.props;
    const { currentPage } = this.state;
    this.setState({ loading: true, error: null });

    try {
      const response = await fetchPeople(searchTerm, currentPage);
      this.setState({
        people: response.data.results,
        loading: false,
        totalPages: Math.ceil(response.data.count / 10),
      });
    } catch (error) {
      console.error(error);
      this.setState({ error: 'Failed to fetch data', loading: false });
    }
  }

  handlePageChange = (direction: string) => {
    this.setState(
      (prevState) => {
        const newPage =
          direction === 'next'
            ? prevState.currentPage + 1
            : prevState.currentPage - 1;
        return { currentPage: newPage };
      },
      () => {
        this.loadPeople();
      },
    );
  };

  render() {
    const { people, loading, error, currentPage, totalPages, isSearchMode } =
      this.state;

    if (loading) {
      return <p className="loading">Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <div>
        {people.length > 0 ? (
          <>
            <ul className="results-list">
              {people.map((person) => (
                <li className="result-item" key={person.name}>
                  <h3>{person.name}</h3>
                  <div className="attributes-grid">
                    <p>
                      <strong>Height</strong>: {person.height}
                    </p>
                    <p>
                      <strong>Mass</strong>: {person.mass}
                    </p>
                    <p>
                      <strong>Hair Color</strong>: {person.hair_color}
                    </p>
                    <p>
                      <strong>Skin Color</strong>: {person.skin_color}
                    </p>
                    <p>
                      <strong>Eye Color</strong>: {person.eye_color}
                    </p>
                    <p>
                      <strong>Birth Year</strong>: {person.birth_year}
                    </p>
                    <p>
                      <strong>Gender</strong>: {person.gender}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            {!isSearchMode && (
              <div className="pagination">
                <Button
                  onClick={() => this.handlePageChange('prev')}
                  disabled={currentPage === 1}
                  variant="pagination"
                >
                  Previous
                </Button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  onClick={() => this.handlePageChange('next')}
                  disabled={currentPage === totalPages}
                  variant="pagination"
                >
                  Next
                </Button>
              </div>
            )}
          </>
        ) : (
          <p>Nothing found</p>
        )}
      </div>
    );
  }
}

export default Results;
