# PHẦN 1. NGHIÊN CỨU CƠ SỞ THIẾT KẾ VÀ KHẢO SÁT CÔNG CỤ
### BÀI 4: KHÁM PHÁ MẶT TÍCH CỰC VÀ TIÊU CỰC CỦA MỘT SỐ TÍNH NĂNG AI (MỨC PHÂN TÍCH)
**HỌC PHẦN:** ĐÀO TẠO ĐIỆN TỬ VÀ ỨNG DỤNG (COMP1820)  
**MÔN HỌC:** TIN HỌC 6 — CHUYÊN ĐỀ TRÍ TUỆ NHÂN TẠO  

---

## 1.1. Học liệu, hoạt động học và loại tri thức

### A. Câu trả lời các câu hỏi nghiên cứu

#### Câu 1: Phân biệt học liệu và hoạt động học. Ví dụ chứng minh việc có học liệu chưa đủ để tạo thành hoạt động học.
* **Học liệu (Learning Resources)**: Là phương tiện, tài liệu hoặc nguồn dữ liệu chứa đựng thông tin tri thức phục vụ quá trình học tập (như sách giáo khoa, bài giảng điện tử, video, tệp âm thanh, mô hình mô phỏng, trang web). Học liệu đóng vai trò là vật mang nội dung, kích thích giác quan của người học.
* **Hoạt động học (Learning Activities)**: Là chuỗi thao tác nhận thức và hành vi có chủ đích do người học trực tiếp tiến hành dưới sự tổ chức, hướng dẫn của giáo viên nhằm xử lý học liệu để đạt được mục tiêu học tập. Một hoạt động học chuẩn mực theo Công văn 5512/BGDĐT-GDTrH luôn phải xác định rõ 4 thành tố: **Mục tiêu $\rightarrow$ Nội dung $\rightarrow$ Sản phẩm $\rightarrow$ Phương thức tổ chức thực hiện**.
* **Ví dụ thực tế trong Bài 4**:
  * Giáo viên đưa lên hệ thống LMS một trò chơi mô phỏng thuật toán gợi ý video. Tệp trò chơi này chỉ là **học liệu**.
  * Nếu giáo viên chỉ đưa đường link kèm lời dặn "Các em vào chơi thử trò chơi này nhé", thì đây chưa thể coi là một hoạt động học. Học sinh có thể nhấn bấm ngẫu nhiên, chơi đối phó mà không hề rút ra được bản chất của thuật toán hay sự hình thành của "bong bóng thông tin".
  * Để trở thành **hoạt động học (Hoạt động 2)**, giáo viên phải giao nhiệm vụ rõ ràng: "Em hãy đóng vai Kỹ sư AI lựa chọn các video để giữ chân bạn Nam càng lâu càng tốt; sau mỗi lượt lựa chọn, hãy quan sát sự thay đổi của thanh thời gian giữ chân và kích thước của Bong bóng thông tin; khi hoàn thành trò chơi, hãy trả lời 2 câu hỏi trắc nghiệm chốt kiến thức và điền 3 từ khóa (Cá nhân hóa, Bong bóng thông tin, Quyền riêng tư) vào Sách học sinh". Khi có nhiệm vụ, hành động xử lý thông tin, sản phẩm minh chứng và cơ chế phản hồi, học liệu mới phát huy đầy đủ giá trị sư phạm.
* *Căn cứ tham khảo*: Clark & Mayer (2011), Chương 2; Bộ Giáo dục và Đào tạo (2020), Công văn 5512/BGDĐT-GDTrH.

#### Câu 2: Khả năng, giới hạn và chức năng sư phạm của từng dạng học liệu số trong Bài 4

