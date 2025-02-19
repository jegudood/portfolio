document.addEventListener('DOMContentLoaded', function() {
    const emailButton = document.getElementById('copy-email');
    const emailIcon = emailButton.querySelector('i');
    const email = 'jef.guandique@gmail.com';

    emailButton.href = `mailto:${email}`;
    
    emailButton.addEventListener('click', async function(e) {
        e.preventDefault();

        if(navigator.clipboard && window.isSecureContext)
        {
            try {
                await navigator.clipboard.writeText(email);
                
                emailIcon.classList.remove('fa-envelope');
                emailIcon.classList.add('fa-check');
                
                setTimeout(() => {
                    emailIcon.classList.remove('fa-check');
                    emailIcon.classList.add('fa-envelope');
                }, 1000);
                
            } catch (err) {
                console.error('Failed to copy email:', err);
                window.location.href = `mailto:${email}`;
            }
        }
        else
        {
            window.location.href = `mailto:${email}`;
        }
    });
});