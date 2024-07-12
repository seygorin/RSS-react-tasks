// import { describe, it, expect, vi } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import Results from '../Results';

// vi.mock('../../services/api', () => ({
//   fetchPeople: vi.fn(() =>
//     Promise.resolve({ data: { results: mockPeople, count: 1 } }),
//   ),
// }));

// const mockPeople = [
//   { name: 'John Doe', age: 30, job: 'Developer' },
//   { name: 'Jane Smith', age: 25, job: 'Designer' },
// ];

// describe('Results Component', () => {
//   it('renders people', async () => {
//     render(<Results />);
//     const items = await screen.findAllByText(/Doe|Smith/);
//     expect(items).toHaveLength(2);
//   });
// });
