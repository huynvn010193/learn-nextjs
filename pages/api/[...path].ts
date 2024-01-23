// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";

// type Data = {
//   name: string;
// };

const proxy = httpProxy.createProxyServer();

// turn of bodyParser : vì default bodyParser send lên proxy sẽ được parse
export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // don't send cookies to API server
  req.headers.cookie = "";

  // /api/students
  // https://js-post-api.herokuapp.com/api/students

  proxy.web(req, res, {
    target: process.env.API_URL,
    changeOrigin: true,
    selfHandleResponse: false,
  });

  // res.status(200).json({ name: "PATH - match on here" });
}
