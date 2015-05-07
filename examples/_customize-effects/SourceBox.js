'use strict';

import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DragDrop } from 'react-dnd';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem',
  margin: '0.5rem',
  width: '15rem'
};

const BoxSource = {
  beginDrag() {
    return {};
  }
};

@DragDrop(
  register =>
    register.dragSource(ItemTypes.BOX, BoxSource),

  boxSource => ({
    isDragging: boxSource.isDragging(),
    connectDragSource: boxSource.connect()
  })
)
export default class SourceBox extends Component {
  static propTypes = {
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    showCopyIcon: PropTypes.bool
  };

  render() {
    const { isDragging, connectDragSource, showCopyIcon } = this.props;
    const opacity = isDragging ? 0.4 : 1;
    const dropEffect = showCopyIcon ? 'copy' : 'move';

    return (
      <div style={{ ...style, opacity }}
           ref={c => connectDragSource(c, { dropEffect })}>
        When I am over a drop zone, I have {showCopyIcon ? 'copy' : 'no'} icon.
      </div>
    );
  }
}