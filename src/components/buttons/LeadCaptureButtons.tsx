import { JSX } from 'solid-js/jsx-runtime';
import { SendButton } from '@/components/buttons/SendButton';

type LeadCaptureButtonProps = {
  buttonColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  disableIcon?: boolean;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

// Not being used for now, keep it for future in case we want to allow users to cancel the form
export const CancelLeadCaptureButton = (props: LeadCaptureButtonProps) => {
  return (
    <button
      disabled={props.isDisabled || props.isLoading}
      {...props}
      class={
        'h-10 p-2 justify-center font-semibold focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 ' +
        props.class
      }
      style={{ background: 'transparent', border: 'none', color: props.buttonColor }}
      title="Cancel Lead Capture"
    >
      Cancel
    </button>
  );
};

export const SaveLeadButton = (props: LeadCaptureButtonProps) => {
  return (
    <SendButton
      aria-label="Submit lead form"
      sendButtonColor={props.buttonColor}
      type="submit"
      isDisabled={props.isDisabled || props.isLoading}
      class="m-0 h-14 flex items-center justify-center"
      {...props}
    >
      Submit lead form
    </SendButton>
  );
};
