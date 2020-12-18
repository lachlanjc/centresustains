import Image from "next/image";
import { Grid } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";

const Layout = props => (
  <Grid
    columns={["64px 1fr", "96px 1fr"]}
    gap={3}
    sx={{ py: 3, img: { borderRadius: "circle" }, p: { my: 0 } }}
    {...props}
  />
);

const Avatar = props => <Image width={512} height={512} {...props} />;

const Team = props => (
  <Layout>
    <MDXProvider components={{ img: Avatar }} {...props} />
  </Layout>
);

export default Team;
