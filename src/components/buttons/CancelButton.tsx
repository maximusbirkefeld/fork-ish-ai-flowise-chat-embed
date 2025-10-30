import { JSX } from 'solid-js/jsx-runtime';
import { XIcon } from '../icons';

type CancelButtonProps = {
  buttonColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  disableIcon?: boolean;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const defaultButtonColor = '#3B81F6';

export const CancelButton = (props: CancelButtonProps) => {
  const {
    buttonColor,
    isDisabled,
    isLoading,
    disableIcon,
    children,
    class: className,
    ['aria-label']: ariaLabelProp,
    ...rest
  } = props;
  const ariaLabel = ariaLabelProp ?? 'Aufnahme abbrechen';

  return (
    <button
      type="submit"
      disabled={isDisabled || isLoading}
      aria-label={ariaLabel}
      {...rest}
      class={`py-2 px-4 justify-center font-semibold focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 chatbot-button ${className ?? ''}`.trim()}
      style={{ background: 'transparent', border: 'none' }}
    >
      <XIcon class={disableIcon ? 'hidden' : ''} style={{ color: buttonColor ?? defaultButtonColor }} />
      {children ? <span class="sr-only">{children}</span> : null}
    </button>
  );
};
