/**
 * SCORM 1.2 Wrapper & Adapter cho LMS Bài 4 (Tin học 6)
 * Hỗ trợ giao tiếp chuẩn SCORM 1.2 với Moodle, Canvas, Blackboard, K12Online, vnEdu...
 */

var scorm = {
    api: null,
    isInitialized: false,

    findAPI: function(win) {
        var findAPITries = 0;
        while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
            findAPITries++;
            if (findAPITries > 10) return null;
            win = win.parent;
        }
        return win.API;
    },

    getAPI: function() {
        var theAPI = this.findAPI(window);
        if ((theAPI == null) && (window.opener != null) && (typeof(window.opener) != "undefined")) {
            theAPI = this.findAPI(window.opener);
        }
        return theAPI;
    },

    init: function() {
        this.api = this.getAPI();
        if (this.api != null) {
            var result = this.api.LMSInitialize("");
            if (result === "true" || result === true) {
                this.isInitialized = true;
                var status = this.api.LMSGetValue("cmi.core.lesson_status");
                if (status === "not attempted" || status === "") {
                    this.api.LMSSetValue("cmi.core.lesson_status", "incomplete");
                    this.api.LMSCommit("");
                }
                console.log("[SCORM 1.2] LMSInitialize thành công.");
                return true;
            }
        }
        console.warn("[SCORM 1.2] Chạy ở chế độ Standalone (không kết nối LMS).");
        return false;
    },

    setScore: function(score, maxScore, minScore) {
        if (!maxScore) maxScore = 100;
        if (!minScore) minScore = 0;
        if (this.isInitialized && this.api) {
            this.api.LMSSetValue("cmi.core.score.raw", score.toString());
            this.api.LMSSetValue("cmi.core.score.max", maxScore.toString());
            this.api.LMSSetValue("cmi.core.score.min", minScore.toString());
            if (score >= 80) {
                this.api.LMSSetValue("cmi.core.lesson_status", "passed");
            } else {
                this.api.LMSSetValue("cmi.core.lesson_status", "completed");
            }
            this.api.LMSCommit("");
            console.log("[SCORM 1.2] Đã lưu điểm: " + score);
        }
    },

    complete: function() {
        if (this.isInitialized && this.api) {
            this.api.LMSSetValue("cmi.core.lesson_status", "completed");
            this.api.LMSCommit("");
            console.log("[SCORM 1.2] Đã đánh dấu hoàn thành (completed).");
        }
    },

    finish: function() {
        if (this.isInitialized && this.api) {
            this.api.LMSFinish("");
            this.isInitialized = false;
            console.log("[SCORM 1.2] LMSFinish thành công.");
        }
    }
};

window.addEventListener("load", function() {
    scorm.init();
});

window.addEventListener("unload", function() {
    scorm.finish();
});
