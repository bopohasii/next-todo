import React from 'react';
import { Row, Col, Button } from 'antd';
import Link from 'next/link';
import faker from 'faker';

import Page from '../../compoents/Page';
import TodoItem from '../../compoents/TodoItem';

const todos = [
  {
    todoId: faker.random.uuid(),
    title: faker.lorem.slug(),
    contetnt: faker.lorem.paragraph(),
  }, {
    todoId: faker.random.uuid(),
    title: faker.lorem.slug(),
    contetnt: faker.lorem.paragraph(),
  }, {
    todoId: faker.random.uuid(),
    title: faker.lorem.slug(),
    content: faker.lorem.paragraph(),
  },
];

export default () => (
  <Page title="TODO s page" subTitle="here s your start with your TODO">
    <Row gutter={16}>
      {
        todos.map(({ todoId, title, content }) => (
          <Col span={8}>
            <TodoItem
              todoId={todoId}
              title={title}
              constent={content}
            >
              <Button type="promary">
                <Link href="/todo/[todoId]" as={`/todo/${todoId}`}>
                  Details
                </Link>
              </Button>
            </TodoItem>
          </Col>
        ))
      }
    </Row>
  </Page>
);
