import styled from "styled-components";

const SSection = styled.div`
  padding: 150px 230px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 30px;
  text-align: center;
`;

const ConWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 30%;
  height: 400px;
  background-color: gray;
`;

export const Section = () => {
  return (
    <SSection>
      <Title>This is title</Title>
      <ConWrap>
        <Con></Con>
        <Con></Con>
        <Con></Con>
      </ConWrap>
    </SSection>
  );
};
