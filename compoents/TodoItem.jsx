import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';


const TodoItem = ({
  todoId,
  title,
  content,
  children,
}) => (
  <Card title={title}>
    <p>
      ID #
      {todoId}
    </p>
    {content}
    {children}
  </Card>
);

TodoItem.defaultProps = {
  children: null,
  content: null,
};

TodoItem.propTypes = {
  todoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
  content: PropTypes.string,
};

export default TodoItem;
