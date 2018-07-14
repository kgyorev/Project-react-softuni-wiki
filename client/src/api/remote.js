//const host = 'http://localhost:1337/';
const host = 'https://softuni-wiki-server.herokuapp.com:443/';

async function register(email, password) {
    const res = await fetch(host + 'user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    return await res.json();
}

async function login(email, password) {
    const res = await fetch(host + 'user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    return await res.json();
}

async function createArticle(article) {
    const res = await fetch(host + 'article/create', {
        method: 'POST',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    });
    return await res.json();
}
async function editArticle(id,article) {
    const res = await fetch(host + 'article/edit/'+ id, {
        method: 'POST',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    });
    return await res.json();
}
async function getUserDetails() {
    const res = await fetch(host + 'user/details', {
        method: 'GET',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
}

async function getHomePage() {
    const res = await fetch(host);
    return await res.json();
}

async function getAllArticlePage(page) {
    const res = await fetch(host+'article/all?page='+ page,{
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
        },
    });
    return await res.json();
}

async function getDetails(id) {
    const res = await fetch(host + 'article/details/' + id, {
        method: 'GET',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),            
        }
    });
    return await res.json();
}
async function searchArticles(searchStr,page) {
    const res = await fetch(host + 'article/search?searchStr=' + searchStr+'&'+'page='+page, {
        method: 'GET',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
        }
    });
    return await res.json();
}
async function getEditDetails(id) {
    const res = await fetch(host + 'edit/' + id, {
        method: 'GET',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
        }
    });
    return await res.json();
}
async function getAllArticleHistory(id) {
    const res = await fetch(host + 'article/history/' + id, {
        method: 'GET',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
        }
    });
    return await res.json();
}
async function lockArticle(articleId) {
    const res = await fetch(host + `article/lock/${articleId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
        }
    });
    return await res.json();
}
async function unLockArticle(articleId) {
    const res = await fetch(host + `article/unlock/${articleId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
        }
    });
    return await res.json();
}
async function deleteArticle(articleId) {
    const res = await fetch(host + `article/delete/${articleId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
        }
    });
    return await res.json();
}


export { register, login,getUserDetails,createArticle,editArticle,getEditDetails,searchArticles,deleteArticle,lockArticle,unLockArticle, getHomePage,getAllArticlePage,getAllArticleHistory,getDetails};