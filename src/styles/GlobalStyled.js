import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

    --bs-blue: #007bff;
    --bs-indigo: #6610f2;
    --bs-purple: #7367f0;
    --bs-pink: #e83e8c;
    --bs-red: #ff4c51;
    --bs-orange: #fd7e14;
    --bs-yellow: #ff9f43;
    --bs-green: #28c76f;
    --bs-teal: #20c997;
    --bs-cyan: #00bad1;
    --bs-black: #2f2b3d;
    --bs-white: #fff;
    --bs-gray: rgba(47, 43, 61, 0.6);
    --bs-gray-dark: rgba(47, 43, 61, 0.8);
    --bs-gray-25: rgba(47, 43, 61, 0.015);
    --bs-gray-50: rgba(47, 43, 61, 0.06);
    --bs-primary: #7367f0;
    --bs-secondary: #808390;
    --bs-success: #28c76f;
    --bs-info: #00bad1;
    --bs-warning: #ff9f43;
    --bs-danger: #ff4c51;
    --bs-light: #dfdfe3;
    --bs-dark: #4b4b4b;
    --bs-dropdown-link-color: #444050;   
    --bs-dropdown-link-hover-color: #444050;    
    --bs-dropdown-font-size: 0.9375rem;
    
    --bs-gray: rgba(47, 43, 61, 0.5);
    --bs-primary-rgb: 115, 103, 240;
    --bs-secondary-rgb: 128, 131, 144;
    --bs-success-rgb: 40, 199, 111;
    --bs-info-rgb: 0, 186, 209;
    --bs-warning-rgb: 255, 159, 67;
    --bs-danger-rgb: 255, 76, 81;
    --bs-light-rgb: 223, 223, 227;
    --bs-dark-rgb: 75, 75, 75;
    --bs-gray-rgb: 47, 43, 61;
    --bs-primary-text-emphasis: #2e2960;
    --bs-secondary-text-emphasis: #33343a;
    --bs-success-text-emphasis: #10502c;
    --bs-info-text-emphasis: #004a54;
    --bs-warning-text-emphasis: #66401b;
    --bs-danger-text-emphasis: #661e20;
    --bs-light-text-emphasis: rgba(47, 43, 61, 0.7);
    --bs-dark-text-emphasis: rgba(47, 43, 61, 0.7);
    --bs-primary-bg-subtle: #e3e1fc;
    --bs-secondary-bg-subtle: #e6e6e9;
    --bs-success-bg-subtle: #d4f4e2;
    --bs-info-bg-subtle: #ccf1f6;
    --bs-warning-bg-subtle: #ffecd9;
    --bs-danger-bg-subtle: #ffdbdc;
    --bs-light-bg-subtle: rgba(245, 244, 245, 0.55);
    --bs-dark-bg-subtle: rgba(47, 43, 61, 0.4);
    --bs-primary-border-subtle: #c7c2f9;
    --bs-secondary-border-subtle: #cccdd3;
    --bs-success-border-subtle: #a9e9c5;
    --bs-info-border-subtle: #99e3ed;
    --bs-warning-border-subtle: #ffd9b4;
    --bs-danger-border-subtle: #ffb7b9;
    --bs-light-border-subtle: rgba(47, 43, 61, 0.12);
    --bs-dark-border-subtle: rgba(47, 43, 61, 0.5);
    --bs-white-rgb: 255, 255, 255;
    --bs-black-rgb: 47, 43, 61;
    --bs-font-sans-serif: "Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --bs-font-monospace: "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    --bs-root-font-size: 16px;
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 0.9375rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.375;
    --bs-body-color: #6d6b77;
    --bs-body-color-rgb: 109, 107, 119;
    --bs-body-bg: #f8f7fa;
    --bs-body-bg-rgb: 248, 247, 250;
    --bs-emphasis-color: #2f2b3d;
    --bs-emphasis-color-rgb: 47, 43, 61;
    --bs-secondary-color: rgba(109, 107, 119, 0.75);
    --bs-secondary-color-rgb: 109, 107, 119;
    --bs-secondary-bg: rgba(47, 43, 61, 0.12);
    --bs-secondary-bg-rgb: 47, 43, 61;
    --bs-tertiary-color: rgba(109, 107, 119, 0.5);
    --bs-tertiary-color-rgb: 109, 107, 119;
    --bs-tertiary-bg: rgba(47, 43, 61, 0.1);
    --bs-tertiary-bg-rgb: 47, 43, 61;
    --bs-heading-color: #444050;
    --bs-link-color: #7367f0;
    --bs-link-color-rgb: 115, 103, 240;
    --bs-link-decoration: none;
    --bs-link-hover-color: #685dd8;
    --bs-link-hover-color-rgb: 104, 93, 216;
    --bs-code-color: #e83e8c;
    --bs-highlight-color: #6d6b77;
    --bs-highlight-bg: #ffecd9;
    --bs-border-width: 1px;
    --bs-border-style: solid;
    --bs-border-color: #e6e6e8;
    --bs-border-color-translucent: rgba(47, 43, 61, 0.175);
    --bs-border-radius: 0.375rem;
    --bs-border-radius-sm: 0.25rem;
    --bs-border-radius-lg: 0.5rem;
    --bs-border-radius-xl: 0.625rem;
    --bs-border-radius-xxl: 2rem;
    --bs-border-radius-2xl: var(--bs-border-radius-xxl);
    --bs-border-radius-pill: 50rem;
    --bs-box-shadow: 0 0.1875rem 0.75rem 0 rgba(47, 43, 61, 0.14);
    --bs-box-shadow-sm: 0 0.125rem 0.5rem 0 rgba(47, 43, 61, 0.12);
    --bs-box-shadow-lg: 0 0.25rem 1.125rem 0 rgba(47, 43, 61, 0.16);
    --bs-box-shadow-inset: inset 0 1px 2px rgba(47, 43, 61, 0.075);
    --bs-focus-ring-width: 0.15rem;
    --bs-focus-ring-opacity: 0.75;
    --bs-focus-ring-color: rgba(47, 43, 61, 0.75);
    --bs-form-valid-color: #28c76f;
    --bs-form-valid-border-color: #28c76f;
    --bs-form-invalid-color: #ff4c51;
    --bs-form-invalid-border-color: #ff4c51;
    --dt-row-selected: 13, 110, 253;
    --dt-row-selected-text: 255, 255, 255;
    --dt-row-selected-link: 9, 10, 11;
    --dt-row-stripe: 0, 0, 0;
    --dt-row-hover: 0, 0, 0;
    --dt-column-ordering: 0, 0, 0;
    --dt-html-background: white;
    --bs-normal-padding: 1rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}
