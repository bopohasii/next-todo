import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';

import Page from '../../compoents/Page';

const Login = () => (
  <Page title="Login page" subTitle="here s your start point">
    <h1>Login page</h1>
    ========================
    <Button type="dashed">
      <Link href="/todo" as="/todo">todo page</Link>
    </Button>
  </Page>
);

export default Login;