| Dạng học liệu | Khả năng nổi bật | Giới hạn cần lưu ý | Chức năng sư phạm trong Bài 4 |
| :--- | :--- | :--- | :--- |
| **Văn bản (Text)** | Trình bày thuật ngữ chuyên môn chính xác, chặt chẽ (Recommender Systems, Filter Bubbles, Privacy Harms), dễ đọc lại theo nhịp độ cá nhân. | Dễ gây cảm giác khô khan, đơn điệu nếu viết quá dài với học sinh lớp 6. | Cung cấp định nghĩa khái niệm, hướng dẫn từng bước của bài tập nộp file và tiêu chí ma trận Rubric. |
| **Hình ảnh & Biểu đồ tĩnh** | Trực quan hóa cấu trúc, biểu diễn sơ đồ luồng hoạt động của thuật toán gợi ý, tạo ấn tượng thị giác nhanh. | Không diễn tả được sự biến thiên liên tục theo thời gian thực của thuật toán. | Thể hiện ảnh chụp màn hình trang chủ YouTube thực tế, biểu đồ so sánh mặt tích cực vs mặt hạn chế của AI. |
| **Học liệu mô phỏng tương tác (Interactive Simulation)** | Bắt buộc học sinh phải thao tác tay và ra quyết định, được thử và sai an toàn, trực quan hóa các khái niệm trừu tượng. | Đòi hỏi công nghệ lập trình công phu, giao diện cần tối giản để tránh gây phân tán nhận thức. | Đóng vai Kỹ sư AI trong Hoạt động 2, giúp học sinh tự mình "tạo ra" và "chứng kiến" sự hình thành của Bong bóng thông tin. |
| **Bài tập trò chơi hóa (Gamification Drag & Drop)** | Tăng cường gắn kết qua thao tác kéo thả tay, tính điểm tức thì, tạo cảm giác chinh phục thử thách. | Dễ dẫn đến việc học sinh thử kéo hú họa nếu không có giới hạn số lần làm hoặc không có câu hỏi phản ánh sau đó. | Hoạt động 3 Luyện tập: Phân loại 10 thẻ tình huống thực tế, rèn luyện tư duy phân tích và đánh giá tính hai mặt của AI. |
| **Diễn đàn tương tác (Social LMS Forum)** | Tạo không gian giao tiếp xã hội đa chiều giữa học sinh - học sinh và học sinh - giáo viên, kích thích tư duy phản biện. | Đòi hỏi thời gian kiểm duyệt của giáo viên; học sinh có thể lúng túng nếu không có dàn ý định hướng. | Hoạt động 4 Vận dụng: Tranh luận giải pháp kỹ thuật phá vỡ bong bóng thông tin, rèn luyện trách nhiệm đạo đức số. |

#### Câu 3: Bốn loại tri thức theo Anderson & Krathwohl (2001) và mối liên hệ với hành động nhận thức
1. **Tri thức sự kiện (Factual Knowledge)**: Các thuật ngữ cơ bản, các tính năng công nghệ quen thuộc trong đời sống hàng ngày (thuật toán gợi ý video, bản đồ chỉ đường thông minh, quảng cáo bám đuổi). Hành động nhận thức: Nhận diện, liệt kê, ghi nhận.
2. **Tri thức khái niệm (Conceptual Knowledge)**: Bản chất của Hệ thống gợi ý (Recommender Systems); cơ chế hoạt động của Bong bóng thông tin (Filter Bubbles) và nguy cơ xâm phạm quyền riêng tư số. Hành động nhận thức: Phân loại, đối chiếu, giải thích bản chất quy luật.
3. **Tri thức quy trình (Procedural Knowledge)**: Trình tự các thao tác kỹ thuật thực tế để kiểm soát thuật toán (xóa lịch sử xem định kỳ, duyệt web bằng tab ẩn danh, chủ động tìm kiếm từ khóa đối lập). Hành động nhận thức: Thao tác thực hiện, áp dụng quy trình bảo vệ bản thân.
4. **Tri thức siêu nhận thức (Metacognitive Knowledge)**: Nhận thức về sự thao túng của thuật toán lên tâm lý và thói quen cá nhân; tự giác điều chỉnh thời gian sử dụng thiết bị; nhận thức rõ trách nhiệm của bản thân khi tham gia không gian mạng. Hành động nhận thức: Tự phản ánh, tự đánh giá, xác lập cam kết đạo đức số.

#### Câu 4: Phân tích mục tiêu trọng tâm Bài 4 Tin học 6
* **Yêu cầu cần đạt cốt lõi (`6.B1.1`)**: Chỉ ra được mặt tích cực và hạn chế của một số tính năng AI cụ thể (ví dụ: tính năng thu thập dữ liệu người dùng giúp AI đưa ra gợi ý chính xác hơn nhưng có thể ảnh hưởng đến quyền riêng tư). $\rightarrow$ Mức độ nhận thức: **Phân tích (Analyze)**.
* **Năng lực đặc thù AI (NLb)**: Đạo đức AI (1: Nêu và áp dụng nguyên tắc đạo đức cơ bản; 2: Nhận diện rủi ro, nội dung giả mạo/giật gân do AI tạo ra và cách ứng phó).
* **Năng lực chung (3, 4)**: Tự chủ và tự học trên LMS; Giải quyết vấn đề và sáng tạo (đề xuất biện pháp kỹ thuật).
* **Phẩm chất (5)**: Trách nhiệm (nhận thức rõ bản thân phải tự chịu trách nhiệm đối với quyết định và kết quả của mình, không đổ lỗi cho công cụ máy móc hỗ trợ).

