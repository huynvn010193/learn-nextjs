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
