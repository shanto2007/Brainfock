/**
 * Brainfock - Community & Business Management Solution
 *
 * @link http://www.brainfock.org
 * @copyright Copyright (c) 2015 Sergii Gamaiunov <hello@webkadabra.com>
 */
import React from 'react';

import List from './boards';
import ProjectsEmpty from '../boards.empty';
import ListComponent from '../boards.react';
import Loader from '../../components/Loader';

module.exports = React.createClass({
  /**
   * This component's user-friendly name for breadcrumbs
   * @param bcComponent
   * @returns {string}
   */
  displayName: function(bcComponent) {
    // todo: i18n
    return 'Boards';
  },

  componentWillMount() {
    if(process.env.IS_BROWSER==true) {
      this.props.topic_actions.loadTopicGroup('board', {}/*, this.props.parentModel*/);
      this.props.topic_actions.find('board', {}/*, this.props.parentModel*/);
    }
  },

  render: function()
  {
    const {boards:{list, board, group, meta}, topic_actions, msg, history} = this.props;

    if (!group || !group.groupKey || meta.loading === true) {
      return <h1><Loader /></h1>;
    }

    if (!list.size) {
      const {children, ...passProps} = this.props;
      return (
        <ProjectsEmpty {...passProps} />
      );
    }

    return (
      <List
        itemComponent={ListComponent}
        board={board}
        group={group}
        list={list}
        topic_actions={topic_actions}
        msg={msg}
        history={history}
        meta={this.props.boards.meta}
        params={this.props.params}
        />
    );

  },
});
