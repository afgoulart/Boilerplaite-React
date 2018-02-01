import React, {Component} from 'react';
import HomeContainer from '../containers/HomeContainer';
import Link from './NavLinks';

const Menu = () => {
  return <div>
    <ul>
      <li><Link route="home">Início</Link></li>
    </ul>
  </div>
};

const NotFound = () => <h1>404 - Página não encontrada!</h1>

const LoadingPage = ({page}) => {
  if(!page) return <HomeContainer />;

  switch(page) {
    case 'home':
      return <HomeContainer />;
    default:
      return <NotFound />;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <LoadingPage page={this.props.route} />
      </div>
    );
  }
}

export default App;