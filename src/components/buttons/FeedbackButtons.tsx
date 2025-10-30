import { JSX, Show } from 'solid-js';
import { Spinner } from './SendButton';
import { ClipboardIcon, ThumbsDownIcon, ThumbsUpIcon } from '../icons';

type RatingButtonProps = {
  feedbackColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  disableIcon?: boolean;
  rating?: string;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const defaultFeedbackColor = '#3B81F6';

export const CopyToClipboardButton = (props: RatingButtonProps) => {
  const {
    feedbackColor,
    isDisabled,
    isLoading,
    disableIcon,
    children,
    class: className,
    ['aria-label']: ariaLabelProp,
    ...rest
  } = props;
  const ariaLabel = ariaLabelProp ?? 'In Zwischenablage kopieren';

  return (
    <button
      disabled={isDisabled || isLoading}
      aria-label={ariaLabel}
      {...rest}
      class={`p-2 justify-center font-semibold text-white focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 chatbot-button ${className ?? ''}`.trim()}
      style={{ background: 'transparent', border: 'none' }}
      title="Copy to clipboard"
    >
      <Show when={!isLoading} fallback={<Spinner class="text-white" />}>
        <ClipboardIcon
          class={`send-icon flex ${disableIcon ? 'hidden' : ''}`.trim()}
          style={{ color: feedbackColor ?? defaultFeedbackColor }}
        />
      </Show>
      {children ? <span class="sr-only">{children}</span> : null}
    </button>
  );
};

export const ThumbsUpButton = (props: RatingButtonProps) => {
  const {
    feedbackColor,
    isDisabled,
    isLoading,
    disableIcon,
    children,
    class: className,
    ['aria-label']: ariaLabelProp,
    ...rest
  } = props;
  const ariaLabel = ariaLabelProp ?? 'Positive Rückmeldung geben';

  return (
    <button
      type="submit"
      disabled={isDisabled || isLoading}
      aria-label={ariaLabel}
      {...rest}
      class={`p-2 justify-center font-semibold text-white focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 chatbot-button ${className ?? ''}`.trim()}
      style={{ background: 'transparent', border: 'none' }}
      title="Thumbs Up"
    >
      <Show when={!isLoading} fallback={<Spinner class="text-white" />}>
        <ThumbsUpIcon
          class={`send-icon flex ${disableIcon ? 'hidden' : ''}`.trim()}
          style={{ color: feedbackColor ?? defaultFeedbackColor }}
        />
      </Show>
      {children ? <span class="sr-only">{children}</span> : null}
    </button>
  );
};

export const ThumbsDownButton = (props: RatingButtonProps) => {
  const {
    feedbackColor,
    isDisabled,
    isLoading,
    disableIcon,
    children,
    class: className,
    ['aria-label']: ariaLabelProp,
    ...rest
  } = props;
  const ariaLabel = ariaLabelProp ?? 'Negative Rückmeldung geben';

  return (
    <button
      type="submit"
      disabled={isDisabled || isLoading}
      aria-label={ariaLabel}
      {...rest}
      class={`p-2 justify-center font-semibold text-white focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 chatbot-button ${className ?? ''}`.trim()}
      style={{ background: 'transparent', border: 'none' }}
      title="Thumbs Down"
    >
      <Show when={!isLoading} fallback={<Spinner class="text-white" />}>
        <ThumbsDownIcon
          class={`send-icon flex ${disableIcon ? 'hidden' : ''}`.trim()}
          style={{ color: feedbackColor ?? defaultFeedbackColor }}
        />
      </Show>
      {children ? <span class="sr-only">{children}</span> : null}
    </button>
  );
};
