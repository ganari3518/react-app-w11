// import logo from './logo.svg';
import Content from "./components/Content";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import './App.css';
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "슈퍼 마리오", sub: "출시 게임" },
      welcome: { title: "소개", desc: "슈퍼 마리오 시리즈의 무대는 가상의 나라 버섯 왕국으로 주로 마리오가 플레이어 캐릭터로서 출연한다. 마리오의 형제 루이지나 기타 마리오 시리즈의 등장인물들이 동료로서 등장한다.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mario_Series_Logo.svg/512px-Mario_Series_Logo.svg.png?20180421165633"},
      contents: [
        { id: 1, title: "슈퍼 마리오브라더스", desc: "슈퍼 마리오브라더스는 닌텐도가 개발하고 배급한 패밀리 컴퓨터용 플랫폼 게임이다. 1983년 아케이드용으로 출시된 마리오브라더스의 후속작이자 이후 탄생한 슈퍼 마리오 시리즈의 첫 번째 작품이다.", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Super_Mario_Bros._Logo.svg/800px-Super_Mario_Bros._Logo.svg.png?20140516002826"},
        { id: 2, title: "슈퍼 마리오 64", desc: "슈퍼 마리오 64는 닌텐도가 제작한 1996년 플랫폼 게임이다. 슈퍼 마리오 시리즈 사상 첫 번째로 3차원 게임플레이를 선보인 작품으로, 기존의 슈퍼 마리오 게임플레이 및 그래픽 요소를 오픈 월드에 결합했다. 닌텐도 64 플랫폼으로 개발돼 일본서 1996년 6월 23일 처음 출시됐다." , image:"https://i.namu.wiki/i/jDmsWLyLTfdKyOSdNGdjsPZF4lpHTVdO3eDr0mv00jnwAh3VbQ_xsB4USJ0L2XKORwo6f7qiFp-xxcHe_ukL9iDkwOQTChCvgNSC1l6Uwvh8SG0HUHSk_OvN35j_IQ2-qK-koERlTXv1KJitxFk76w.webp"},
        { id: 3, title: "슈퍼 마리오 월드", desc: "슈퍼 마리오 월드는 닌텐도가 제작한 1990년 플랫폼 게임이다. 슈퍼 패미컴 플랫폼으로 개발됐으며 일본서 1990년 11월 21일 처음 출시됐다. 북미 지역에선 1991년, 유럽에서 1992년 발매됐다. 일본 발매 당시 제목은 슈퍼 마리오 월드: 슈퍼 마리오 브라더스 4였다." , image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Super_Mario_World_game_logo.svg/512px-Super_Mario_World_game_logo.svg.png?20220415114827"},
        { id: 4, title: "슈퍼 마리오 Wii 갤럭시 어드벤처", desc: "슈퍼 마리오 Wii 갤럭시 어드벤처는 닌텐도가 Wii 플랫폼으로 제작한 2007년 플랫폼 게임이다. 슈퍼 마리오 프랜차이즈의 세 번째 3D 게임으로 대한민국 외 지역 제목은 슈퍼 마리오 갤럭시이다. 마리오는 쿠파에 맞서 피치 공주와 우주를 구하는 여정을 떠나며 이 과정에서 총 120개의 파워 스타를 수집하여야 한다." , image:"https://upload.wikimedia.org/wikipedia/ko/c/c8/Smgboxart.jpg?20221006114624"},
      ],
    };
  }
  render() {
    var _title, _desc, _image = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _image = data.image; 
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
        ></TOC>
        <Content title={_title} desc={_desc} img={_image} ></Content>
      </div>
    );
  }
}

export default App;
