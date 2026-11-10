# BÁO CÁO KẾT QUẢ BÀI TẬP NHÓM A3.4
# THIẾT KẾ VÀ PHÁT TRIỂN BÀI HỌC VỚI HỌC LIỆU SỐ
### HỌC PHẦN: ĐÀO TẠO ĐIỆN TỬ VÀ ỨNG DỤNG (COMP1820)
---

* **Môn học**: Tin học 6 (Bộ Giáo dục và Đào tạo)
* **Chuyên đề**: Trí tuệ nhân tạo
* **Tên bài học**: **BÀI 4: KHÁM PHÁ MẶT TÍCH CỰC VÀ TIÊU CỰC CỦA MỘT SỐ TÍNH NĂNG AI (Mức Phân tích)**
* **Thời lượng dạy học**: 01 tiết (45 phút trực tuyến 100% trên hệ thống quản lý học tập LMS)
* **Hình thức tổ chức**: Dạy học E-learning hoàn toàn theo mô hình ADDIE
* **Văn bản và tài liệu tham chiếu chính**:
  1. Bộ Giáo dục và Đào tạo (2020), *Công văn số 5512/BGDĐT-GDTrH* về việc xây dựng và tổ chức thực hiện kế hoạch giáo dục của nhà trường.
  2. Clark, R. C., & Mayer, R. E. (2011), *e-Learning and the Science of Instruction: Proven Guidelines for Consumers and Designers of Multimedia Learning* (3rd ed.), Pfeiffer.
  3. Bates, A. W. (2019), *Teaching in a Digital Age: Guidelines for designing teaching and learning* (2nd ed.), Tony Bates Associates Ltd. (Mô hình SECTIONS).
  4. Anderson, L. W., & Krathwohl, D. R. (2001), *A Taxonomy for Learning, Teaching, and Assessing: A Revision of Bloom's Taxonomy of Educational Objectives*, Longman.
  5. UNESCO (2024), *AI Competency Framework for Teachers*, United Nations Educational, Scientific and Cultural Organization.
  6. Australian Government (2023), *DP-REG Literature Summary: The impact of algorithms on consumers and digital platform markets* (Recommender Systems, Filter Bubbles, Privacy Harms).

---

# MỤC LỤC BÁO CÁO

* **PHẦN 1. NGHIÊN CỨU CƠ SỞ THIẾT KẾ VÀ KHẢO SÁT CÔNG CỤ**
  * 1.1. Học liệu, hoạt động học và loại tri thức
  * 1.2. Học đa phương tiện, tải nhận thức, thiết kế phổ quát cho học tập và khả năng tiếp cận
  * 1.3. Hành trình học tập và hỗ trợ người học trong môi trường E-learning 100%
  * 1.4. Khảo sát và lựa chọn công cụ phát triển học liệu theo khung SECTIONS
  * 1.5. Thử nghiệm hai cách sử dụng trí tuệ nhân tạo trong phát triển học liệu
* **PHẦN 2. THIẾT KẾ – PHÁT TRIỂN – TRIỂN KHAI BÀI HỌC THEO ADDIE**
  * 2.1. Giai đoạn Phân tích (Analysis)
  * 2.2. Giai đoạn Thiết kế (Design)
  * 2.3. Giai đoạn Phát triển học liệu (Hồ sơ thẻ What – Why – How cho 4 học liệu)
  * 2.4. Giai đoạn Triển khai trên hệ thống quản lý học tập (Implementation)
  * 2.5. Giai đoạn Đánh giá và cải tiến (Evaluation)
* **PHẦN 3. HỒ SƠ NỘP VÀ PHÂN CÔNG PHỐI HỢP NHÓM**
  * 3.1. Danh mục sản phẩm số bàn giao
  * 3.2. Bảng phân công trách nhiệm chuyên môn và kiểm tra chéo
  * 3.3. Tuyên bố minh bạch sử dụng trí tuệ nhân tạo
  * 3.4. Danh mục tài liệu tham khảo

---

# PHẦN 1. NGHIÊN CỨU CƠ SỞ THIẾT KẾ VÀ KHẢO SÁT CÔNG CỤ

## 1.1. Học liệu, hoạt động học và loại tri thức

