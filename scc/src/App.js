import "./App.css";

import Logo from "./logo.svg";
import GlobalStyle from "./GlobalStyle";
import MyCard from "./components/compound/MyCard";
import MyModal from "./components/compound/MyModal";
import CommonButton from "./components/primitve/button/CommonButton";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MyCard
        title={"제목입니다"}
        subtitle={"부제입니다"}
        desc={`이것은 카드에 대한 설명입니다... 이렇게 길게 쓰면 줄도 바꿔져요`}
        src={Logo}
      />

      {/* <div>
        <MyModal
          title={"모달 제목"}
          desc={`모달 내용부분입니다. 경고창으로 사용할게요. 줄 바뀌는거도 봐야하니까 일단 막 써보겠습니다. 가나다라마바사아자차카타파하`}
          buttons={[
            <CommonButton value={"확인"} className="text" />,
            <CommonButton value={"취소"} className="text" />,
          ]}
        />
      </div> */}
    </div>
  );
}

export default App;
