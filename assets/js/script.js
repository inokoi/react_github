var Git = {
    url: 'https://api.github.com/',
    repo: 'https://api.github.com/repos/',
    load: function(send){
        var l = document.getElementById('loading');
        if(send) {
            l.style.display = 'inline';
        } else {
            l.style.display = 'none';
        }
    },
    ajax: function(url){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.dataType = 'json';
        return xhr;
    }
};
