import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
import { MdOutlineCheck } from 'react-icons/md';
import { Text } from '../text';

describe('Button', () => {
  it('with text only is rendered', () => {
    render(<Button>button</Button>);
    expect(screen.queryByRole('button', { name: 'button' })).toBeInTheDocument();
  });
  it('with icon and text is rendered', () => {
    render(<Button><MdOutlineCheck/>button</Button>);
    expect(screen.queryByRole('button', { name: 'button' })).toBeInTheDocument();
  });
  it('with text and icon is rendered', () => {
    render(<Button>button<MdOutlineCheck/></Button>);
    expect(screen.queryByRole('button', { name: 'button' })).toBeInTheDocument();
  });
  it('with icon and aria-label is rendered', () => {
    render(<Button aria-label="button"><MdOutlineCheck/></Button>);
    expect(screen.queryByRole('button', { name: 'button' })).toBeInTheDocument();
  });
  it('with nested text renders single label', () => {
    render(<Button><Text>but<Text>ton</Text></Text></Button>);
    expect(screen.queryByRole('button', { name: 'button' })).toBeInTheDocument();
  });
  it('does not fire onClick event when not clicked', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>button</Button>);
    expect(onClick).not.toHaveBeenCalled()
  });
  it('fires onClick event when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>button</Button>);
    await user.click(screen.getByRole('button', { name: 'button' }))
    expect(onClick).toHaveBeenCalledOnce()
  });
  it('does not fire onClick event when disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>button</Button>);
    await user.click(screen.getByRole('button', { name: 'button' }))
    expect(onClick).not.toHaveBeenCalled()
  });
  it('does not allow users to click when loading', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button loading onClick={onClick}>button</Button>);
    await user.click(screen.getByRole('button', { name: 'button' }))
    expect(onClick).not.toHaveBeenCalled()
  });
});