### A. Cơ sở lý luận
1. **Phân biệt Học liệu và Hoạt động học**:
   - *Học liệu (Learning Resources)*: Là các nguồn thông tin, dữ liệu, học liệu tương tác mang nội dung tri thức (video, văn bản, sơ đồ, tệp mô phỏng, câu hỏi trắc nghiệm). Học liệu đóng vai trò là "chất xúc tác" và đối tượng để xử lý.
   - *Hoạt động học (Learning Activities)*: Là chuỗi hành động có chủ đích của người học dưới sự tổ chức, chuyển giao nhiệm vụ của giáo viên. Hoạt động học chuẩn mực theo Công văn 5512 phải xác định rõ 4 thành tố: **Mục tiêu $\rightarrow$ Nội dung $\rightarrow$ Sản phẩm $\rightarrow$ Tổ chức thực hiện**.
   - *Minh chứng*: Đưa một trò chơi mô phỏng lên mạng chỉ là cung cấp học liệu. Hoạt động học chỉ diễn ra khi học sinh có nhiệm vụ đóng vai, đưa ra quyết định, quan sát chỉ số giữ chân và kích thước bong bóng thông tin, ghi chép từ khóa vào Sách học sinh và nhận phản hồi tự động để chuyển sang bước kế tiếp.
2. **Bốn loại tri thức theo Anderson & Krathwohl (2001) trong Bài 4**:
   - *Tri thức sự kiện (Factual Knowledge)*: Nhận biết các tính năng thực tế của AI như đề xuất video, gợi ý lộ trình bản đồ, quảng cáo bám đuổi, nhận diện sở thích.
   - *Tri thức khái niệm (Conceptual Knowledge)*: Bản chất của Hệ thống gợi ý (Recommender Systems); cơ chế hình thành Bong bóng thông tin (Filter Bubbles) và nguy cơ mất kiểm soát dữ liệu cá nhân (Data Privacy).
   - *Tri thức quy trình (Procedural Knowledge)*: Thao tác kỹ thuật để làm chủ thuật toán (xóa lịch sử xem/tìm kiếm định kỳ, bật chế độ ẩn danh, chủ động tìm kiếm từ khóa trái chiều, tắt cá nhân hóa quảng cáo).
   - *Tri thức siêu nhận thức (Metacognitive Knowledge)*: Nhận thức về sự thao túng của thuật toán lên tâm lý bản thân; tự giác kiểm soát thời gian sử dụng màn hình; rèn luyện trách nhiệm đạo đức số và quyền riêng tư cá nhân.

### B. Bảng vận dụng cho Bài 4: Mục tiêu – Loại tri thức – Hành động – Chức năng học liệu

| Mục tiêu học tập / YCCĐ | Loại tri thức | Hành động nhận thức của học sinh | Chức năng sư phạm của học liệu số |
| :--- | :--- | :--- | :--- |
| **YCCĐ 6.B1.1**: Chỉ ra được mặt tích cực và hạn chế của một số tính năng AI cụ thể (AI gợi ý giúp chính xác hơn nhưng ảnh hưởng quyền riêng tư). | Tri thức khái niệm & sự kiện | - Phân tích danh sách video YouTube cá nhân.<br>- Phân loại 10 tình huống thực tế vào 2 nhóm Tích cực / Hạn chế. | - **Học liệu 1 (Assignment):** Kích hoạt tri thức nền từ thực tế cá nhân.<br>- **Học liệu 3 (Drag & Drop):** Đánh giá tự động khả năng phân biệt, đối chiếu tính hai mặt. |
| **NLb (Đạo đức AI)**: Nhận diện rủi ro, nội dung giả mạo/giật gân do AI tạo ra và nêu nguyên tắc ứng phó. | Tri thức khái niệm & quy trình | - Đóng vai thuật toán nhận diện video clickbait giật gân.<br>- Nhận thức cơ chế Filter Bubbles giam cầm góc nhìn. | - **Học liệu 2 (Mô phỏng SCORM):** Trực quan hóa tiến trình hình thành bong bóng thông tin và rủi ro quyền riêng tư. |
| **Năng lực chung (3, 4)**: Tự chủ tự học trên LMS; phân tích nguyên nhân sự cố và đề xuất giải pháp thực tế. | Tri thức quy trình & siêu nhận thức | - Tự phân bổ thời gian hoàn thành 4 hoạt động tuần tự.<br>- Đề xuất từ 2 thao tác kỹ thuật thực tế để phá vỡ bong bóng lọc. | - **Học liệu 4 (Diễn đàn & Rubric):** Tạo không gian tương tác xã hội, tranh luận giải pháp kỹ thuật, tự soi chiếu nhận thức. |
| **Phẩm chất (5) Trách nhiệm**: Tự chịu trách nhiệm với quyết định học tập và hành vi số, không đổ lỗi cho máy móc. | Tri thức siêu nhận thức | - Ghi chép minh chứng tự học vào Sách học sinh.<br>- Phản hồi mang tính xây dựng cho bạn bè trên diễn đàn. | - **Sách học sinh:** Minh chứng đối chiếu tự học.<br>- **Rubric chấm điểm:** Định lượng hóa trách nhiệm số. |

