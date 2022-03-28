const userId = window.location.href.split('/')[3];

getFetch(`/${userId}` , getUserInfo);

