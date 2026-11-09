const pptxgen = require('pptxgenjs');

const pres = new pptxgen();

// Layout 16:9 Widescreen (13.33 x 7.5 inches)
pres.layout = 'LAYOUT_16x9';
pres.author = 'Giáo viên Tin học 6';
pres.company = 'Tổ Tin học - THCS';
pres.subject = 'Tin học 6 - Bài 4: Mặt tích cực và tiêu cực của một số tính năng AI';
pres.title = 'Bài 4: Khám phá mặt tích cực và tiêu cực của một số tính năng AI';

// Colors (Canva Modern Education Palette)
const COLOR_BG = 'F8FAFC';
const COLOR_WHITE = 'FFFFFF';
const COLOR_NAVY = '1E1B4B';
const COLOR_TEXT = '0F172A';
const COLOR_MUTED = '64748B';
const COLOR_INDIGO = '4338CA';
const COLOR_INDIGO_BG = 'EEF2FF';
const COLOR_GREEN = '059669';
const COLOR_GREEN_BG = 'ECFDF5';
const COLOR_AMBER = 'D97706';
const COLOR_AMBER_BG = 'FFFBEB';
const COLOR_PINK = 'DB2777';
const COLOR_PINK_BG = 'FCE7F3';
const COLOR_RED = 'DC2626';
const COLOR_RED_BG = 'FEF2F2';
const COLOR_BORDER = 'E2E8F0';

const FONT_TITLE = 'Arial';
const FONT_BODY = 'Arial';

// Helper for top navigation banner
function addTopBanner(slide, category, title, subtitle) {
  // Category Pill
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.8, y: 0.5, w: 4.2, h: 0.38,
    fill: { color: COLOR_INDIGO_BG },
    line: { color: 'C7D2FE', width: 1 },
    rectRadius: 0.19
  });
  slide.addText(category, {
    x: 0.8, y: 0.5, w: 4.2, h: 0.38,
    fontFace: FONT_TITLE, fontSize: 10, bold: true, color: '3730A3', align: 'center', valign: 'middle'
  });

  // Title
  slide.addText(title, {
    x: 0.8, y: 0.95, w: 11.73, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 24, bold: true, color: COLOR_NAVY, valign: 'middle'
  });

  // Subtitle
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.8, y: 1.55, w: 11.73, h: 0.35,
      fontFace: FONT_BODY, fontSize: 13, color: COLOR_MUTED, valign: 'top'
    });
  }
}

// Helper for slide footer
function addFooter(slide, slideNum, totalSlides = 7) {
  slide.addText(`TIN HỌC 6 • BÀI 4: MẶT TÍCH CỰC VÀ TIÊU CỰC CỦA MỘT SỐ TÍNH NĂNG AI`, {
    x: 0.8, y: 6.95, w: 8.5, h: 0.3,
    fontFace: FONT_BODY, fontSize: 9.5, color: '94A3B8'
  });
  slide.addText(`Trang ${slideNum} / ${totalSlides}`, {
    x: 10.53, y: 6.95, w: 2.0, h: 0.3,
    fontFace: FONT_BODY, fontSize: 9.5, color: '94A3B8', align: 'right'
  });
}

// ==========================================
// SLIDE 1: COVER
// ==========================================
const s1 = pres.addSlide();
s1.background = { color: '1E1B4B' };

// Accent shapes
s1.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 0.8, w: 3.8, h: 0.45,
  fill: { color: '312E81' },
  line: { color: '4338CA', width: 1 },
  rectRadius: 0.22
});
s1.addText('📚 TIN HỌC 6 • CHUYÊN ĐỀ TRÍ TUỆ NHÂN TẠO', {
  x: 0.8, y: 0.8, w: 3.8, h: 0.45,
  fontFace: FONT_TITLE, fontSize: 10, bold: true, color: 'C7D2FE', align: 'center', valign: 'middle'
});

