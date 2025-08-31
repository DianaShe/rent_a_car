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
export const tickIcon = ({ stroke, ...props }) => [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="44"
    height="44"
    viewBox="0 0 72 72"
    fill="#0b44cd"
    {...props}
  >
    <path d="M60.116,20.02c2.314,1.631,2.082,4.155,1.185,5.532l-3.284,5.075v11.89c0,14.38-1.12,15.5-15.5,15.5h-13	c-14.38,0-15.5-1.12-15.5-15.5v-13c0-14.38,1.12-15.5,15.5-15.5h13c4.03,0,7.017,0.088,9.231,0.531L35.747,39.277l-8.157-9.353	c-1.412-1.472-3.364-1.186-4.362-0.196c-1.197,1.188-1.181,2.924-0.051,4.27l10.666,12.223c0.569,0.653,1.394,1.028,2.261,1.028	c0.071,0,0.142-0.002,0.214-0.007c0.935-0.067,1.796-0.577,2.305-1.363l15.964-24.673C55.821,19.332,58.254,18.707,60.116,20.02z"></path>
  </svg>,
];

export const phoheIcon = ({ ...props }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml="preserve"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <g>
          {' '}
          <path
            fill="#0b44cd"
            d="M84.96,70.237c-0.167-1.032-0.814-1.914-1.783-2.438l-14.335-8.446l-0.118-0.066 c-0.579-0.297-1.249-0.45-1.937-0.45c-1.201,0-2.348,0.455-3.144,1.253l-4.231,4.233c-0.181,0.172-0.771,0.421-0.95,0.43 c-0.049-0.004-4.923-0.355-13.896-9.329c-8.957-8.955-9.337-13.844-9.34-13.844c0.005-0.25,0.251-0.838,0.426-1.02l3.608-3.607 c1.271-1.274,1.652-3.386,0.898-5.022L32.19,16.938c-0.579-1.192-1.704-1.928-2.952-1.928c-0.883,0-1.735,0.366-2.401,1.031 l-9.835,9.813c-0.943,0.938-1.755,2.578-1.932,3.898c-0.086,0.631-1.831,15.693,18.819,36.346 C51.42,83.627,65.09,84.989,68.865,84.989l0,0c0.812,0,1.285-0.058,1.376-0.071c1.316-0.176,2.954-0.986,3.891-1.925l9.827-9.826 C84.761,72.361,85.127,71.296,84.96,70.237z"
          ></path>{' '}
        </g>{' '}
      </g>
    </svg>
  );
};

export const telegramIcon = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="url(#paint0_linear_87_7225)"
        ></circle>{' '}
        <path
          d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
          fill="white"
        ></path>{' '}
        <defs>
          {' '}
          <linearGradient
            id="paint0_linear_87_7225"
            x1="16"
            y1="2"
            x2="16"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            {' '}
            <stop stop-color="#37BBFE"></stop>{' '}
            <stop offset="1" stop-color="#007DBB"></stop>{' '}
          </linearGradient>{' '}
        </defs>{' '}
      </g>
    </svg>
  );
};

export const instaIcon = ({ stroke, ...props }) => {
  return (
    <svg viewBox="0 0 24 24" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z"
          fill="#0b44cd"
        ></path>{' '}
      </g>
    </svg>
  );
};
