import { ComponentPropsWithRef, forwardRef } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from './Tooltip';

const Trigger = forwardRef<HTMLSpanElement, ComponentPropsWithRef<'span'>>((props, ref) => (
  <span ref={ref} {...props} />
));

describe('Tooltip', () => {
  it('has rendered children', async () => {
    render(
      <Tooltip title="テキスト">
        <Trigger>test</Trigger>
      </Tooltip>,
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
  it('has children with accessible description', async () => {
    render(
      <Tooltip title="テキスト">
        <Trigger>test</Trigger>
      </Tooltip>,
    );
    expect(screen.getByText('test')).toHaveAccessibleDescription('テキスト');
  });
  it('is appeared when focusing trigger', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip title="テキスト">
        <Trigger>test</Trigger>
      </Tooltip>,
    );
    user.tab();
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
  });
});
