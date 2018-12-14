import Layout from '../components/common/Layout';
import * as React from 'react';
import Instruction from '../components/instruction';
import { observer, Provider } from 'mobx-react';
import LevelStore from '../stores/levelStore';
import InGame from '../components/InGame';

interface IPlayProps {
  levelStore?: LevelStore;
}

const levelStore = new LevelStore();
@observer
export default class Play extends React.Component<IPlayProps> {
  componentWillUnmount() {
    levelStore.reset();
  }
  render() {
    return (
      <Layout title="글 매무새">
        <Provider levelStore={levelStore}>
          <>
            {levelStore.level === 0 && <Instruction />}
            {levelStore.level > 0 && levelStore.level <= 10 && (
              <InGame currentLevel={levelStore.level} />
            )}
          </>
        </Provider>
      </Layout>
    );
  }
}
