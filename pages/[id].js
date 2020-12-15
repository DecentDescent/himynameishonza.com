import { withRouter, useRouter } from "next/router";
import { getPost } from "../api/posts";
import { useState, useEffect } from "react";
import { LayoutPost } from "../components/Layout";

const Post = ({ data }) => {
  const [postData, setData] = useState(data);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getPost(id).then((res) =>
      res.json().then((json) => setData(json.result[0]))
    );
  }, [id]);

  return postData ? <LayoutPost data={postData} /> : "Loading";
};

Post.getInitialProps = async ({ req }) => {
  if (typeof window !== "undefined") {
    return { data: null };
  }

  const id = req.url.replace("/", "");
  const res = await getPost(id);
  const json = await res.json();
  const data = json.result[0];
  console.log("SERVER!");
  return { data };
};

export default withRouter(Post);
