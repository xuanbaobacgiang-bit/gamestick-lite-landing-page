# CLAUDE.md — Landing page Game Stick Lite (Thai)

Landing page bán **Game Stick Lite** (เครื่องเล่นเกมย้อนยุค เสียบ HDMI พร้อมจอยไร้สาย 2 อัน) — thị trường **Thái Lan**.
Repo hoàn toàn độc lập, clone bố cục từ `hezheng-landing-page` (đổi theme + toàn bộ nội dung).

## Thông tin dự án

- **Khách hàng:** Đại An (cùng khách với `hezheng-landing-page`, `daianostmars-landing-page` — máy làm sữa hạt OSTMARS).
- **Sản phẩm:** Game Stick Lite — máy chơi game retro cắm HDMI kèm 2 tay cầm không dây 2.4G. Khách hàng khẳng định đây là **hàng nhập loại xịn, chất lượng cao** — không phải hàng trôi nổi kém chất lượng thường thấy trên thị trường (nhiều review tiêu cực về dòng sản phẩm này trên TikTok Shop quốc tế là do các seller khác bán hàng kém chất lượng). Nội dung landing page vì vậy nhấn mạnh USP "คุณภาพสูง / นำเข้าคัดสรรพิเศษ" thay vì phòng thủ về lỗi/rủi ro.
- **GitHub:** `github.com/xuanbaobacgiang-bit/gamestick-lite-landing-page` (private) — tài khoản `xuanbaobacgiang-bit`.
- **Vercel:** ⏳ CHƯA connect (theo yêu cầu — chỉ tạo file, commit, push GitHub trước).
- **Ngôn ngữ trang:** Tiếng Thái.

## Chạy local

```bash
python3 -m http.server 8354 --directory "/Users/lexuanbao/Documents/Landing Pages/gamestick-lite-landing-page"
# Mở: http://localhost:8354
```

## Kiến trúc

Single file: `index.html`, clone bố cục từ `hezheng-landing-page` (giữ nguyên toàn bộ class/id + JS logic) nhưng đổi theme + nội dung.

- **CSS:** inline `<style>` — theme "tech sáng": nền trắng/xám nhạt-xanh (`--tm-ivory:#FFFFFF`, `--tm-cream:#F2F8F4`) + **xanh lá retro-gaming** làm điểm nhấn (`--tm-gold:#16C172` → `--tm-gold-dark:#0E9257`) — hue-shift từ bản HEZHENG gốc (xanh dương), giữ nguyên độ tương phản/độ sáng để đảm bảo dễ đọc. Font Kanit. **Cỡ chữ tăng so với bản HEZHENG gốc** (body 16px→18px, section-title 24px→26px, v.v.) theo yêu cầu — dễ đọc hơn cho khách 40-50 tuổi. Mobile-first 480px.
- **Giá:** chỉ 1 mức giá duy nhất — **999 ฿** (giá gốc 1,699 ฿), KHÔNG có combo nhiều gói (khác HEZHENG có 2 gói 1/2 cái). Phần "chọn gói" trong HEZHENG đã được đơn giản hoá thành khối hiển thị giá tĩnh.
- **JS:** inline `<script>` — reading-progress bar, scroll-reveal, countdown, buy popup (validate SĐT Thái `0\d{9}` hoặc `+66\d{9}`), lightbox ảnh (zoom full ảnh khi bấm), review filter, FAQ accordion, premium proof-slider (crossfade tự động + dot + vuốt tay). Logic giống hệt HEZHENG, chỉ bỏ phần "qty_pack options" trong `onBuyClick()` vì không có combo.
- **Ảnh:** 21 ảnh thật do khách cung cấp, đã nén JPEG q82 (`assets/images/*.jpg`, commit vào repo, KHÔNG dùng CDN ngoài — giống pattern HEZHENG, khác với repo Rejuvella gốc):
  - 16 ảnh banner marketing có sẵn chữ Thái (hero, full-set, plug-play, family-fun, two-player, features-5, real-gameplay, ports-detail, controller-grip, games-variety, before-after, usage-steps, unboxing, compact-size, real-review, trust-closing) — mỗi ảnh gắn đúng 1 section nội dung tương ứng.
  - 5 ảnh khách hàng thật đang chơi (`lifestyle-1..5.jpg`) — dùng trong slider cao cấp (crossfade + scale, dot indicator, vuốt tay, KHÔNG phải gallery scroll-snap thường) ở section "เล่นสนุกได้ทุกสถานการณ์".

## Các giá trị quan trọng hiện tại

| Mục | Giá trị |
|---|---|
| Facebook Pixel | `1602655537448756` (dùng chung với HEZHENG/OSTMARS — cùng khách Đại An) |
| Facebook Page | `https://www.facebook.com/profile.php?id=61591467853514` (**khác** với HEZHENG/OSTMARS — page riêng cho Game Stick Lite) |
| Messenger (chat) | `https://m.me/61591467853514` |
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

1. **Connect Vercel** — repo chưa được connect để auto-deploy (theo yêu cầu, chưa cần làm ngay).
2. Cân nhắc tách fanpage Facebook riêng nếu muốn tách hẳn khỏi các sản phẩm khác của Đại An (hiện đã
   dùng page riêng `61591467853514`, chỉ chung Pixel ID với HEZHENG/OSTMARS).

✅ Đã xong: 21 ảnh thật đã gắn đúng vị trí, premium proof-slider (5 ảnh khách hàng thật), QA toàn diện
qua preview browser (spacing, zoom ảnh, form validate, popup submit, FAQ, filter, slider — tất cả hoạt
động đúng, không lỗi console, không tràn màn hình, không ảnh vỡ), webhook Apps Script đã deploy và
test gửi đơn thật thành công (đã xoá dữ liệu test khỏi Sheet).
