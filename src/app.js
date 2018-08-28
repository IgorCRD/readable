import React from 'react';
import { ReadableAPI } from 'api/readable-api';
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    appName: PropTypes.string,
  };

  static defaultProps = {
    appName: '',
  };

  state = {
    posts: null,
  };

  componentDidMount() {
    ReadableAPI.getAllPosts().then((posts) => {
      if (Array.isArray(posts)) this.setState({ posts });
    });
  }

  render() {
    const { appName } = this.props;
    const { posts } = this.state;
    return (
      <div>
        {posts && <pre>{JSON.stringify(posts, null, '   ')}</pre>}
        {appName}
      </div>
    );
  }
}

export default App;