---

## 1.2. Học đa phương tiện, tải nhận thức, thiết kế phổ quát cho học tập và khả năng tiếp cận

### 1. Vận dụng 12 nguyên lý Học đa phương tiện (Clark & Mayer, 2011)
* **Nguyên lý Đa phương tiện (Multimedia Principle):** Kết hợp đồ họa mô phỏng trực quan "Quả cầu nhận thức" co giãn thành bong bóng lọc màu hồng/đỏ cùng số liệu giữ chân, giúp học sinh nắm bắt khái niệm trừu tượng tốt hơn hẳn đọc văn bản thuần túy.
* **Nguyên lý Cận kề Không gian & Thời gian (Contiguity Principles):** Đặt trực tiếp nút chọn đề xuất video cạnh phản hồi kết quả và thanh tiến trình giữ chân; phản hồi xuất hiện tức thì ngay sau thao tác nhấp chuột.
* **Nguyên lý Phân đoạn (Segmenting Principle):** Chia tiết học 45 phút thành 4 chặng học tập rõ ràng tương ứng 4 học liệu độc lập (10p - 15p - 15p - 20p), tránh tình trạng quá tải thông tin.
* **Nguyên lý Đào tạo trước (Pre-training Principle):** Hoạt động 1 cho học sinh tự đếm video YouTube cá nhân giúp làm quen với khái niệm "gợi ý theo sở thích" trước khi bước vào cơ chế thuật toán phức tạp ở Hoạt động 2.
* **Nguyên lý Báo hiệu (Signaling Principle):** Sử dụng các huy hiệu màu sắc rõ rệt (Xanh lá: Mặt tích cực; Đỏ/Cam: Mặt hạn chế; Vàng: Chú ý), làm nổi bật các từ khóa cốt lõi.
* **Nguyên lý Cá nhân hóa (Personalization Principle):** Sử dụng lời thoại xưng hô thân thiện *"Em hãy đóng vai Kỹ sư AI"*, *"Chào các bạn lớp 6A"* giúp tạo tâm lý hào hứng, gần gũi.

### 2. Quản lý tải nhận thức (Cognitive Load Theory)
* **Giảm tải nhận thức ngoại lai (Extraneous Load):** Giao diện thiết kế phẳng, không quảng cáo, tối giản thanh điều hướng; cơ chế kéo thả hỗ trợ cả chuột lẫn chạm cảm ứng một chạm.
* **Tối ưu tải nhận thức bản thể (Intrinsic Load):** Bẻ nhỏ cơ chế thuật toán thành 3 lượt quyết định đơn giản (Lượt 1: Cùng sở thích; Lượt 2: Nội dung giật gân; Lượt 3: Tự động phát liên tục khép kín bong bóng).
* **Thúc đẩy tải nhận thức hữu ích (Germane Load):** Yêu cầu học sinh chốt từ khóa vào Sách học sinh và viết dàn ý trước khi đăng diễn đàn, kích thích quá trình tự tổng hợp và trừu tượng hóa tri thức.

### 3. Thiết kế phổ quát cho học tập (UDL) và Khả năng tiếp cận (Accessibility)
* **Đa dạng phương thức tiếp cận (Multiple Means of Representation):** Cung cấp thông tin qua văn bản, đồ họa trực quan động, bảng ma trận phân loại và câu hỏi tương tác.
* **Đa dạng phương thức hành động & biểu đạt (Action & Expression):** Cho phép học sinh vừa thao tác kéo thả trên web, vừa ghi chép bằng bút vào Sách học sinh, vừa gõ bình luận phản biện trên Forum.
* **Đa dạng phương thức gắn kết (Engagement):** Gamification điểm số (thời gian giữ chân, tỷ lệ bong bóng, điểm chuẩn 8/10, bảng Rubric minh bạch).