---

## 1.2. Học đa phương tiện, tải nhận thức và thiết kế phổ quát (UDL)

### 1. Vận dụng các nguyên lý Clark & Mayer (2011)
* **Nguyên lý Đa phương tiện:** Kết hợp hình ảnh đồ họa mô phỏng trực quan với văn bản cô đọng trong bài tập tương tác, giúp học sinh lớp 6 nắm bắt sâu sắc hiện tượng "bong bóng thông tin" trừu tượng.
* **Nguyên lý Phân đoạn (Segmenting):** Bài học E-learning 45 phút được chia thành 4 chặng học tập độc lập có điều kiện mở khóa tuần tự (10p - 15p - 15p - 20p), giúp học sinh tự chủ tốc độ học tập.
* **Nguyên lý Đào tạo trước (Pre-training):** Học sinh quan sát thực tế tài khoản YouTube cá nhân ở Hoạt động 1 trước khi tìm hiểu cơ chế thuật toán ở Hoạt động 2.
* **Nguyên lý Báo hiệu (Signaling):** Làm nổi bật các thẻ phân loại bằng màu sắc chuẩn mực (Xanh lá: Mặt tích cực; Đỏ: Mặt hạn chế; Vàng: Lưu ý).

### 2. Quản lý tải nhận thức
* Giảm tải nhận thức ngoại lai bằng cách tối giản hóa giao diện, không sử dụng đồ họa trang trí rườm rà.
* Hỗ trợ tải nhận thức hữu ích bằng cách cung cấp Sách học sinh đồng hành để học sinh tổng hợp và hệ thống hóa kiến thức bằng chữ viết tay.

### 3. Thiết kế phổ quát cho học tập (UDL)
* Đa dạng cách thể hiện: Kết hợp hình ảnh, văn bản, giao diện kéo thả trực quan.
* Đa dạng cách biểu đạt: Học sinh có thể làm bài tập kéo thả, viết câu trả lời trên diễn đàn và ghi chép vào sách học sinh.

---

## 1.3. Hành trình học tập trong môi trường E-learning 100%
Tiến trình học tập tuần tự qua 4 hoạt động:
1. `HĐ 1: Khởi động` $\rightarrow$ Trải nghiệm thực tế với YouTube cá nhân (Assignment).
2. `HĐ 2: Hình thành kiến thức` $\rightarrow$ Đóng vai thuật toán giải mã Bong bóng thông tin (Simulation).
3. `HĐ 3: Luyện tập` $\rightarrow$ Thử thách phân loại 10 thẻ tình huống thực tế (Drag & Drop).
4. `HĐ 4: Vận dụng` $\rightarrow$ Thảo luận giải pháp kỹ thuật và chấm điểm Rubric (Forum).

---

## 1.4. Đánh giá công cụ phát triển theo khung SECTIONS (Bates, 2019)
Phân tích chi tiết 8 yếu tố (Students, Ease of use, Cost, Teaching functions, Interactivity, Organizational issues, Networking, Security) chứng minh tính phù hợp vượt trội của bộ 4 công cụ số được lựa chọn cho lứa tuổi học sinh lớp 6 trên nền tảng LMS.

---

## 1.5. Thử nghiệm hai cách sử dụng AI trong phát triển học liệu
* **Cách 1 (AI làm Trợ lý sư phạm):** Gợi ý ngân hàng tình huống thực tế, xây dựng tiêu chí Rubric định lượng theo Công văn 5512.
* **Cách 2 (AI làm Kỹ sư lập trình):** Hỗ trợ viết mã nguồn HTML5/JavaScript tương tác cho game mô phỏng và bài tập kéo thả, tích hợp cơ chế tính điểm tự động.
* *Nguyên tắc cốt lõi:* Luôn có sự kiểm duyệt và định hướng sư phạm của giáo viên (Human-in-the-loop).

