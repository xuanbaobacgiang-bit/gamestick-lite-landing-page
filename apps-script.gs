/**
 * ============================================================
 * GOOGLE APPS SCRIPT — NHẬN ĐƠN HÀNG LANDING PAGE GAME STICK LITE (index.html)
 * ------------------------------------------------------------
 * Ghi đơn vào bảng "Đại An - Thailand":
 *   https://docs.google.com/spreadsheets/d/12NQHsLfe8MD47FK1dUVm0gxuyvOk6JA7DbR9LxRPb8Y/edit
 *   → tab "Máy chơi game" (tự tạo nếu chưa có, kèm dòng tiêu đề),
 *   KHÔNG đụng tới các tab sản phẩm khác trong cùng bảng: Kem tẩy kính D1,
 *   HUD GPS, Foam Cleaner, Máy làm sữa hạt, Xit tay ri set, Máy bắn đinh,
 *   Miếng lau kính, Máy massage da đầu HEZHENG, ds).
 *
 * Cột (đúng 8 cột theo yêu cầu — CHỈ giữ đúng các thông tin cần dùng):
 * Thời gian | Tên Khách | Số điện thoại | Địa chỉ | Lựa chọn của khách |
 * Link landing page | Ghi chú | Nguồn chiến dịch
 * Thời gian ghi theo giờ Thái Lan (Asia/Bangkok, +7).
 * "Nguồn chiến dịch" lấy từ utm_source trên URL landing page (?utm_source=...).
 *
 * CÁCH TRIỂN KHAI:
 *   1. Mở Sheet ở link trên → menu Tiện ích mở rộng (Extensions) → Apps Script.
 *   2. Tạo project MỚI, ĐỘC LẬP (không dùng chung với sản phẩm khác) → dán
 *      TOÀN BỘ file này vào.
 *   3. Chọn hàm "setupHeaders" ở thanh công cụ trên cùng → bấm Run 1 LẦN
 *      để tự động tạo tab "Máy chơi game" + dòng tiêu đề (nếu sheet đang trống).
 *   4. Bấm Deploy (Triển khai) → New deployment → Web app:
 *        - Description: Game Stick Lite Thailand orders
 *        - Execute as:  Me (chính chủ sheet)
 *        - Who has access: Anyone   ← QUAN TRỌNG để landing page gửi được)
 *   5. Authorize / cấp quyền khi được hỏi (đăng nhập đúng tài khoản chủ Sheet).
 *   6. Copy URL dạng .../exec → dán vào biến `webhookUrl` trong index.html
 *      (tìm dòng `webhookUrl: null` trong khối `TikTokShopBuyPopup.config({...})`).
 * ============================================================
 */

var SPREADSHEET_ID = '12NQHsLfe8MD47FK1dUVm0gxuyvOk6JA7DbR9LxRPb8Y';
var SHEET_NAME     = 'Máy chơi game';
var TIMEZONE       = 'Asia/Bangkok'; // +7, khớp giờ Thái Lan

/* Thứ tự cột — đúng 8 cột theo yêu cầu */
var HEADERS = [
  'Thời gian', 'Tên Khách', 'Số điện thoại', 'Địa chỉ',
  'Lựa chọn của khách', 'Link landing page', 'Ghi chú', 'Nguồn chiến dịch'
];

function getSheet_() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/* Chạy tay 1 lần để tạo sẵn tab + dòng tiêu đề, nếu sheet đang trống */
function setupHeaders() {
  getSheet_();
}

function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }
    var sheet = getSheet_();
    var thoiGian = Utilities.formatDate(new Date(), TIMEZONE, 'dd/MM/yyyy HH:mm:ss');
    var luaChon  = (data.product_name || '') + ' — ' + (data.quantity || '') + ' ชิ้น';
    sheet.appendRow([
      thoiGian,
      data.fullname || '',
      "'" + (data.phone || ''),   // prefix ' de giu so 0 dau SDT
      data.address  || '',
      luaChon,
      data.page_url || '',
      data.note     || '',
      data.utm_source || ''
    ]);
    return jsonOut_({ ok: true, order_code: data.order_code || '' });
  } catch (err) {
    return jsonOut_({ ok: false, error: String(err) });
  }
}

/* Mở URL /exec bằng trình duyệt để kiểm tra script còn sống */
function doGet() {
  return jsonOut_({ ok: true, service: 'Game Stick Lite Thailand orders webhook', sheet: SHEET_NAME });
}

function jsonOut_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