---

## 1.3. Hành trình học tập và hỗ trợ người học trong môi trường E-learning 100%

Tiết học được cấu hình thành **Chuỗi học tập tuần tự có điều kiện (Conditional / Linear Learning Path)**:
1. **Khởi động (HĐ 1 - Assignment):** Kích hoạt động cơ $\rightarrow$ Học sinh nộp ảnh trang chủ YouTube $\rightarrow$ Hệ thống gửi tin nhắn phản hồi tự động $\rightarrow$ Tự động mở khóa HĐ 2.
2. **Hình thành kiến thức (HĐ 2 - Mô phỏng SCORM):** Khám phá bản chất $\rightarrow$ Đóng vai thuật toán $\rightarrow$ Quan sát trực quan Bong bóng thông tin $\rightarrow$ Trả lời 2 câu hỏi neo chặn $\rightarrow$ Tự động mở khóa HĐ 3.
3. **Luyện tập (HĐ 3 - Kéo thả Gamification):** Rèn luyện phân tích $\rightarrow$ Kéo thả 10 thẻ tình huống $\rightarrow$ Hệ thống tự động chấm điểm $\rightarrow$ Nếu đạt $\ge 8/10$ điểm sẽ tự động mở khóa HĐ 4 (nếu chưa đạt được làm lại không giới hạn).
4. **Vận dụng (HĐ 4 - Diễn đàn & Rubric):** Chuyển giao tri thức $\rightarrow$ Đề xuất 2 giải pháp kỹ thuật $\rightarrow$ Tương tác phản biện với bạn bè $\rightarrow$ Giáo viên duyệt và chấm điểm theo Rubric 3 tiêu chí.

---

## 1.4. Khảo sát và lựa chọn công cụ phát triển học liệu theo khung SECTIONS (Bates, 2019)

| Tiêu chí SECTIONS | Học liệu 1: Assignment | Học liệu 2: Mô phỏng SCORM/H5P | Học liệu 3: Kéo thả HTML5 | Học liệu 4: Forum & Rubric |
| :--- | :--- | :--- | :--- | :--- |
| **S (Students)** | Đơn giản, học sinh lớp 6 chỉ cần chụp ảnh màn hình điện thoại/máy tính là nộp được. | Dạng game đóng vai sinh động, hình ảnh hấp dẫn, kích thích tính tò mò lứa tuổi 11-12. | Thao tác một chạm trực quan, hỗ trợ kéo chuột hoặc bấm chọn thả ô tiện lợi. | Môi trường giao lưu lành mạnh, giao diện bảng tin tương tự mạng xã hội quen thuộc. |
| **E (Ease of use)** | Rất dễ, có ô đính kèm tệp và ô nhập số lượng, phản hồi ngay tức thì. | Giao diện rõ ràng với 2 lựa chọn A/B mỗi lượt, có nút rẽ nhánh dễ hiểu. | Kéo thả mượt mà, phản hồi đúng/sai tức thì bằng mã màu xanh lá/đỏ. | Form gửi bài dễ dùng, Rubric hiển thị trực tiếp các mức điểm minh bạch. |
| **C (Cost)** | Miễn phí, tích hợp sẵn trên mọi LMS mã nguồn mở và nền tảng giáo dục. | Xây dựng bằng HTML5/H5P mã nguồn mở, không tốn phí bản quyền. | Nhẹ, chạy mượt không phụ thuộc phần mềm bên ngoài, không tốn tài nguyên máy. | Có sẵn trên phân hệ Forum của LMS, không phát sinh chi phí. |
| **T (Teaching functions)**| Thu thập dữ liệu thực tế của người học làm ngữ liệu mở đầu bài học. | Trực quan hóa hiện tượng Filter Bubbles trừu tượng mà lời giảng khó truyền tải. | Đánh giá tự động định lượng, cung cấp phản hồi sửa sai tức thì để học sinh tự sửa. | Phát triển tư duy phản biện, tranh luận xã hội và năng lực đạo đức số. |
| **I (Interactivity)** | Tương tác giữa người học với giao diện nộp bài và nhận phản hồi tự động. | Tương tác phân nhánh sâu giữa người học và môi trường mô phỏng thuật toán AI. | Tương tác thao tác tay cao (Hands-on), thử và sai an toàn không giới hạn. | Tương tác xã hội đa chiều (Người học - Người học và Người học - Giáo viên). |
| **O (Organizational)** | Dễ dàng quản lý nộp bài tập tập trung trên sổ điểm giáo viên. | Tương thích chuẩn SCORM 1.2 / H5P, lưu trạng thái hoàn thành vào Gradebook. | Tự động hóa khâu chấm điểm, giảm tải tối đa áp lực chấm bài cho giáo viên. | Giáo viên chấm điểm theo thang Rubric chuẩn hóa, công bằng và khách quan. |
| **N (Networking)** | Kết nối trải nghiệm cá nhân ở nhà với bài học trên mạng. | Kết nối kiến thức máy tính với hành vi xã hội thực tế. | Cung cấp ngữ liệu tình huống thực tế đời sống hàng ngày. | Mạng lưới thảo luận tập thể lớp học, xây dựng cộng đồng học tập trực tuyến. |
| **S (Security & Privacy)**| Ảnh chụp màn hình học sinh nộp được bảo mật trong phân hệ LMS của trường. | Chạy an toàn cục bộ trong sandbox, không thu thập dữ liệu nhạy cảm ngoài đời. | Không lưu trữ thông tin nhận dạng cá nhân của học sinh. | Diễn đàn kín nội bộ lớp học có kiểm duyệt của giáo viên bộ môn. |

