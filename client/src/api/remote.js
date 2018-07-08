const host = 'http://localhost:1337/';

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

async function createHotel(hotel) {
    const res = await fetch(host + 'hotels/create', {
        method: 'POST',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hotel)
    });
    return await res.json();
}

async function getHomePage() {
    const res = await fetch(host);
    return await res.json();
}

async function getAllArticlePage() {
    const res = await fetch(host+'article/all',{
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
        },
    });
    return await res.json();
}

async function getPage(page) {
    const res = await fetch(host + 'hotels/all?page=' + page);
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

async function postReview(hotelId, comment, rating) {
    const res = await fetch(host + `hotels/details/${hotelId}/reviews/create`, {
        method: 'POST',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            comment,
            rating
        })
    });
    return await res.json();
}

async function getReviews(hotelId) {
    const res = await fetch(host + `hotels/details/${hotelId}/reviews`, {
        method: 'GET',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),            
        }
    });
    return await res.json();
}

async function deleteHotel(hotelId) {
    const res = await fetch(host + `hotels/${hotelId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),            
        }
    });
    return await res.json();
}

export { register, login,createArticle,editArticle, createHotel, getPage, getHomePage,getAllArticlePage,getDetails, postReview, getReviews, deleteHotel };