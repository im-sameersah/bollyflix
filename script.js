function validateSearch() {
        const searchInput = document.getElementById('searchInput').value.trim();
        if (!searchInput) {
            alert('Please enter a search term.');
            return false;
        }

        // Add your logic here to check if the post exists
        // For example, you can redirect to a search results page or display a message
        // For now, we'll assume no posts are found
        alert('No posts found for "' + searchInput + '".');
        return false; // Prevents form submission
    }



    document.addEventListener('DOMContentLoaded', function() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.header nav');

        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    });