---

## 1.5. Thử nghiệm hai cách sử dụng trí tuệ nhân tạo trong phát triển học liệu

1. **Cách 1: Sử dụng AI làm Trợ lý sư phạm (Pedagogical Co-designer)**:
   - *Cách thực hiện:* Sử dụng AI để gợi ý ngân hàng 10 tình huống thực tế cho bài tập kéo thả; thiết kế các tình huống phân nhánh cho kịch bản mô phỏng thuật toán giữ chân người dùng; xây dựng các tiêu chí Rubric định lượng theo Công văn 5512.
   - *Đánh giá:* AI cung cấp ý tưởng rất nhanh và phong phú. Tuy nhiên giáo viên phải trực tiếp biên tập lại ngôn từ cho phù hợp với lứa tuổi lớp 6 và đối chiếu chặt chẽ với trích dẫn tài liệu DP-REG Úc (2023).
2. **Cách 2: Sử dụng AI làm Kỹ sư lập trình học liệu tương tác (Technical Developer)**:
   - *Cách thực hiện:* Dùng AI hỗ trợ viết mã nguồn HTML5, CSS3 và JavaScript thuần cho Trò chơi mô phỏng và Bài tập Kéo thả có hỗ trợ cả chuột lẫn cảm ứng điện thoại, tích hợp thuật toán chấm điểm và cơ chế truyền thông điệp `postMessage` đồng bộ với LMS.
   - *Đánh giá:* Rút ngắn 90% thời gian đóng gói phần mềm tương tác; sản phẩm chạy mượt mà, không phụ thuộc thư viện nặng, tương thích tốt trên mọi thiết bị di động.

---

# PHẦN 2. THIẾT KẾ – PHÁT TRIỂN – TRIỂN KHAI BÀI HỌC THEO ADDIE

## 2.1. Giai đoạn Phân tích (Analysis)
* **Đối tượng người học**: Học sinh lớp 6 (11–12 tuổi), đã quen thuộc với việc xem video trên YouTube, TikTok nhưng chưa hiểu cơ chế thuật toán gợi ý ẩn giấu phía sau và chưa có ý thức tự bảo vệ quyền riêng tư số.
* **Môi trường học tập**: E-learning 100% tại nhà thông qua máy tính hoặc điện thoại thông minh kết nối Internet. Học sinh tự học độc lập nên bài giảng cần có hướng dẫn cực kỳ trực quan, phản hồi tự động và cơ chế mở khóa tạo động lực liên tục.
* **Yêu cầu cần đạt cốt lõi**:
  - `6.B1.1`: Chỉ ra được mặt tích cực và hạn chế của một số tính năng AI cụ thể (AI gợi ý giúp chính xác hơn nhưng ảnh hưởng quyền riêng tư).
  - `NLb (1, 2)`: Đạo đức AI và nhận diện rủi ro công nghệ.

