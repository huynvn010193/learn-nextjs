Prefetch : fetch trước thông tin của 1 trang để đó, khi click vô link thì có sẵn và thực thi. Nếu kho có Prefetch thì khi click vô mới download.
khi dùng Link thì default đã prefetch.
===
Pre-rendering (NextJs): render sẵn file html ở phía server. Khi user load lên -> có sẵn html để show lên và js bắt đầu gắn event
Non pre-rendering (ReactJS): chỉ gửi về file trắng -> js bắt đầu gắn event
Static side Generation: SSG: default NextJS:
Server side rendering

===
Hàm getStaticProps :
`- Ở phía server-side
`- run lúc build-time
`-> Lúc dev thì request 1 lần thì đã chạy - Lúc lên production thì chỉ chạy lúc build thôi
`-> Dùng chung vs getServerSideProp thì sẽ báo lỗi.

Hàm getStaticPaths: Dùng khi gọi phần id. (build nhiều sẽ hạn chế)
`- paths: có bao nhiêu item -> gọi getStaticProps bấy nhiêu lần -> tạo ra bấy nhiêu html.
`-

Incremental Static Regeneration
`- fallback: bloking: khi request 1 page chưa có thì sẽ tự tạo ra. -> Nhược điểm time khá là lâu
`- fallback: true: render được trạng thái loading khi chưa có data.
`- fallback: false: ko call mới.

Phòng chóng CSRF attack -> senitize html -> Dompurify: giúp loại bỏ đi các loại thẻ nguy hiểm (thẻ script...)
http-cookie only: Tức là ko dùng js get dc phần cookie này.
NextJS có API Proxy -> dấu đi domain api server.

@emotion/styled @emotion/server @emotion/react @mui/material @mui/icons-material
