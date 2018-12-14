import * as React from 'react';
// import Link from 'next/link';
import Head from 'next/head';
import { ThemeProvider, theme } from '../../styled-components';
import GlobalStyles from './GlobalStyles';
import importFont from '../../utils/importFonts';

interface ILayoutProps {
  title?: string;
}

class Layout extends React.Component<ILayoutProps> {
  componentDidMount() {
    importFont({
      family: 'Noto Sans KR',
      url: 'https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700'
    });
    importFont({
      family: 'KoPub Batang',
      url: 'https://fonts.googleapis.com/earlyaccess/kopubbatang.css'
    });
  }
  render() {
    const { children, title } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {/* <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header> */}
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            {children}
          </>
        </ThemeProvider>
        {/* <footer>I'm here to stay</footer> */}
      </div>
    );
  }
}
// const Layout: React.SFC<Props> = ({
//   children,
//   title = 'This is the default title'
// }) => (

// );

export default Layout;
