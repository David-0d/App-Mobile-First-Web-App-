document.getElementById('ad-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;

    const adList = document.getElementById('ads-list');
    const newAd = document.createElement('div');
    newAd.className = 'ad-item';
    newAd.innerHTML = `<strong>${title}</strong> - ${price}`;
    
    adList.prepend(newAd);
    this.reset();
});