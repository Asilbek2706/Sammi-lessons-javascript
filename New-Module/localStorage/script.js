'use strict';

/*
localStorage.setItem('asilbek-theme', 'light');

const theme = localStorage.getItem('asilbek-theme');

if (theme === 'light') {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
} else if (theme === 'dark') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}

localStorage.clear();

localStorage.removeItem('asilbek-theme')*/

const form = document.querySelector('form'),
    postParent = document.querySelector('.posts');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });

    const db = JSON.parse(localStorage.getItem('posts'));

    if (db) {
        localStorage.setItem('posts', JSON.stringify([...db, object]));
    } else {
        localStorage.setItem('posts', JSON.stringify([object]));
    }
});

getPosts();

function getPosts() {
    const posts = JSON.parse(localStorage.getItem('posts'));
    posts.forEach((item, index) => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
            <h4> <b>#${index + 1}.</b> ${item.title}</h4>
            <p>${item.body}</p>
        `;
        postParent.append(postEl);
    });
}
