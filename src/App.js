import styled from "styled-components";

// 원하는 테그를적어주고 그 후백틱을 이용하여 사용한다. 백틱 내부에 css와 같이 적어준다. 자동으로 class명이 지정된다.

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      <BoxTwo>
        <Text>Hi</Text>
      </BoxTwo>
    </Father>
  );
}

export default App;
