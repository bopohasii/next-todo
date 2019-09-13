import React from 'react';
import {
  Card,
  Button,
} from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Page from '../../compoents/Page';


export default () => {
  const router = useRouter();
  const { todoId } = router.query;

  return (
    <Page title={`TODO #${todoId} page`} subTitle="here s your start with your TODO" on>
      <Card title={`Card title ${todoId}`}>
        Card content #
        {todoId}
        <Button type="link">
          <Link href="/todo" as="/todo">
            back
          </Link>
        </Button>
      </Card>
    </Page>
  );
};
