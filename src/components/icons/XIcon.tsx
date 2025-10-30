import { JSX } from 'solid-js/jsx-runtime';

const defaultButtonColor = '#3B81F6';

export const XIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => {
  const { style, ...rest } = props;
  const mergedStyle =
    typeof style === 'string'
      ? `color: ${defaultButtonColor}; ${style}`
      : { color: defaultButtonColor, ...(style ?? {}) };

  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      style={mergedStyle}
      {...rest}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};
