import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

// keyframes을 사용하여 animation 주는 방법
const rotateAnimation = keyframes`
0%{
  transform: rotate(0deg);
  border-radius: 100px;
}
50%{
  transform:rotate(180deg);
  border-radius: 100px;
}
100%{
  transform:rotate(360deg);
  border-radius: 100px;
}`;

const Emoji = styled.span`
  font-size: 15px;
`;

const BoxOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background-color: tomato;

  animation: ${rotateAnimation} 1s linear infinite;

  // component 내부의 element값을 target하여 style할 수 있다.
  span {
    font-size: 60px;
    // & = span과 같음
    &:hover {
      font-size: 80px;
    }
  }
`;

const BoxTwo = styled(BoxOne)`
  background-color: skyblue;

  // 태그 종류에 구애받지 않고, 컴포넌트 타켓팅
  ${Emoji} {
    &:hover {
      font-size: 200px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <BoxOne>
        <span>😊</span>
      </BoxOne>

      <BoxTwo>
        <Emoji as="p">😊</Emoji>
      </BoxTwo>
    </Wrapper>
  );
}

export default App;