s1.addText('BÀI 4: KHÁM PHÁ MẶT TÍCH CỰC VÀ\nTIÊU CỰC CỦA MỘT SỐ TÍNH NĂNG AI', {
  x: 0.8, y: 1.6, w: 11.73, h: 2.2,
  fontFace: FONT_TITLE, fontSize: 36, bold: true, color: COLOR_WHITE, valign: 'middle'
});

s1.addText('Mức độ nhận thức: Phân tích (Analyze) • Dạy học trực tuyến 100% trên LMS (E-Learning)', {
  x: 0.8, y: 3.8, w: 11.73, h: 0.6,
  fontFace: FONT_BODY, fontSize: 16, color: '94A3B8'
});

// Card highlight on cover
s1.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 4.8, w: 11.73, h: 1.6,
  fill: { color: '2E1065' },
  line: { color: '581C87', width: 1 },
  rectRadius: 0.2
});
s1.addText('🎯 YÊU CẦU CẦN ĐẠT CỐT LÕI (YCCĐ 6.B1.1):\nChỉ ra được mặt tích cực và hạn chế của một số tính năng AI cụ thể (ví dụ: tính năng thu thập dữ liệu người dùng giúp AI đưa ra gợi ý chính xác hơn nhưng có thể ảnh hưởng đến quyền riêng tư).', {
  x: 1.1, y: 4.95, w: 11.13, h: 1.3,
  fontFace: FONT_BODY, fontSize: 13, color: 'E9D5FF', lineSpacingMultiple: 1.2
});

// ==========================================
// SLIDE 2: TIẾN TRÌNH 4 HOẠT ĐỘNG TRÊN LMS
// ==========================================
const s2 = pres.addSlide();
s2.background = { color: COLOR_BG };
addTopBanner(s2, 'CẤU TRÚC TIẾN TRÌNH DẠY HỌC E-LEARNING', 'Tiến Trình 4 Hoạt Động Tuần Tự Trên Hệ Thống LMS', 'Cấu hình luồng học tập có điều kiện (Conditional Access / Restrict Access) theo Công văn 5512');

const actData = [
  { num: 'HĐ 1 (10p)', title: 'Khởi động', tool: 'Assignment YouTube', desc: 'Đếm 10 video YouTube cá nhân, nộp ảnh chụp màn hình + phản hồi tự động.', bg: COLOR_INDIGO_BG, border: 'C7D2FE', color: '3730A3' },
  { num: 'HĐ 2 (15p)', title: 'Hình thành KT', tool: 'Mô phỏng SCORM', desc: 'Đóng vai Kỹ sư AI điều khiển thuật toán gợi ý tạo ra Bong bóng thông tin (Filter Bubbles).', bg: COLOR_PINK_BG, border: 'FBCFE8', color: '9D174D' },
  { num: 'HĐ 3 (15p)', title: 'Luyện tập', tool: 'Kéo - Thả Drag & Drop', desc: 'Phân loại 10 thẻ tình huống vào 2 cột Tích cực / Hạn chế (Đạt chuẩn tối thiểu 8/10).', bg: COLOR_GREEN_BG, border: 'A7F3D0', color: '065F46' },
  { num: 'HĐ 4 (20p)', title: 'Vận dụng', tool: 'Diễn đàn & Rubric', desc: 'Thảo luận giải pháp thoát khỏi bong bóng lọc, giáo viên chấm điểm theo Rubric 3 tiêu chí.', bg: COLOR_AMBER_BG, border: 'FDE68A', color: '92400E' }
];

