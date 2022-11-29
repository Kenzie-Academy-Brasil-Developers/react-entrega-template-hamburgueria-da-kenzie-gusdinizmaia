import styled from "styled-components";

export const ContainerCart = styled.aside`
  padding-bottom: 10px;

  display: flex;
  flex-direction: column;

  min-width: 335px;

  > h1 {
    background-color: var(--color-primary-1);
    color: var(--color-white);
    font: var(--font-title-3);
    text-align: center;

    width: 100%;
    padding: 20px 0;
    border-radius: 6px 6px 0 0;
  }
  ul {
    background-color: var(--color-grey-4);
  }

  @media (width < 1024px) {
    padding: 0 5%;
  }
`;

export const NoItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 40px 0;

  h1 {
    font: var(--font-title-3);
    color: var(--color-grey-1);
  }
  h2 {
    font: var(--font-title-4);
    color: var(--color-grey-2);
  }
`;
