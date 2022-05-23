import styled from "styled-components";

const SMainBanner = styled.section`
  height: 70vh;
  background-color: lightcyan;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 100px;
  font-weight: 700;
`;

export const MainBanner = () => {
  return (
    <SMainBanner>
      <Title>MainBanner</Title>
    </SMainBanner>
  );
};
