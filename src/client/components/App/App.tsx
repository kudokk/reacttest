import * as React from 'react';
import { injectGlobal } from 'styled-components';
import { Main } from '../templates/Main';

injectGlobal`
  body {
    font-family: 'Muli', sans-serif;
    margin: 0;
  }
`;

export interface Props {
  name: string;
  setUserName: (name: string) => void;
}

// like App-Shell of PWA
export class App extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    // common processing only at initialization
    if (this.props.name === '') this.props.setUserName('Hiroppy');
  }

  render() {
    return <Main>{this.props.children}</Main>;
  }
}
