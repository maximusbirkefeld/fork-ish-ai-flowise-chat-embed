import { Show } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { RecordIcon } from '../icons';

type RecordAudioButtonProps = {
  buttonColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  disableIcon?: boolean;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const defaultButtonColor = '#3B81F6';

export const RecordAudioButton = (props: RecordAudioButtonProps) => {
  const {
    buttonColor,
    isDisabled,
    isLoading,
    children,
    class: className,
    ['aria-label']: ariaLabelProp,
    ...rest
  } = props;
  const ariaLabel = ariaLabelProp ?? 'Audioaufnahme starten';

  return (
    <button
      type="submit"
      disabled={isDisabled || isLoading}
      aria-label={ariaLabel}
      {...rest}
      class={`py-2 px-4 justify-center font-semibold focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 chatbot-button ${className ?? ''}`.trim()}
      style={{ background: 'transparent', border: 'none' }}
    >
      <Show when={!isLoading} fallback={<Spinner class="text-white" />}>
        <RecordIcon style={{ color: buttonColor ?? defaultButtonColor }} />
      </Show>
      {children ? <span class="sr-only">{children}</span> : null}
    </button>
  );
};

export const Spinner = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    {...props}
    class={'animate-spin -ml-1 mr-3 h-5 w-5 ' + props.class}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    data-testid="loading-spinner"
  >
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);