actData.forEach((act, idx) => {
  const x = 0.8 + idx * 2.95;
  s2.addShape(pres.ShapeType.roundRect, {
    x: x, y: 2.1, w: 2.8, h: 4.4,
    fill: { color: COLOR_WHITE },
    line: { color: act.border, width: 2 },
    rectRadius: 0.15
  });

  // Badge
  s2.addShape(pres.ShapeType.roundRect, {
    x: x + 0.2, y: 2.3, w: 2.4, h: 0.35,
    fill: { color: act.bg },
    rectRadius: 0.1
  });
  s2.addText(act.num, {
    x: x + 0.2, y: 2.3, w: 2.4, h: 0.35,
    fontFace: FONT_TITLE, fontSize: 10, bold: true, color: act.color, align: 'center', valign: 'middle'
  });

  // Activity title
  s2.addText(act.title, {
    x: x + 0.2, y: 2.8, w: 2.4, h: 0.45,
    fontFace: FONT_TITLE, fontSize: 14, bold: true, color: COLOR_NAVY, align: 'center'
  });

  // Tool tag
  s2.addText(`Công cụ: ${act.tool}`, {
    x: x + 0.2, y: 3.3, w: 2.4, h: 0.35,
    fontFace: FONT_BODY, fontSize: 10.5, bold: true, color: act.color, align: 'center'
  });

  // Desc
  s2.addText(act.desc, {
    x: x + 0.2, y: 3.8, w: 2.4, h: 2.4,
    fontFace: FONT_BODY, fontSize: 11, color: COLOR_TEXT, lineSpacingMultiple: 1.2
  });
});

addFooter(s2, 2);

// ==========================================
// SLIDE 3: BẢN CHẤT HỆ THỐNG GỢI Ý (RECOMMENDER SYSTEMS)
// ==========================================
const s3 = pres.addSlide();
s3.background = { color: COLOR_BG };
addTopBanner(s3, 'CƠ SỞ KHOA HỌC • TÀI LIỆU DP-REG ÚC (2023)', 'Bản Chất Của Hệ Thống Gợi Ý (Recommender Systems)', 'Minh chứng lý luận từ báo cáo Digital Platform Regulators Forum (Mục 2.B trang 16)');

// Box Left: How it works
s3.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 2.1, w: 5.7, h: 4.4,
  fill: { color: COLOR_WHITE },
  line: { color: COLOR_BORDER, width: 1.5 },
  rectRadius: 0.15
});
s3.addText('⚙️ Cơ Chế Thu Thập & Dự Đoán', {
  x: 1.1, y: 2.3, w: 5.1, h: 0.4,
  fontFace: FONT_TITLE, fontSize: 14, bold: true, color: COLOR_INDIGO
});
s3.addText('• Thu thập dữ liệu hành vi: Mọi lượt tìm kiếm, lịch sử xem, thời gian dừng màn hình (watch time) và các cú nhấp chuột đều được ghi lại.\n\n• Phân tích sở thích (Profiling): Thuật toán xây dựng hồ sơ chi tiết để dự đoán người dùng sẽ phản ứng thế nào với từng loại nội dung.\n\n• Đề xuất tức thì: Tự động đưa các video có xác suất tương tác cao nhất lên đầu trang chủ để tạo sự hấp dẫn tức thời.', {
  x: 1.1, y: 2.8, w: 5.1, h: 3.4,
  fontFace: FONT_BODY, fontSize: 11.5, color: COLOR_TEXT, lineSpacingMultiple: 1.25
});

// Box Right: Core Objective
s3.addShape(pres.ShapeType.roundRect, {
  x: 6.8, y: 2.1, w: 5.7, h: 4.4,
  fill: { color: COLOR_INDIGO_BG },
  line: { color: 'C7D2FE', width: 1.5 },
  rectRadius: 0.15
});
s3.addText('🎯 Mục Tiêu Thương Mại Cốt Lõi Của Nền Tảng', {
  x: 7.1, y: 2.3, w: 5.1, h: 0.4,
  fontFace: FONT_TITLE, fontSize: 14, bold: true, color: '312E81'
});
s3.addText('Trích dẫn Australian Government (2023) - DP-REG:\n\n"Drawing on this data, recommender algorithms are optimised to achieve various objectives... for example a service may be seeking to maximise user engagement by maximising time spent on its service (maximizing advertising revenue)..."\n\n👉 Ý NGHĨA SƯ PHẠM:\nThuật toán không ưu tiên nội dung đúng đắn hay đa chiều nhất, mà ưu tiên nội dung giữ chân người dùng lâu nhất để tối đa hóa doanh thu quảng cáo!', {
  x: 7.1, y: 2.8, w: 5.1, h: 3.4,
  fontFace: FONT_BODY, fontSize: 11, color: '1E1B4B', lineSpacingMultiple: 1.2
});