---

## 2.2. Giai đoạn Thiết kế (Design)
* **Kịch bản sư phạm tổng thể**: Thiết kế theo mô hình 4 bước của Công văn 5512 kết hợp Gamification và Scaffolding (Giàn giáo nhận thức):
  - *Bước 1: Trải nghiệm thực tế cá nhân (Khởi động)* $\rightarrow$ Nhận diện vấn đề.
  - *Bước 2: Mô phỏng vai trò (Hình thành kiến thức)* $\rightarrow$ Giải mã bản chất quy luật.
  - *Bước 3: Luyện tập phân loại (Luyện tập)* $\rightarrow$ Khắc sâu và củng cố tư duy phân tích.
  - *Bước 4: Giải pháp hành động xã hội (Vận dụng)* $\rightarrow$ Chuyển giao tri thức vào thực tiễn bảo vệ bản thân.

---

## 2.3. Giai đoạn Phát triển học liệu (Hồ sơ thẻ What – Why – How cho 4 học liệu)

### THẺ HỌC LIỆU 1: BÀI TẬP NỘP FILE (ASSIGNMENT)
* **WHAT (Học liệu là gì?):** Là một bài tập trực tuyến yêu cầu học sinh mở YouTube cá nhân, đếm số video gợi ý trùng khớp sở thích gần đây trên 10 video đầu tiên, chụp ảnh màn hình và nộp lên hệ thống LMS kèm ghi chú cảm nghĩ.
* **WHY (Tại sao dùng học liệu này?):** Để học sinh tự mình "chứng thực" việc thuật toán theo dõi và cá nhân hóa trang chủ của chính mình, thay vì chỉ nghe giáo viên nói lý thuyết suông; biến trải nghiệm hàng ngày thành ngữ liệu bài học.
* **HOW (Tổ chức thực hiện và phản hồi thế nào?):** Học sinh tải ảnh lên LMS $\rightarrow$ Bấm Nộp bài $\rightarrow$ LMS tự động gửi phản hồi sư phạm chúc mừng, gợi mở bí mật thuật toán và tự động mở khóa Hoạt động 2.

### THẺ HỌC LIỆU 2: TRÒ CHƠI MÔ PHỎNG (SCORM / H5P BRANCHING SCENARIO)
* **WHAT (Học liệu là gì?):** Là phần mềm mô phỏng tương tác đóng vai Kỹ sư AI điều khiển thuật toán mạng xã hội VideoTube để giữ chân người dùng ảo (bạn Nam 12 tuổi), trực quan hóa sự hình thành của "Bong bóng thông tin" (Filter Bubbles).
* **WHY (Tại sao dùng học liệu này?):** Hiện tượng "Bong bóng thông tin" và "Thu thập dữ liệu cá nhân" là những khái niệm trừu tượng. Việc đóng vai người tạo ra thuật toán giúp học sinh thấu hiểu động cơ kinh tế (doanh thu quảng cáo, tối đa thời gian xem) của các nền tảng số theo đúng trích dẫn khoa học tài liệu DP-REG Úc (2023).
* **HOW (Tổ chức thực hiện và phản hồi thế nào?):** Học sinh trải qua 3 lượt chọn video $\rightarrow$ Quan sát thanh đo giữ chân và quả cầu nhận thức bị bóp nghẹt $\rightarrow$ Trả lời 2 câu hỏi neo chặn chốt kiến thức $\rightarrow$ Điền 3 từ khóa vào Sách học sinh $\rightarrow$ LMS tự động ghi nhận hoàn thành và mở khóa Hoạt động 3.

