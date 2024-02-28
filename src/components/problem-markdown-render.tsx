import { useEffect, useState } from "react";
import styled from "styled-components";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useParams } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 15px;
  margin: 10px 5px 10px 10px;
  padding: 10px;
  background-color: white;

  font-size: 18px;
  color: var(--font-color);
`;

function problemText(fileID: string | undefined) {
  if (fileID) {
    const problem: { [key: string]: string } = {
      easy1:
        "## Difficulty Low \n\n --- \n\n > ### 01. 올해는 4357년? \n\n #### 문제 \n\n 어느 날 혜은이는 신강의동을 청소하던 중 한 달력을 발견하고 놀랐다. 올해 달력의 연도가 4357년이었기 때문이다. \n\n 이는 고조선이 개국된 해인 서기전 2333년을 원년으로 하는 단기 연도이다. 반면, 실생활에서 우리나라는 서기 연도를 사용한다. 단기 연도가 주어질 때 이를 서기 연도로 바꿔 주는 프로그램을 작성하시오. \n\n #### 입력 \n\n 서기 연도를 알아보고 싶은 단기 연도 y가 주어진다. (3000≤y≤5000) \n\n #### 출력 \n\n 단기 연도를 서기 연도로 변환한 결과를 출력한다. \n\n #### 예제 입력 1 \n\n ```\n4341\n``` \n\n #### 예제 출력 1 \n\n ```\n2008\n``` \n\n #### 문의 \n\n [김혜은](https://github.com/HyeeunKim07) \n\n ---",
      easy3:
        "\n## Difficulty Low\n\n---\n\n> ### 03. 그래서 CU는 어디 있다고?\n\n#### 문제\n\n상산고등학교에는 많은 건물이 존재한다. 이제 막 입학한 뒤, 스마트랩 부원이 된 거상이는 어떤 시설이 어느 건물에 있는지 헷갈려 하고는 한다.\n거상이는 다음과 같은 목록을 보며 학교 지리에 익숙해지려 한다.\n\n```\n본관: 1학년 6반, 1학년 교무실\n과학관: CU, 컴퓨터실\n신강의동: 영어회화 강의실\n상아관: 도서관\n학생회관: 태권도실, 학생식당\n```\n\n이를 바탕으로 장소를 입력하면 그 장소가 위치한 건물을 출력하는 코드를 작성하시오.\n\nP.S 문제와는 상관 없는 이야기\n1학년 6반과 컴퓨터실은 2023학년도 스마트랩의 동아리 활동 장소였습니다. CU는 갈 일이 많으니 알고 계시면 좋아요 :)\n\n#### 입력\n\n위치를 알고 싶은 장소가 주어진다.\n(1학년 6반, 1학년 교무실, CU, 컴퓨터실, 영어회화 강의실, 도서관, 태권도실, 학생식당)\n\n#### 출력\n\n장소가 위치한 건물을 출력한다. 입력에서 주어진 장소가 아닐 경우 `해당하는 장소를 찾을 수 없습니다.` 를 출력한다.\n\n#### 예제 입력 1\n\n```\n1학년 6반\n```\n\n#### 예제 출력 1\n\n```\n본관\n```\n\n#### 예제 입력 2\n\n```\n컴퓨터실\n```\n\n#### 예제 출력 2\n\n```\n과학관\n```\n\n#### 문의\n\n[김혜은](https://github.com/HyeeunKim07)\n\n---",
      middle1:
        "\n## Difficulty Middle\n\n---\n\n> ### 01. 코딩 대회 상금을 받고 싶어요!\n\n#### 문제\n\n2024 상산고등학교 코딩 대회에 N명의 학생들이 참여했다.\n이들 중 점수가 가장 높은 k명에게는 상금이 수여된다. 이때, 상금을 받는 커트라인이 몇 점인지 구해라.\n\n#### 입력\n\n첫째 줄에는 응시자의 수 N과 상을 받는 사람의 수 k가 공백을 사이에 두고 주어진다.\n둘째 줄에는 각 학생의 점수 x가 공백을 사이에 두고 주어진다.\n\n#### 출력\n\n상을 받는 커트라인을 출력하라.\n\n#### 제한\n\n- 1≤N≤1000\n- 1≤k≤N\n- 0≤x≤10000\n\n#### 예제 입력 1\n\n```\n5 2\n100 76 85 93 98\n```\n\n#### 예제 출력 1\n\n```\n98\n```\n\n#### 문의\n\n[김혜은](https://github.com/HyeeunKim07)\n\n---\n",
      middle2:
        "\n## Difficulty Middle\n\n---\n\n> ### 02. Now I know my abc\n\n#### 문제\n\n영어 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.\n\n#### 입력\n\n첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어는 1,000,000을 넘지 않는다.\n\n#### 출력\n\n첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.\n\n#### 예제 입력 1\n\n```\nSmartlab\n```\n\n#### 예제 출력 1\n\n```\nA\n```\n\n#### 예제 입력 2\n\n```\nSangsan\n```\n\n#### 예제 출력 2\n\n```\n?\n```\n\n#### 문의\n\n[김혜은](https://github.com/HyeeunKim07)\n\n---",
      hard1:
        "\n## Difficulty High\n\n---\n\n> ### 01. 카드 뽑기 놀이\n\n#### 문제\n\n상산이와 호앙이는 카드 뽑기 놀이를 하고 있었다.\n총 M개의 카드 중에서 N 개를 뽑았을때 N개의 숫자들의 총합 L이면 승리하는 게임이다.\nM개의 카드 중에서 N개를 뽑을 때 숫자들의 총합이 L인 순서쌍을 모두 구하는 프로그램을 작성하시오.\n\n#### 입력\n\nM개의 카드 배열이 주어진다. (7≤M≤10)\nN과 L이 주어진다. (0 < N < M)\n(단 M, N, L은 모두 정수이다)\n\n#### 출력\n\nN개의 숫자들의 총합이 L인 순서쌍들을 모두 출력한다. (단 숫자들의 구성이 같으면 같은 순서쌍으로 취급한다.)\n(1, 2, 3) (2, 3, 1) (3, 2, 1) (X)\n\n#### 예제 입력 1\n\n```\n[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 3 6\n```\n\n#### 예제 출력 1\n\n```\n(1,2,3)\n```\n\n#### 예제 입력 2\n\n```\n[3, 4, 1, 2, 3, 6] 2 6\n```\n\n#### 예제 출력 2\n\n```\n(3, 3) (4, 2)\n```\n\n#### 문의\n\n[권남윤](https://github.com/yuni0725)\n",
    };
    return problem[fileID];
  }
  return "Something went wrong...";
}

export default function MarkdownRenderer() {
  const { fileID } = useParams<string>();
  const [markdown, setMarkdown] = useState<string>();

  const getProblemIDAndSetVar = async () => {
    setMarkdown(problemText(fileID));
  };

  useEffect(() => {
    getProblemIDAndSetVar();
  });

  return (
    <Wrapper>
      <MarkdownPreview source={markdown}></MarkdownPreview>
    </Wrapper>
  );
}
