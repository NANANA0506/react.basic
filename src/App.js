import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: ${(props) => props.dr || "column"};
  align-items: center;
  justify-content: center;
`;
const TapBtn = styled.button`
  width: 25px;
  height: 300px;

  border: none;
  outline: none;
  background: ${(props) => (props.ac ? "lightgreen" : "none")};

  color: ${(props) => (props.ac ? "#fff" : "yellowgreen")};

  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #fff;
    background: skyblue;
  }
`;

const App = () => {
  const [active, setActive] = useState(1);

  const clickBtn = (value) => {
    setActive(value);
  };

  return (
    <Wrapper dr="row">
      <Wrapper>
        <TapBtn ac={active === 1} onClick={() => clickBtn(1)}>
          TAB - 1
        </TapBtn>
        <TapBtn ac={active === 2} onClick={() => clickBtn(2)}>
          TAB - 2
        </TapBtn>
        <TapBtn ac={active === 3} onClick={() => clickBtn(3)}>
          TAB - 3
        </TapBtn>
      </Wrapper>
      <Wrapper>
        {active === 1 ? "나는 첫번째 TAB 이다." : null}
        {active === 2 ? "나는 두번째 TAB 이다." : null}
        {active === 3 ? "나는 세번째 TAB 이다." : null}
      </Wrapper>
    </Wrapper>
  );
};

export default App;
