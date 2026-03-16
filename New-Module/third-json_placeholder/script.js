window.addEventListener('DOMContentLoaded', () => {
    const postsWrapper = document.querySelector('.posts');

    const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/';

    //METHOD 'GET'
    fetch(BASE_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item, index) => {
                const postEl = document.createElement('div');
                postEl.classList.add('post');
                postEl.innerHTML = `
                <h4><b>#${index + 1}.</b>${item.title}</h4>
                <p>${item.body}</p>
            `;
                postsWrapper.append(postEl);
            });
        })
        .catch(() => {
            const errorEl = document.createElement('div');
            errorEl.classList.add('error');
            errorEl.textContent = 'Something went wrong';
            postsWrapper.append(errorEl);
        });

    //METHOD 'POST'
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });

        const json = JSON.stringify(object);

        fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: json,
        })
            .then((response) => response.json())
            .then((data) => {
                form.reset();
                const postEl = document.createElement('div');
                postEl.classList.add('post');
                postEl.innerHTML = `
                        <h4><b>#${data.id}.</b>${data.title}</h4>
                        <p>${data.body}</p>
                    `;
                postsWrapper.append(postEl);
            })
            .catch((error) => console.log(error));
    });
});
