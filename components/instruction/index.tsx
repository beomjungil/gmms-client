import * as React from 'react';
import * as Styled from './styles';
import { Box, Flex } from '@rebass/grid';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import LevelStore from '../../stores/levelStore';

interface Description {
  title: string;
  desc: string;
}

interface InstructionProps {
  levelStore?: LevelStore;
}

@inject('levelStore')
@observer
class Instruction extends React.Component<InstructionProps> {
  @observable focusBarWidth: number = 200;

  componentDidMount() {
    this.focusBarWidth = (window.innerWidth - 950) / 2;
  }
  render() {
    const { next } = this.props.levelStore as LevelStore;
    const descriptions: Description[] = [
      {
        title: '충분한 너비의 밝은 화면에서\n플레이해주세요',
        desc:
          '브라우저의 창을 적절한 너비로 조절한 뒤, 모니터의 글과 배경이 명확하게 보일정도로 높여주세요.\n적절한 환경이 갖춰진 상태로 플레이 했을 때, 모범 답안에 가장 만족할 수 있습니다.\n모바일에서는 현재 플레이할 수 없으나 빠른 시일내에 모바일 대응을 할 예정입니다.'
      },
      {
        title: '모범 답안보다 아름다운\n타이포그래피를 만드셨나요?',
        desc:
          '혹시 모범 답안보다 내가 제출한 답이 더 아름다운 타이포그래피라 생각이 든다면,\n<gmms-claim@beomjun.kr> 로 연락주세요.정해진 템플릿에 맞게 이메일을 보내주시면,\n지원팀에서 확인 후 모범 답안을 보완하도록 하겠습니다.'
      },
      {
        title:
          '타이포그래피에 자신 있으신가요?\n글 매무새를 위해 문제를 만들어주세요!',
        desc:
          '정답을 외우고 반복하는 행위를 방지하기 위해 ‘글 매무새’는 여러개의 타이포그래피 문제를 만들어서,\n랜덤으로 문제를 내고 있습니다.타이포그래피에 자신 있으시다면 <gmms-question@beomjun.kr> 로\n정해진 템플릿에 맞게 출제해주세요.운영팀에서 확인 후 글 매무새 문제들에 추가해 드립니다.'
      }
    ];

    return <Styled.Container>
        <Styled.FocusBar width={this.focusBarWidth} />
        <Styled.Label>주의 사항</Styled.Label>
        {descriptions.map((desc, i) => (
          <Box mt={i === 0 ? '4.5rem' : '12rem'} key={`desc-${i}`}>
            <Styled.ItemTitle>
              <span>{i + 1}.</span>
              {desc.title}
            </Styled.ItemTitle>
            <Styled.ItemDesc>{desc.desc}</Styled.ItemDesc>
          </Box>
        ))}
        <Flex width="100%" justifyContent="flex-end">
        <Styled.ButtonWrapper onClick={next}>
            <Styled.GotoStart>시작하기</Styled.GotoStart>
            <Styled.ButtonShadow />
          </Styled.ButtonWrapper>
        </Flex>
      </Styled.Container>;
  }
}

export default Instruction;
