// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
import Cookies from "cookies";

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
  // TODO: Viết Promise khắc phục lỗi "this may result in stalled requests." Do Proxy Sever bắt phải có return
  return new Promise((resolve) => {
    // convert cookies to header Authorization
    const cookies = new Cookies(req, res);
    const accesstToken = cookies.get("access_token");
    if (accesstToken) {
      console.log("a", accesstToken);
      req.headers.Authorization = `Bearer ${accesstToken}`;
    }

    // don't send cookies to API server
    req.headers.cookie = "";

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    });

    proxy.once("proxyRes", () => {
      resolve(true);
    });
  });

  // /api/students
  // https://js-post-api.herokuapp.com/api/students

  // res.status(200).json({ name: "PATH - match on here" });
}
