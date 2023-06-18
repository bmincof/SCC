import React, { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import styled from "styled-components";

// 이걸 말하는게 아니라 Compound Component 패턴을 적용해서 만들라는 뜻이겠지요??
// dropdown의 세부 내용(list), css 설정을 받습니다
// styled-component로 바꿔야 해요
const MyDropDown = ({ list, style }) => {
  // 선택된 요소의 인덱스를 저장 (기본은 0)
  const [selected, setSelected] = useState(0);

  return (
    <div>
      {/* <select>
        <option>옵션1입니당</option>
        <option>옵션2입니당</option>
      </select> */}
      <DropDownMenu value="선택" index={0} />
      {list.map((item, idx) => (
        <DropDownMenu value={item} index={idx + 1} key={idx} />
      ))}
    </div>
  );
};

export default MyDropDown;
