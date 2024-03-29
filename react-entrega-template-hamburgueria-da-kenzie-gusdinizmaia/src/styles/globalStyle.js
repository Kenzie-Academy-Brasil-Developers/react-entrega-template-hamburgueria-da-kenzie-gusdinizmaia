import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body{
    font-family:'Inter', sans-serif;
}

body,#root{
    min-height: 100vh;

    min-width: 325px;
    width: 100vw;
    max-width: 100%;
}

*::-webkit-scrollbar {
  width: 12px;              
}
*::-webkit-scrollbar-track {
  background: var(--color-grey-4);      
border-radius: 20px;
}
*::-webkit-scrollbar-thumb {
  background-color: var(--color-primary-1);  
  border-radius: 20px;      
  border: 3px solid var(--color-grey-4);  
}

*:hover, *:focus{
    transition: 0.25s ease-in-out;
}

textarea:focus, input:focus, select:focus, input {
    border: 1.75px solid var(--color-grey-4);
} 

:root{
    --color-primary-1:#27AE60;
    --color-primary-2:#93D7AF;
    --color-secondary-1:#EB5757;

    --color-white:#FFFFFF;

    --color-grey-1:#333333;
    --color-grey-2:#828282;
    --color-grey-3:#E0E0E0;
    --color-grey-4:#F5F5F5;
    --color-grey-wrapper:rgba(51, 51, 51, 0.5);

    --radius:6px;

    --color-negative:#E60000;
    --color-warning:#FFCD07;
    --color-sucess:#168821;
    --color-information:#155BCB;

    --font-title-1:700 1.625rem Inter, sans-serif;
    --font-title-2:700 1.375rem Inter, sans-serif;
    --font-title-3:700 1.125rem Inter, sans-serif;
    --font-title-4:700 0.875rem Inter, sans-serif;
    --font-headline:400 1rem Inter, sans-serif;
    --font-body:400 0.875rem Inter, sans-serif;
    --font-body-bold:600 0.875rem Inter, sans-serif;
    --font-caption:400 0.75rem Inter, sans-serif;
}

.dark__mode{
    --color-grey-1:#F5F5F5;
    --color-grey-2:#E0E0E0;
    --color-grey-3:#828282;
    --color-grey-4:#333333;
}
`;
