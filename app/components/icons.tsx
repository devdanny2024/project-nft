"use client";

import { LucideProps, MessageSquare, Grid, List } from "lucide-react";

export const Icons = {
  verify: (props: LucideProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7859 3.33511L10 0L8.21415 3.33511L5 1.33975L5.12096 5.12096L1.33975 5L3.33511 8.21415L0 10L3.33511 11.7859L1.33975 15L5.12096 14.879L5 18.6603L8.21415 16.6649L10 20L11.7859 16.6649L15 18.6603L14.879 14.879L18.6603 15L16.6649 11.7859L20 10L16.6649 8.21415L18.6603 5L14.879 5.12096L15 1.33975L11.7859 3.33511ZM14.4859 8.05742C14.6951 7.84821 14.6951 7.50902 14.4859 7.29981C14.2767 7.0906 13.9375 7.0906 13.7283 7.29981L9.1071 11.921L6.62876 9.44267C6.41955 9.23346 6.08036 9.23346 5.87115 9.44267C5.66194 9.65188 5.66194 9.99107 5.87115 10.2003L8.72829 13.0574C8.9375 13.2666 9.27669 13.2666 9.4859 13.0574L14.4859 8.05742Z"
        fill="#00C2FF"
      />
    </svg>
  ),
  grid: Grid,
  list: List,
} as const;

export const EthIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="19"
    viewBox="0 0 12 19"
    fill="none"
  >
    <path
      d="M5.99827 0.5L5.86719 0.91025V12.812L5.99827 12.9328L11.9957 9.66725L5.99827 0.5Z"
      fill="#EF4E4E"
    />
    <path
      d="M5.99822 0.5L0 9.66725L5.99741 12.9328V0.5H5.99822Z"
      fill="#FF8080"
    />
    <path
      d="M5.99792 13.9788L5.92383 14.0621V18.3018L5.99792 18.4998L11.9994 10.7148L5.99792 13.9788Z"
      fill="#EF4E4E"
    />
    <path
      d="M5.99741 18.4998V13.9788L0 10.7148L5.99741 18.4998Z"
      fill="#FF8080"
    />
    <path
      d="M5.99805 12.9328L11.9955 9.66725L5.99805 7.15625V12.9328Z"
      fill="#D04343"
    />
    <path d="M0 9.66702L5.99741 12.9325V7.15527L0 9.66702Z" fill="#E56C6C" />
  </svg>
);
