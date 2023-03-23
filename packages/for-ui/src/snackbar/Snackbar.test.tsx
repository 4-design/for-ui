import { describe, expect, it } from 'vitest';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { config } from 'react-transition-group'
import { Button } from '../button';
import { Snackbar } from './Snackbar';

describe('Snackbar with close button', () => {
  beforeAll(() => {
    config.disabled = true
  });
  afterAll(() => {
    config.disabled = false;
  });

  it('appears when open props is true', async () => {
    render(<Snackbar open={true} message="操作が完了しました" />);
    expect(screen.getByRole('alertdialog', { description: '操作が完了しました' })).toBeInTheDocument();
  });
  it('does not appear when open props is false', async () => {
    render(<Snackbar open={false} message="操作が完了しました" />);
    expect(screen.queryByRole('alertdialog', { description: '操作が完了しました' })).not.toBeInTheDocument();
  });
  it('appears when TriggerComponent is pushed', async () => {
    const user = userEvent.setup();
    render(<Snackbar TriggerComponent={<Button aria-haspopup="dialog">開く</Button>} message="操作が完了しました" />);
    await user.click(screen.getByRole('button', { name: '開く' }));
    expect(screen.getByRole('alertdialog', { description: '操作が完了しました' })).toBeInTheDocument();
  });
  it('is closed when clicking close button', async () => {
    const user = userEvent.setup()
    render(<Snackbar TriggerComponent={<Button aria-haspopup="dialog">開く</Button>} message="操作が完了しました" />);
    await user.click(screen.getByRole('button', { name: "開く" }))
    user.click(screen.getByRole('button', { name: '閉じる' }))
    await waitForElementToBeRemoved(screen.queryByRole("alertdialog", { description: "操作が完了しました" }), { timeout: 1000 })
  });
});

describe('Snackbar with auto close configuration', () => {
  beforeAll(() => {
    config.disabled = true
  });
  afterAll(() => {
    config.disabled = false;
  });
  
  it('appears when open props is true', async () => {
    render(<Snackbar open={true} message="操作が完了しました" autoHideDuration={100} />);
    expect(screen.getByRole('alert', { description: '操作が完了しました' })).toBeInTheDocument();
  });
  it('does not appear when open props is false', async () => {
    render(<Snackbar open={false} message="操作が完了しました" autoHideDuration={100} />);
    expect(screen.queryByRole('alert', { description: '操作が完了しました' })).not.toBeInTheDocument();
  });
  it('appears when TriggerComponent is pushed', async () => {
    const user = userEvent.setup()
    render(<Snackbar TriggerComponent={<Button aria-haspopup="dialog">開く</Button>} message="操作が完了しました" autoHideDuration={100} />);
    await user.click(screen.getByRole('button', { name: "開く" }))
    expect(screen.getByRole("alert", { description: "操作が完了しました" })).toBeInTheDocument()
  })
  it('is closed after autoHideDuration passes', async () => {
    const user = userEvent.setup()
    render(<Snackbar TriggerComponent={<Button>開く</Button>} message="操作が完了しました" autoHideDuration={100} />);
    await user.click(screen.getByRole('button', { name: "開く" }))
    await waitForElementToBeRemoved(screen.queryByRole("alert", { description: "操作が完了しました" }), { timeout: 1000 })
  });
});
