import styled from "styled-components";

// 원하는 테그를적어주고 그 후백틱을 이용하여 사용한다. 백틱 내부에 css와 같이 적어준다. 자동으로 class명이 지정된다.

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

/* HTML 태그의 속성 값 설정
attrs 함수로, input 태그에 있는 속성값을 가질 수 있다
같은 태그에 같은 속성을 사용한다면 attrs에 속성값만 추가하여 사용 가능 */

const Input = styled.input.attrs({ placeholder: "hello" })`
  background-color: tomato;
`;

function App() {
  return (
    <>
      {/* as를 통해 스타일 속성은 같으나 html태그를 다르게 사용할 수 있음
       */}
      <Father>
        <Btn>button</Btn>
        <Btn as="a">button</Btn>
      </Father>

      <Father>
        <Input />
        <Input />
        <Input />
      </Father>
    </>
  );
}

export default App;
