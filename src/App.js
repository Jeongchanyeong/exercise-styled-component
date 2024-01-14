import styled from "styled-components";

// 원하는 테그를적어주고 그 후백틱을 이용하여 사용한다. 백틱 내부에 css와 같이 적어준다. 자동으로 class명이 지정된다.

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// style이 다른 컴포넌트의 style과 중복되는 경우 확장하려는 컴포넌트 명을 적어 중복성을 줄일 수 있다.
const Circle = styled(Box)`
  border-radius: 50px;
`;

// 1. prop을 사용하여 각각의 style을 적용시킬 수 있다.

function App() {
  return (
    <Father>
      <Box bgColor="teal"></Box>
      <Circle bgColor="tomato"></Circle>
    </Father>
  );
}

export default App;
