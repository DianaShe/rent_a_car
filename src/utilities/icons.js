export const heartIcon = ({ stroke, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      {...props}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2544 2.24863 12.7125 2.24863C12.1706 2.24863 11.6341 2.35539 11.1335 2.56281C10.6329 2.77023 10.1781 3.07425 9.795 3.4575L9 4.2525L8.205 3.4575C7.43123 2.68373 6.38177 2.24903 5.2875 2.24903C4.19322 2.24903 3.14377 2.68373 2.37 3.4575C1.59623 4.23127 1.16153 5.28072 1.16153 6.375C1.16153 7.46927 1.59623 8.51873 2.37 9.2925L3.165 10.0875L9 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3173 8.45461 16.5247 7.95401C16.7321 7.45342 16.8389 6.91686 16.8389 6.375C16.8389 5.83313 16.7321 5.29657 16.5247 4.79598C16.3173 4.29539 16.0132 3.84056 15.63 3.4575Z"
        stroke={stroke}
        strokeOpacity="0.8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const vectorIcon = ({ stroke, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="16"
      {...props}
      viewBox="0 0 2 16"
      fill="none"
    >
      <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
    </svg>
  );
};

export const closeIcon = ({ stroke, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      {...props}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 6L6 18"
        stroke="#121417"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="#121417"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