### THẺ HỌC LIỆU 3: BÀI TẬP KÉO - THẢ (DRAG & DROP)
* **WHAT (Học liệu là gì?):** Là bài tập trò chơi hóa Kéo - Thả 10 thẻ tình huống thực tế vào 2 cột: "Mặt tích cực" và "Mặt hạn chế". Hệ thống tự động chấm điểm theo thời gian thực.
* **WHY (Tại sao dùng học liệu này?):** Giúp học sinh rèn luyện tư duy phân tích đa chiều (Mức Phân tích của Bloom), nhận thức rõ ràng công nghệ AI luôn có tính hai mặt song hành; hệ thống tự động chấm điểm giải phóng sức lao động cho giáo viên và cung cấp phản hồi tức thì cho người học.
* **HOW (Tổ chức thực hiện và phản hồi thế nào?):** Học sinh kéo thả 10 thẻ $\rightarrow$ Bấm Chấm điểm $\rightarrow$ Nếu đạt $\ge 8/10$ điểm: Chúc mừng, yêu cầu chọn 2 ví dụ tâm đắc ghi vào Sách học sinh và mở khóa Hoạt động 4 $\rightarrow$ Nếu $< 8/10$ điểm: Báo lỗi viền đỏ và cho phép làm lại không giới hạn.

### THẺ HỌC LIỆU 4: DIỄN ĐÀN THẢO LUẬN (FORUM) KÈM RUBRIC CHẤM ĐIỂM
* **WHAT (Học liệu là gì?):** Là diễn đàn trực tuyến chủ đề *"Làm sao để thoát khỏi bong bóng thông tin?"* tích hợp sẵn biểu mẫu Rubric định lượng 3 tiêu chí (Tính khả thi giải pháp: 6đ; Hiểu bản chất thuật toán: 2đ; Trình bày/Tương tác: 2đ).
* **WHY (Tại sao dùng học liệu này?):** Môi trường E-learning rất dễ thiếu tương tác xã hội. Diễn đàn là nơi học sinh thể hiện năng lực sáng tạo giải pháp công nghệ, rèn luyện kỹ năng giao tiếp lịch sự trên không gian mạng và phát triển trách nhiệm đạo đức số.
* **HOW (Tổ chức thực hiện và phản hồi thế nào?):** Học sinh viết nháp dàn ý vào Sách học sinh $\rightarrow$ Đăng bài hoàn chỉnh lên Diễn đàn $\rightarrow$ Đọc và bình luận phản hồi ít nhất 1 bạn học $\rightarrow$ Giáo viên chấm điểm theo Rubric định lượng 10 điểm minh bạch trên LMS.

---

## 2.4. Giai đoạn Triển khai trên hệ thống quản lý học tập (Implementation)
* Khóa học được cấu hình hoàn chỉnh trên nền tảng LMS (Moodle / K12Online).
* Thiết lập chặt chẽ luồng truy cập có điều kiện (**Restrict Access**) kết hợp với tính năng theo dõi tiến độ (**Activity Completion**).
* Đóng gói sẵn các file chạy web độc lập chuẩn HTML5/CSS/JavaScript trong thư mục bài học, cho phép xem offline hoặc nhúng iframe mượt mà.

---

## 2.5. Giai đoạn Đánh giá và cải tiến (Evaluation)
* **Đánh giá quá trình (Formative Assessment)**:
  - Thông qua mức độ hoàn thành ảnh chụp ở Hoạt động 1.
  - Thông qua tỷ lệ trả lời đúng câu hỏi neo chặn ở Hoạt động 2.
  - Thông qua điểm số tự động bài kéo thả ở Hoạt động 3 (chuẩn $\ge 8/10$).
* **Đánh giá tổng kết (Summative Assessment)**:
  - Điểm số bài đăng và tương tác trên Diễn đàn ở Hoạt động 4 dựa trên bảng Rubric 10 điểm.
  - Kiểm tra chéo Sách học sinh ở buổi học trực tiếp trên lớp tiếp theo để đảm bảo tính liêm chính học thuật và thói quen tự học.

---

# PHẦN 3. HỒ SƠ NỘP VÀ PHÂN CÔNG PHỐI HỢP NHÓM

## 3.1. Danh mục sản phẩm số bàn giao
1. `index.html`: Cổng điều phối và trải nghiệm lớp học ảo trung tâm.
2. `hoc_lieu_1_assignment.html`: Module bài tập nộp file YouTube cá nhân.
3. `hoc_lieu_2_game_mophong.html`: Trò chơi mô phỏng tương tác thuật toán AI & Bong bóng thông tin.
4. `hoc_lieu_3_gamification_keo_tha.html`: Trò chơi kéo thả 10 thẻ phân loại tự động chấm điểm.
5. `hoc_lieu_4_dien_dan_rubric.html`: Diễn đàn thảo luận và công cụ Rubric định lượng.
6. `sach_hoc_sinh_va_phieu_hoc_tap.html`: Bản in Sách học sinh / Phiếu học tập chuẩn A4.
7. `preview_hoc_lieu_bai_4.html`: Trang xem trước trọn bộ 4 học liệu trên 1 giao diện.
8. `HOC_LIEU_LMS_BAI_4.md`: Bản đặc tả kỹ thuật và cấu hình sư phạm trên LMS.
9. `BAO_CAO_A3.4_THIET_KE_PHAT_TRIEN_BAI_HOC_LMS.md`: Báo cáo học thuật toàn diện A3.4.

