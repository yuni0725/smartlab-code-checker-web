import styled from "styled-components";

const Wrapper = styled.div`
  width: 80vw;
  height: 90vh;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  font-weight: 900;
`;

const HeadTitle = styled.h3`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const RuleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
`;

const Rule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Text = styled.h5`
  font-size: 20px;
  margin-left: 20px;
`;

const HighLightText = styled.h5`
  display: inline;
  font-size: 20px;
  color: var(--highlight-color);
  font-weight: 600;
`;

const A = styled.a`
  color: var(--highlight-color);
  text-decoration: none;
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <RuleWrapper>
        <Title>규칙</Title>
        <RuleDiv>
          <Rule>
            <HeadTitle>1. 검색 가능합니다.</HeadTitle>
            <Text>- 단, chatGPT는 안됩니다.</Text>
            <Text>- 특정 명령어의 쓰임새, 활용을 검색하라는 뜻입니다.</Text>
            <Text>
              - 막 전체 코드를 <HighLightText>복사 붙여넣기</HighLightText>{" "}
              이러시면 곤란합니다.
            </Text>
          </Rule>
          <Rule>
            <HeadTitle>2. 자동저장 기능 같은건 없습니다.</HeadTitle>
            <Text>- 꼭 Save 버튼을 자주자주 누릅시다.</Text>
            <Text>- Save 버튼 안누르고 홈화면으로 돌아가면 날라갑니다.</Text>
          </Rule>
          <Rule>
            <HeadTitle>
              3. 모든 문제는 표준입출력(standard I/O)을 사용합니다.
            </HeadTitle>
            <Text>
              - 무엇인지 모르신다면{" "}
              <A href="https://nypc.github.io/2023/notice/tool" target="_blank">
                링크
              </A>
              를 눌러 표준입출력 부분을 봅시다.
            </Text>
          </Rule>
          <Rule>
            <HeadTitle>4. 43기 기장의 능력 부족</HeadTitle>
            <Text>- 뒤로가기 버튼이 없습니다.</Text>
            <Text>
              - 위에 있는 Home 버튼 누르면 다시 이 화면으로 돌아옵니다.
            </Text>
            <Text>- 문제가 이해가 안된다면 질문 꼭 해주세요.</Text>
          </Rule>
        </RuleDiv>
      </RuleWrapper>
    </Wrapper>
  );
}
