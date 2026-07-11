# CLAUDE.md — Landing page Game Stick Lite (Thai)

Landing page bán **Game Stick Lite** (เครื่องเล่นเกมย้อนยุค เสียบ HDMI พร้อมจอยไร้สาย 2 อัน) — thị trường **Thái Lan**.
Repo hoàn toàn độc lập, clone bố cục từ `hezheng-landing-page` (đổi theme + toàn bộ nội dung).

## Thông tin dự án

- **Khách hàng:** Đại An (cùng khách với `hezheng-landing-page`, `daianostmars-landing-page` — máy làm sữa hạt OSTMARS).
- **Sản phẩm:** Game Stick Lite — máy chơi game retro cắm HDMI kèm 2 tay cầm không dây 2.4G. Khách hàng khẳng định đây là **hàng nhập loại xịn, chất lượng cao** — không phải hàng trôi nổi kém chất lượng thường thấy trên thị trường (nhiều review tiêu cực về dòng sản phẩm này trên TikTok Shop quốc tế là do các seller khác bán hàng kém chất lượng). Nội dung landing page vì vậy nhấn mạnh USP "คุณภาพสูง / นำเข้าคัดสรรพิเศษ" thay vì phòng thủ về lỗi/rủi ro.
- **GitHub:** `github.com/xuanbaobacgiang-bit/gamestick-lite-landing-page` (private) — tài khoản `xuanbaobacgiang-bit`.
- **Vercel:** ✅ đã connect dưới team `xuanbaobacgiang` (đúng tác giả `xuanbaobacgiang-bit`), auto-deploy khi push `main`. Domain: `https://gamestick-lite-landing-page.vercel.app`.
- **Ngôn ngữ trang:** Tiếng Thái.

## Chạy local

```bash
python3 -m http.server 8354 --directory "/Users/lexuanbao/Documents/Landing Pages/gamestick-lite-landing-page"
# Mở: http://localhost:8354
```

## Kiến trúc

Single file: `index.html`, clone bố cục từ `hezheng-landing-page` (giữ nguyên toàn bộ class/id + JS logic) nhưng đổi theme + nội dung.

- **CSS — V2 (bản hiện tại):** thiết kế lại hoàn toàn bố cục so với bản đầu (giữ nguyên nội dung + toàn bộ JS). Nền vẫn SÁNG, 1 hệ "vật liệu" cố định xuyên suốt (màu nhấn xanh lá `--tm-gold:#16C172`, bo góc theo cấp bậc: ảnh 20px / thẻ 16px / nút-badge 12px, nút bo góc VUÔNG không dùng pill). Bố cục đa dạng theo loại nội dung: hero có **ticket giá "nổi"** đè mép dưới ảnh (xem lưu ý quan trọng bên dưới), bento grid (lợi ích), zigzag so le (công nghệ), bảng so sánh 2 cột (ưu điểm), 2 section MỚI "เหมาะกับใคร" (đối tượng phù hợp) và "นโยบายการสั่งซื้อ" (chính sách mua hàng). Font Kanit, cỡ chữ lớn (body 18px) cho khách 40-50 tuổi. Mobile-first 480px.
  - ⚠️ **Lưu ý khi sửa hero:** `.tm-ticket` dùng `position:absolute; transform:translateY(50%)` để nổi đè mép ảnh — nó LUÔN lồi xuống dưới đúng 50% chiều cao chính nó (~56px), bất kể padding-bottom của `.tm-hero-wrap` (đã từng gây bug che mất tiêu đề H1 — xem `.tm-titleblock` phải giữ `padding-top: 80px` để chừa chỗ, KHÔNG giảm xuống dưới ~72px nếu không muốn ticket đè chữ lại).
- **Giá:** chỉ 1 mức giá duy nhất — **999 ฿** (giá gốc 1,699 ฿), KHÔNG có combo nhiều gói (khác HEZHENG có 2 gói 1/2 cái). Phần "chọn gói" trong HEZHENG đã được đơn giản hoá thành khối hiển thị giá tĩnh.
- **JS:** inline `<script>` — reading-progress bar, scroll-reveal, countdown, buy popup (validate SĐT Thái `0\d{9}` hoặc `+66\d{9}`), lightbox ảnh (zoom full ảnh khi bấm), review filter, FAQ accordion, premium proof-slider (crossfade tự động + dot + vuốt tay). Logic giống hệt HEZHENG, chỉ bỏ phần "qty_pack options" trong `onBuyClick()` vì không có combo.
- **Ảnh:** 21 ảnh thật do khách cung cấp, đã nén JPEG q82 (`assets/images/*.jpg`, commit vào repo, KHÔNG dùng CDN ngoài — giống pattern HEZHENG, khác với repo Rejuvella gốc):
  - 16 ảnh banner marketing có sẵn chữ Thái (hero, full-set, plug-play, family-fun, two-player, features-5, real-gameplay, ports-detail, controller-grip, games-variety, before-after, usage-steps, unboxing, compact-size, real-review, trust-closing) — mỗi ảnh gắn đúng 1 section nội dung tương ứng.
  - 5 ảnh khách hàng thật đang chơi (`lifestyle-1..5.jpg`) — dùng trong slider cao cấp (crossfade + scale, dot indicator, vuốt tay, KHÔNG phải gallery scroll-snap thường) ở section "เล่นสนุกได้ทุกสถานการณ์".