addFooter(s3, 3);

// ==========================================
// SLIDE 4: MẶT TÍCH CỰC CỦA AI GỢI Ý
// ==========================================
const s4 = pres.addSlide();
s4.background = { color: COLOR_BG };
addTopBanner(s4, 'PHÂN TÍCH TÍNH HAI MẶT (YCCĐ 6.B1.1)', 'Mặt Tích Cực: Tiện Lợi & Cá Nhân Hóa Trải Nghiệm', 'Những lợi ích thiết thực của tính năng gợi ý trong đời sống và học tập của học sinh');

const posItems = [
  { icon: '🎵', title: 'Cá nhân hóa giải trí', desc: 'Tự động đề xuất các bài hát, video phù hợp tâm trạng và sở thích mà không tốn công tìm kiếm.' },
  { icon: '📚', title: 'Hỗ trợ tự học hiệu quả', desc: 'Gợi ý các bài giảng trực tuyến, khóa học tiếng Anh chuẩn xác với trình độ và năng lực cá nhân.' },
  { icon: '🗺️', title: 'Tối ưu hóa đời sống thực tế', desc: 'Bản đồ giao thông thông minh gợi ý tuyến đường thông thoáng dựa trên tình trạng ùn tắc thời gian thực.' },
  { icon: '🛍️', title: 'Tiết kiệm thời gian tìm kiếm', desc: 'Giúp người tiêu dùng nhanh chóng tìm được sản phẩm ưng ý với mức giá và mẫu mã phù hợp nhất.' }
];

posItems.forEach((item, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = 0.8 + col * 5.95;
  const y = 2.1 + row * 2.25;

  s4.addShape(pres.ShapeType.roundRect, {
    x: x, y: y, w: 5.75, h: 2.05,
    fill: { color: COLOR_GREEN_BG },
    line: { color: 'A7F3D0', width: 1.5 },
    rectRadius: 0.12
  });

  s4.addText(`${item.icon} ${item.title}`, {
    x: x + 0.3, y: y + 0.25, w: 5.15, h: 0.35,
    fontFace: FONT_TITLE, fontSize: 13.5, bold: true, color: '065F46'
  });

  s4.addText(item.desc, {
    x: x + 0.3, y: y + 0.65, w: 5.15, h: 1.2,
    fontFace: FONT_BODY, fontSize: 11, color: COLOR_TEXT, lineSpacingMultiple: 1.2
  });
});

addFooter(s4, 4);

// ==========================================
// SLIDE 5: MẶT HẠN CHẾ 1 - BONG BÓNG THÔNG TIN
// ==========================================
const s5 = pres.addSlide();
s5.background = { color: COLOR_BG };
addTopBanner(s5, 'PHÂN TÍCH TÍNH HAI MẶT (YCCĐ 6.B1.1)', 'Mặt Hạn Chế 1: Bong Bóng Thông Tin (Filter Bubbles)', 'Minh chứng từ DP-REG Literature Summary (Mục 2.B.1.2 trang 18: Trust & Echo chambers)');

// Left visual bubble
s5.addShape(pres.ShapeType.roundRect, {
  x: 1.2, y: 2.2, w: 4.2, h: 4.2,
  fill: { color: 'FCE7F3' },
  line: { color: 'DB2777', width: 3 },
  rectRadius: 0.3
});
s5.addText('🫧 BONG BÓNG THÔNG TIN\n\nNgười dùng bị cô lập\nchỉ thấy nội dung cùng sở thích\n(Minecraft, Clickbait)\n\n❌ Mất kết nối thế giới bên ngoài', {
  x: 1.4, y: 2.8, w: 3.8, h: 3.0,
  fontFace: FONT_TITLE, fontSize: 11, bold: true, color: '9D174D', align: 'center', valign: 'middle'
});

