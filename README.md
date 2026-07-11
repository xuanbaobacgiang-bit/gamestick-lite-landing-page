# Game Stick Lite — Landing Page (Thai)

Landing page bán **Game Stick Lite** (เครื่องเล่นเกมย้อนยุค เสียบ HDMI พร้อมจอยไร้สาย 2 อัน) cho thị trường Thái Lan.
Single-file HTML (`index.html`) theme "tech sáng" (nền trắng/xám nhạt + xanh lá retro-gaming làm điểm nhấn), toàn bộ nội dung tiếng Thái.

## Demo local

```bash
python3 -m http.server 8354 --directory .
# http://localhost:8354
```

## Cấu trúc

```
.
├── index.html          # toàn bộ trang (HTML + CSS + JS inline)
├── assets/images/       # 21 ảnh thật (16 banner marketing + 5 ảnh khách hàng thật cho proof-slider)
├── apps-script.gs       # Google Apps Script nhận đơn hàng — cần deploy thủ công (xem CLAUDE.md)
├── CLAUDE.md            # tài liệu chi tiết + việc còn thiếu
└── README.md
```

## Trước khi deploy

Xem `CLAUDE.md` mục "Việc còn thiếu" — chỉ còn thiếu deploy webhook Apps Script và connect Vercel.
`grep -n "PLACEHOLDER" index.html`

## Deploy

Push lên `main` của repo `xuanbaobacgiang-bit/gamestick-lite-landing-page` → connect Vercel sau (chưa làm ở bước này).
