import * as React from 'react';
import * as Styled from './styles';
import { Box } from '@rebass/grid';
import importFont from '../../../utils/importFonts';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import StartSvg from '../../../assets/start.svg';
import EmptyButton from '../../common/GlobalStyles/EmptyButtons';

@observer
class StartButton extends React.Component {
  @observable fontLoaded = false;

  componentDidMount() {
    importFont({
      family: 'HS Spring Wind',
      url: 'static/hs-spring-wind.css'
    }).then(() => (this.fontLoaded = true));
  }
  render() {
    return (
      <Styled.Wrapper>
        <Styled.StartButton justifyContent="space-between" alignItems="center">
          <Box>
            <Styled.Title fontLoaded={this.fontLoaded}>글 매무새</Styled.Title>
            <Styled.Description>웹 타이포 그래피 게임</Styled.Description>
          </Box>
          <Box>
            <EmptyButton>
              <img src={StartSvg} />
            </EmptyButton>
          </Box>
        </Styled.StartButton>
        <Styled.BorderShadow />
      </Styled.Wrapper>
    );
  }
}

export default StartButton;