// Right details
s5.addShape(pres.ShapeType.roundRect, {
  x: 6.0, y: 2.2, w: 6.5, h: 4.2,
  fill: { color: COLOR_WHITE },
  line: { color: 'FBCFE8', width: 1.5 },
  rectRadius: 0.15
});
s5.addText('⚠️ Tác Hại Của Bong Bóng Lọc Đối Với Học Sinh', {
  x: 6.3, y: 2.45, w: 5.9, h: 0.35,
  fontFace: FONT_TITLE, fontSize: 13.5, bold: true, color: '9D174D'
});
s5.addText('• Hạn chế góc nhìn đa chiều: Khi chỉ xem những gì mình thích, học sinh sẽ không tiếp cận được các quan điểm trái chiều hoặc kiến thức xã hội toàn diện.\n\n• Củng cố định kiến sai lệch: Càng xem nhiều nội dung một chiều, người dùng càng tin rằng thế giới chỉ vận hành theo quan điểm đó.\n\n• Dẫn dắt đến nội dung giật gân, tin giả (Fake news): Thuật toán có xu hướng ưu tiên nội dung giật gân (clickbait) để kích thích cảm xúc tò mò giữ chân người dùng.\n\n• Gây nghiện số (Digital addiction): Video tự động phát liên tục khiến học sinh dán mắt vào màn hình nhiều giờ, ảnh hưởng sức khỏe.', {
  x: 6.3, y: 2.9, w: 5.9, h: 3.3,
  fontFace: FONT_BODY, fontSize: 11, color: COLOR_TEXT, lineSpacingMultiple: 1.2
});

addFooter(s5, 5);

// ==========================================
// SLIDE 6: MẶT HẠN CHẾ 2 - MẤT KIỂM SOÁT DỮ LIỆU CÁ NHÂN
// ==========================================
const s6 = pres.addSlide();
s6.background = { color: COLOR_BG };
addTopBanner(s6, 'PHÂN TÍCH TÍNH HAI MẶT (YCCĐ 6.B1.1)', 'Mặt Hạn Chế 2: Mất Kiểm Soát Dữ Liệu Cá Nhân', 'Minh chứng từ DP-REG Literature Summary (Mục 2.B.2.3 trang 21: Privacy & Data collection)');

s6.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 2.1, w: 11.73, h: 4.4,
  fill: { color: COLOR_RED_BG },
  line: { color: 'FECACA', width: 1.5 },
  rectRadius: 0.15
});

s6.addText('🛡️ Rủi Ro Xâm Phạm Quyền Riêng Tư (Privacy Harms)', {
  x: 1.2, y: 2.4, w: 10.9, h: 0.4,
  fontFace: FONT_TITLE, fontSize: 15, bold: true, color: '991B1B'
});

s6.addText('1. Thu thập dữ liệu ngầm không giới hạn:\nCác nền tảng âm thầm ghi lại mọi hành vi: thời gian dừng xem từng giây, từ khóa tìm kiếm, vị trí địa lý, danh bạ và các thao tác vuốt màn hình.\n\n2. Nguy cơ người dùng mất kiểm soát thông tin cá nhân:\nTrích dẫn DP-REG (2023): "While collecting more user data can improve the quality of services, it also increases the risk of users losing control over increasing amounts of their personal information." Hồ sơ cá nhân càng chi tiết thì nguy cơ bị rò rỉ hoặc lạm dụng dữ liệu càng cao.\n\n3. Quảng cáo bám đuổi (Targeted Advertising):\nHọc sinh chỉ cần vô tình tìm kiếm một món đồ, ngay lập tức quảng cáo về món đồ đó sẽ xuất hiện bám đuổi trên mọi trang web và ứng dụng khác mà học sinh truy cập.', {
  x: 1.2, y: 2.9, w: 10.9, h: 3.3,
  fontFace: FONT_BODY, fontSize: 11.5, color: '450A0A', lineSpacingMultiple: 1.25
});