## Các giá trị quan trọng hiện tại

| Mục | Giá trị |
|---|---|
| Facebook Pixel | `1602655537448756` (dùng chung với HEZHENG/OSTMARS — cùng khách Đại An) |
| Facebook Page | `https://www.facebook.com/profile.php?id=61592070861027` (page riêng, tách hẳn khỏi HEZHENG/OSTMARS — đổi từ `61591467853514` ngày 2026-07-11) |
| Messenger (chat) | `https://m.me/61592070861027` |
| Giá | 999 ฿ (giá gốc 1,699 ฿) — chỉ 1 mức giá, không có combo |
| Sự kiện Pixel | `PageView`, `ViewContent` (load trang), `InitiateCheckout` (bấm mua), `CompleteRegistration` (đặt hàng thành công) |
| Google Sheet nhận đơn | `12NQHsLfe8MD47FK1dUVm0gxuyvOk6JA7DbR9LxRPb8Y` ("Đại An - Thailand") → tab **"Máy chơi game"** — 8 cột: Thời gian, Tên Khách, Số điện thoại, Địa chỉ, Lựa chọn của khách, Link landing page, Ghi chú, Nguồn chiến dịch. Thời gian ghi theo giờ Thái Lan (Asia/Bangkok, +7). |
| webhookUrl (nhận đơn) | ✅ ĐÃ DEPLOY — Apps Script project riêng, độc lập "Game Stick Lite Thailand orders" (script ID `1W-R2neRzMKmvKs7tEk8SHMclfPRgSb_ZMvRPs2mJ-24WNr_wA6xQHRmm`). URL: `https://script.google.com/macros/s/AKfycby0_F-nLlLnwRPocnAIx3EHyNT_Zx2PHACGKpIxVraJpQGe5FLCUUuZd1ECIwk-SSZy/exec`. Đã test gửi đơn thật, ghi đúng 8 cột, đúng giờ Thái Lan. |

## Workflow sửa và deploy

```bash
# 1. Sửa index.html
# 2. Commit và push
git add index.html
git commit -m "mô tả thay đổi"
git push origin main
```

GitHub credential: dùng `gh auth switch --hostname github.com --user xuanbaobacgiang-bit` trước khi push nếu đang ở account khác.

## Đơn hàng → Google Apps Script → Sheets

Fetch dùng `mode: 'no-cors'` + `Content-Type: text/plain` để bypass CORS của Google Apps Script.
`apps-script.gs` trong repo là code Apps Script cần dán vào project riêng, độc lập (không dùng
chung với sản phẩm khác của Đại An) — ghi 8 cột (Thời gian, Tên Khách, Số điện thoại, Địa chỉ,
Lựa chọn của khách, Link landing page, Ghi chú, Nguồn chiến dịch) vào tab "Máy chơi game" trong
sheet "Đại An - Thailand". "Lựa chọn của khách" ghép từ `product_name + ' — ' + quantity + ' ชิ้น'`.
"Nguồn chiến dịch" lấy từ `utm_source` trên URL landing page. "Thời gian" dùng
`Utilities.formatDate(new Date(), 'Asia/Bangkok', 'dd/MM/yyyy HH:mm:ss')` để đảm bảo đúng giờ
Thái Lan (+7) bất kể timezone mặc định của Apps Script project.

## Việc còn thiếu trước khi chạy quảng cáo thật

Không còn việc bắt buộc nào. Fanpage đã tách riêng hẳn (`61592070861027`), chỉ còn chung Pixel ID
với HEZHENG/OSTMARS (không ảnh hưởng vận hành).

✅ Đã xong toàn bộ: 21 ảnh thật đã gắn đúng vị trí, premium proof-slider (5 ảnh khách hàng thật), QA
toàn diện qua preview browser (spacing, zoom ảnh, form validate, popup submit, FAQ, filter, slider —
tất cả hoạt động đúng, không lỗi console, không tràn màn hình, không ảnh vỡ), webhook Apps Script đã
deploy và test gửi đơn thật thành công, Vercel đã connect và live tại
`https://gamestick-lite-landing-page.vercel.app`. Landing page sẵn sàng chạy quảng cáo thật.