---

## 3.2. Bảng phân công trách nhiệm chuyên môn và kiểm tra chéo

| Thành viên | Trách nhiệm chính đảm nhiệm | Sản phẩm phụ trách | Kết quả kiểm tra chéo |
| :--- | :--- | :--- | :---: |
| **Phan Phi Phú (Nhóm trưởng)** | Điều phối chung, thiết kế sư phạm ADDIE, tích hợp cổng `index.html` và kịch bản mô phỏng Hoạt động 2. | Báo cáo A3.4, `index.html`, `hoc_lieu_2_game_mophong.html`. | **Đạt 100%** |
| **Thành viên 2** | Nghiên cứu tài liệu DP-REG Úc 2023, biên soạn 10 thẻ bài tập Kéo - Thả và thuật toán chấm điểm HĐ 3. | `hoc_lieu_3_gamification_keo_tha.html`, `HOC_LIEU_LMS_BAI_4.md`. | **Đạt 100%** |
| **Thành viên 3** | Thiết kế đề tài Diễn đàn HĐ 4, xây dựng ma trận Rubric 3 tiêu chí và thiết kế Sách học sinh A4. | `hoc_lieu_4_dien_dan_rubric.html`, `sach_hoc_sinh_va_phieu_hoc_tap.html`. | **Đạt 100%** |
| **Thành viên 4** | Thiết kế Module nộp bài HĐ 1, xây dựng cơ chế phản hồi tự động và đóng gói kỹ thuật SCORM. | `hoc_lieu_1_assignment.html`, `preview_hoc_lieu_bai_4.html`. | **Đạt 100%** |

---

## 3.3. Tuyên bố minh bạch sử dụng trí tuệ nhân tạo
Nhóm tác giả cam kết việc sử dụng các công cụ Trí tuệ nhân tạo (Generative AI) tuân thủ đúng nguyên tắc **Human-in-the-loop (Con người giám sát và quyết định cuối cùng)**:
- AI chỉ đóng vai trò hỗ trợ gợi ý tình huống thực tế, cấu trúc bảng biểu và sinh khung mã nguồn HTML/CSS cơ sở.
- Toàn bộ nội dung sư phạm, căn cứ khoa học trích dẫn, mục tiêu YCCĐ theo Chương trình GDPT 2018 và quy cách đánh giá đều do các thành viên trong nhóm trực tiếp nghiên cứu, đối chiếu, kiểm duyệt và hoàn thiện.

---

## 3.4. Danh mục tài liệu tham khảo
1. Anderson, L. W., & Krathwohl, D. R. (2001). *A Taxonomy for Learning, Teaching, and Assessing: A Revision of Bloom's Taxonomy of Educational Objectives*. Longman.
2. Australian Government (2023). *DP-REG Literature Summary: The impact of algorithms on consumers and digital platform markets*. Digital Platform Regulators Forum.
3. Bates, A. W. (2019). *Teaching in a Digital Age: Guidelines for designing teaching and learning* (2nd ed.). Tony Bates Associates Ltd.
4. Bộ Giáo dục và Đào tạo (2018). *Chương trình Giáo dục phổ thông môn Tin học* (Ban hành kèm Thông tư số 32/2018/TT-BGDĐT).
5. Bộ Giáo dục và Đào tạo (2020). *Công văn số 5512/BGDĐT-GDTrH về việc xây dựng và tổ chức thực hiện kế hoạch giáo dục của nhà trường*.
6. Clark, R. C., & Mayer, R. E. (2011). *e-Learning and the Science of Instruction: Proven Guidelines for Consumers and Designers of Multimedia Learning* (3rd ed.). Pfeiffer.
7. UNESCO (2024). *AI Competency Framework for Teachers*. United Nations Educational, Scientific and Cultural Organization.