addFooter(s6, 6);

// ==========================================
// SLIDE 7: HÀNH ĐỘNG - THOÁT KHỎI BONG BÓNG LỌC
// ==========================================
const s7 = pres.addSlide();
s7.background = { color: COLOR_BG };
addTopBanner(s7, 'VẬN DỤNG THỰC TIỄN (HOẠT ĐỘNG 4)', 'Làm Chủ Công Nghệ: Thoát Khỏi Bong Bóng Thông Tin', 'Đề xuất các thao tác kỹ thuật thực tế để bảo vệ quyền riêng tư và đa dạng hóa nguồn tin');

const solItems = [
  { num: '01', title: 'Xóa lịch sử xem & tìm kiếm định kỳ', desc: 'Xóa dữ liệu cũ sẽ làm mất đi căn cứ phán đoán của AI, khiến thuật toán không thể tiếp tục nhồi nhét mãi các video cùng chủ đề cũ.' },
  { num: '02', title: 'Sử dụng chế độ Ẩn danh (Incognito)', desc: 'Bật tab ẩn danh khi tìm kiếm các chủ đề lạ hoặc học tập để trình duyệt không lưu lại cookie và lịch sử, tránh quảng cáo bám đuổi.' },
  { num: '03', title: 'Chủ động tìm kiếm từ khóa mới', desc: 'Chủ động tra cứu các chủ đề khoa học, nghệ thuật hoặc các quan điểm trái chiều để "huấn luyện lại" AI, giúp bảng tin phong phú hơn.' },
  { num: '04', title: 'Tắt tính năng cá nhân hóa quảng cáo', desc: 'Vào cài đặt tài khoản tắt tính năng "Personalized Ads" và cài đặt giới hạn thời gian sử dụng ứng dụng mỗi ngày (Screen time limit).' }
];

solItems.forEach((item, idx) => {
  const x = 0.8 + idx * 2.95;
  s7.addShape(pres.ShapeType.roundRect, {
    x: x, y: 2.1, w: 2.8, h: 4.4,
    fill: { color: COLOR_WHITE },
    line: { color: COLOR_BORDER, width: 1.5 },
    rectRadius: 0.15
  });

  s7.addShape(pres.ShapeType.roundRect, {
    x: x + 0.2, y: 2.3, w: 0.6, h: 0.6,
    fill: { color: COLOR_INDIGO },
    rectRadius: 0.1
  });
  s7.addText(item.num, {
    x: x + 0.2, y: 2.3, w: 0.6, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 12, bold: true, color: COLOR_WHITE, align: 'center', valign: 'middle'
  });

  s7.addText(item.title, {
    x: x + 0.2, y: 3.1, w: 2.4, h: 0.6,
    fontFace: FONT_TITLE, fontSize: 12, bold: true, color: COLOR_NAVY
  });

  s7.addText(item.desc, {
    x: x + 0.2, y: 3.8, w: 2.4, h: 2.4,
    fontFace: FONT_BODY, fontSize: 10.5, color: COLOR_TEXT, lineSpacingMultiple: 1.2
  });
});

addFooter(s7, 7);

// Output
pres.writeFile({ fileName: 'c:/Users/BRAVO 15/Downloads/LMS bài 4/bai_4_canva_slide.pptx' })
  .then(fileName => {
    console.log(`✅ Đã tạo thành công file PowerPoint chuẩn Canva: ${fileName}`);
  })
  .catch(err => {
    console.error('❌ Lỗi khi xuất PowerPoint:', err);
  });
