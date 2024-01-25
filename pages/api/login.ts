// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";

type Data = {
  message: string;
};

const proxy = httpProxy.createProxyServer();

// turn of bodyParser : vì default bodyParser send lên proxy sẽ được parse
export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(404).json({ message: "Method not supported" });
  }

  return new Promise((resolve) => {
    // don't send cookies to API server
    req.headers.cookie = "";

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = "";
      proxyRes.on("data", function (chunk) {
        body += chunk;
      });
      proxyRes.on("end", function () {
        // try-catch trường hợp fail.
        const { accessToken, expiredAt } = JSON.parse(body);

        // TODO: convert token to cookies, secure khi chạy trên môi trường production
        const cookies = new Cookies(req, res, {
          secure: process.env.NODE_ENV !== "development",
        });
        cookies.set("access_token", accessToken, {
          httpOnly: true,
          sameSite: "lax",
          expires: new Date(expiredAt),
        });

        // response có thể ép kiểu về dc.
        (res as NextApiResponse)
          .status(200)
          .json({ message: "login successfully" });
        try {
        } catch (error) {
          (res as NextApiResponse)
            .status(500)
            .json({ message: "something went wrong" });
        }
        resolve(true);
      });
    };

    proxy.once("proxyRes", handleLoginResponse);

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true, // tự handle login trã về
    });
  });

  // /api/students
  // https://js-post-api.herokuapp.com/api/students

  // res.status(200).json({ name: "PATH - match on here" });
}