${
  "" /* 
html {
  font-size: 62.5%;
} */
}

body {
     margin: 0;
    font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    color: var(--bs-body-color);
    text-align: var(--bs-body-text-align);
    background-color: var(--bs-body-bg);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(47, 43, 61, 0);
}
ol {
    list-style-position: inside;
    padding-left: 0;
  }
input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p{
   overflow-wrap: break-word;
  hyphens: auto;    
  margin-top: 0;
  line-height: 1.37;
  font-weight: 400;
  color: var(--bs-heading-color);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;    
  margin-top: 0;
  font-weight: 500;
  line-height: 1.37;
  color: var(--bs-heading-color);
}
h1{
    line-height: 4.25rem;
    font-size: 2.875rem;
}
h2{
    line-height: 3.5rem;
    font-size: 2.375rem;
}
h3{
    line-height: 2.625rem;
    font-size: 1.75rem;
}
h4{
    font-size: 1.5rem;
    line-height: 2.375rem;
}
h5{
    line-height: 1.75rem;
    font-size: 1.125rem;
}
h6{
    line-height: 1.375rem;
    font-size: 0.9375rem;
}
p{
    margin-top: 0;
    
}
.lead{
    font-size: 1.125rem;
    font-weight: 300;
}
.light{
      font-weight: 300;
}
img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

.p-1{padding: 0.4rem}
.p-2{padding: 0.8rem}
.p-3{padding: 1.2rem}
.p-4{padding: 1.6rem}
.p-5{padding: 2.4rem}
.pt-1{padding-top: 0.4rem}
.pt-2{padding-top: 0.8rem}
.pt-3{padding-top: 1.2rem}
.pt-4{padding-top: 1.6rem}
.pt-5{padding-top: 2.4rem}
.pb-1{padding-bottom: 0.4rem}
.pb-2{padding-bottom: 0.8rem}
.pb-3{padding-bottom: 1.2rem}
.pb-4{padding-bottom: 1.6rem}
.pb-5{padding-bottom: 2.4rem}
.pl-1{padding-left: 0.4rem}
.pl-2{padding-left: 0.8rem}
.pl-3{padding-left: 1.2rem}
.pl-4{padding-left: 1.6rem}
.pl-5{padding-left: 2.4rem}
.pr-1{padding-right: 0.4rem}
.pr-2{padding-right: 0.8rem}
.pr-3{padding-right: 1.2rem}
.pr-4{padding-right: 1.6rem}
.pr-5{padding-right: 2.4rem}
.m-1{margin: 0.4rem}
.m-2{margin: 0.8rem}
.m-3{margin: 1.2rem}
.m-4{margin: 1.6rem}
.m-5{margin: 2.4rem}
.mt-1{margin-top:0.4rem}
.mt-2{margin-top:0.8rem}
.mt-3{margin-top:1.2rem}
.mt-4{margin-top:1.6rem}
.mt-5{margin-top:2.4rem}
.mb-1{margin-bottom: 0.4rem}
.mb-2{margin-bottom: 0.8rem}
.mb-3{margin-bottom: 1.2rem}
.mb-4{margin-bottom: 1.6rem}
.mb-5{margin-bottom: 2.4rem}
.ml-1{margin-left: 0.4rem}
.ml-2{margin-left: 0.8rem}
.ml-3{margin-left: 1.2rem}
.ml-4{margin-left: 1.6rem}
.ml-5{margin-left: 2.4rem}
.mr-1{margin-right:0.4rem}
.mr-2{margin-right:0.8rem}
.mr-3{margin-right:1.2rem}
.mr-4{margin-right:1.6rem}
.mr-5{margin-right:2.4rem}
.flex{
  display: flex;
}
.align-center{
  align-items: center;
}
.justify-center{
  justify-content: center;
}
.position-center{
  top:50%;
  transform: translate(0%,-50%);
}
.justify-end{
  justify-content: end;
}
.text-left{
  text-align: left !important;
}
.text-end{
  text-align: right !important;
}
.text-center{
  text-align: center  !important;
}
.text-primary{
  color: var(--bs-primary);
}
.error{
  color: var(--bs-danger)
}
.space-between{
  justify-content: space-between;
}

.hover-secondary{
  &:hover{
    background-color: var(--bs-gray-50);
  }
}
.hover-primary{
  &{
        background-color: var( --bs-primary-rgb);

  }
}
`;

export default GlobalStyles;

/*
FOR DARK MODE

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
*/
