// Function to handle clicking on a content item
document.addEventListener("DOMContentLoaded", function () {
    const contentItems = document.querySelectorAll(".content-item");
    
    contentItems.forEach(item => {
        item.addEventListener("click", function () {
            const title = this.getAttribute("data-title");
            const content = this.getAttribute("data-content");
            const type = this.getAttribute("data-type");
            
            // Store data in localStorage
            localStorage.setItem("selectedContent", JSON.stringify({ title, content, type }));
            
            // Redirect to content.html
            window.location.href = "content.html";
        });
    });
});

// Function to display content on content.html
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("content.html")) {
        const contentData = JSON.parse(localStorage.getItem("selectedContent"));
        
        if (contentData) {
            document.getElementById("content-title").innerText = contentData.title;
            document.getElementById("content-body").innerText = contentData.content;
            document.getElementById("content-type").innerText = contentData.type;
        } else {
            document.getElementById("content-title").innerText = "Content not found";
        }
    }
});
