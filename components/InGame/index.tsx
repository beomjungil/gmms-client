import * as React from 'react';
import * as Styled from './styles';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

interface InGameProps {
  currentLevel: number;
}

@observer
class InGame extends React.Component<InGameProps> {
  @observable fontSize: number = 16;
  @observable lineHeight: number = 1.5;
  @observable paragraphWidth: number = 420;

  handleRageChange = e => {
    if (e.target.name === 'lineHeight') {
      this[e.target.name] = parseInt(e.target.value, 10) / 100;
      return;
    }
    this[e.target.name] = parseInt(e.target.value, 10);
  }

  render() {
    const { currentLevel } = this.props;
    return (
      <Styled.Wrapper>
        <Styled.SideBar>
          <Styled.SideBarLabel>레벨</Styled.SideBarLabel>
          <Styled.SideBarLevelHolder>
            <Styled.SideBarLevel>{currentLevel}</Styled.SideBarLevel>
            <Styled.SideBarTotalLevel>/ 10</Styled.SideBarTotalLevel>
          </Styled.SideBarLevelHolder>
          <Styled.Label>
            <span>글꼴 크기</span> {this.fontSize}px
          </Styled.Label>
          <Styled.Range
            type="range"
            name="fontSize"
            value={this.fontSize}
            onChange={this.handleRageChange}
            max={28}
            min={8}
          />
          <Styled.Label>
            <span>줄 간격</span> {this.lineHeight}
          </Styled.Label>
          <Styled.Range
            type="range"
            name="lineHeight"
            value={this.lineHeight * 100}
            onChange={this.handleRageChange}
            max={200}
            min={100}
            // disabled
          />
          <Styled.Label>
            <span>글 너비</span> {this.paragraphWidth}px
          </Styled.Label>
          <Styled.Range
            type="range"
            name="paragraphWidth"
            value={this.paragraphWidth}
            onChange={this.handleRageChange}
            step={10}
            max={600}
            min={240}
          />
          <Styled.Label>
            <span>글꼴 이름</span> KoPub 바탕 Regular
          </Styled.Label>
        </Styled.SideBar>
        <Styled.TypographWrapper>
          <Styled.Paragraph
            fontSize={this.fontSize}
            lineHeight={this.lineHeight}
            paragraphWidth={this.paragraphWidth}
          >
            풀이 봄바람을 열락의 봄바람이다. 같은 붙잡아 뜨고, 용기가 부패를
            것이다. 기관과 굳세게 청춘의 가치를 앞이 있음으로써 그들에게 예가
            주는 봄바람이다. 이상이 튼튼하며, 속잎나고, 인생에 원대하고, 고동을
            간에 품었기 때문이다. 목숨이 가치를 있을 부패를 두기 영원히 끓는다.
            얼마나 공자는 있는 곳이 현저하게 뜨고, 교향악이다. 인생의 방지하는
            우리는 운다. 이상을 풀이 남는 이상은 갑 그들을 청춘이 인생을 끓는다.
            트고, 위하여 때까지 이상 힘있다. 구하기 물방아 뜨거운지라, 품으며,
            인간은 동산에는 모래뿐일 아니다.
          </Styled.Paragraph>
        </Styled.TypographWrapper>
        <Styled.ButtonHolder>
          <Styled.ButtonWrapper>
            <Styled.GotoStart>제출하기</Styled.GotoStart>
            <Styled.ButtonShadow />
          </Styled.ButtonWrapper>
        </Styled.ButtonHolder>
      </Styled.Wrapper>
    );
  }
}

export default InGame;
