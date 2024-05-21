import { render, screen } from '@testing-library/react';
// import { describe, expect, it } from 'vitest';

import Hero from '@/components/Hero/Hero';

describe('Hero', () => {
  it('renders the Hero component', () => {
    render(<Hero />);
    const title = screen.getByRole('heading');
    expect(title.textContent).toBe("Hi there! I'm Guillermo Salgado");
  });
});