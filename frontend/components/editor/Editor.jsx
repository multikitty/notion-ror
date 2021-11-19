import React from 'react';
import SidebarContainer from '../sidebar/SidebarContainer';
import PageContainer from '../page/PageContainer';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageId: this.props.location.pathname.slice(3),
      pages: {},
      blocks: {},
      isLoading: true,
    };
  }

  async componentDidMount() {
    const pageRes = await this.props.fetchPages(this.props.currentUser.id);
    const blockRes = await this.props.fetchBlocks(this.props.currentUser.id);
    const pages = pageRes.pages;
    const blocks = blockRes.blocks;
    this.setState({
      pages: pages,
      blocks: blocks,
      isLoading: false,
    }, () => {
      if (!pages[this.state.pageId]) {
        const firstPage = Object.values(pages)[0];
        this.props.history.push(`/p/${firstPage.id}`);
      }
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>Loading...</div>
        );
    }

    return (
      <div id="editor">
        <SidebarContainer pages={this.state.pages} />
        <PageContainer pages={this.state.pages} blocks={this.state.blocks} />
      </div>
    );
  }
}

export default Editor;
