document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const isGuest = urlParams.has('guest');

    if (isGuest) {
        const navbarLinks = document.querySelectorAll('a');
        console.log(navbarLinks);

        // Update all links to include guest status
        navbarLinks.forEach(link => {
            const url = new URL(link.href);
            if (!url.searchParams.has('guest')) {
                url.searchParams.set('guest', 'true');
                link.href = url.toString();
            }
        });

        // Update Welcome Text if present
        const helloGuest = document.getElementById('hello-text');
        if (helloGuest) {
            helloGuest.textContent = 'Hello, Guest';
        }
    }

    // Highlight active link
    const currentPath = window.location.pathname;
    console.log(currentPath);
    document.querySelectorAll('a').forEach(link => {
        if (link.href.includes(currentPath)) {
            link.classList.add('active');
        }
    });
});