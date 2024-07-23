document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.getElementById('share-btn');
    const shareComponent = document.getElementById('share-component');
    const mobileShareButton = document.getElementById('mobile-share-btn');
    const mobileShareComponent = document.getElementById('mobile-share-component');
    const author = document.getElementById('author');
    const mobileShareButtonActive = document.getElementById('mobile-share-btn-active');
    
    shareButton.addEventListener('click', function() {
        console.log('Share button clicked');
        console.log('Before toggle:', shareComponent.classList);
        shareComponent.classList.toggle('active');
        console.log('After toggle:', shareComponent.classList);
    });

    mobileShareButton.addEventListener('click', function() {
        author.classList.toggle('hidden');
        console.log('Mobile share button clicked');
        console.log('Before toggle:', mobileShareComponent.classList);
        mobileShareComponent.classList.toggle('active');
        console.log('After toggle:', mobileShareComponent.classList);
    });

    mobileShareButtonActive.addEventListener('click', function() {
        author.classList.toggle('hidden');
        console.log('Mobile share button clicked');
        console.log('Before toggle:', mobileShareComponent.classList);
        mobileShareComponent.classList.toggle('active');
        console.log('After toggle:', mobileShareComponent.classList);
    });
});