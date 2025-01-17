import styled from "styled-components";

const LeaderContainer = styled.div`
  width: 15.375rem;
  height: 24rem;
  border-radius: 0.625rem;
  background: #282d2d;
`;

const LeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
  padding: 2.25rem 3rem;
`;

const LedaerPerson = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 8.125rem;
  height: 8.125rem;
`;

const Person = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Role = styled.div`
  color: #a2abab;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 1.5rem */
`;

const Name = styled.div`
  color: #edf4f5;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 1.75rem */
  letter-spacing: -0.0125rem;
`;

const Nickname = styled.div`
  color: #edf4f5;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 145%; /* 1.26875rem */
  letter-spacing: 0.00875rem;
`;

const Major = styled.div`
  color: #a2abab;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 138%; /* 1.12125rem */
  letter-spacing: 0.00813rem;
`;

const LeaderCard = ({ img, role, name, nickname, major }) => {
  return (
    <LeaderContainer>
      <LeaderWrapper>
        <LedaerPerson>
          <Img src={img} />
          <Person>
            <Role>{role}</Role>
            <Name>{name}</Name>
            <Nickname>{nickname}</Nickname>
          </Person>
        </LedaerPerson>
        <Major>{major}</Major>
      </LeaderWrapper>
    </LeaderContainer>
  );
};

export default LeaderCard;
