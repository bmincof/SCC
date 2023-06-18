import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import MyDropDown from "./components/MyDropDown";
import MyInput from "./components/MyInput";
import MyTextArea from "./components/MyTextArea";

function App() {
  return (
    <div className="App">
      버튼 컴포넌트
      <MyButton value="버튼" />
      드롭다운 컴포넌트
      <MyDropDown list={["zz", "ss", "tt"]} />
      인풋 컴포넌트
      <MyInput type="text" />
      <MyTextArea placeholder="플레이스홀더" rows={8} />
    </div>
  );
}

export default App;
