document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('select');
    const app = document.querySelector('#app')
    app.textContent = 'Выбери крутую тачку'
    fetch('db.json')
        .then(res => res.json())
        .then(data => {
            select.innerHTML = `<option value="">Выбери тачку</option>`;
            data = data['cars']
            for (const key in data) {
                console.log(key, data[key]);
                const option = document.createElement('option')
                option.setAttribute('value', data[key].model)
                option.setAttribute('data-val', data[key].price)
                option.textContent = data[key].brand;
                select.appendChild(option)
            }
        }).catch(err => console.log(err));
    
    select.addEventListener('input', e => {
        console.log(e.target);
        if(e.target.selectedIndex === 0) {
            app.textContent = ''
        } else {
            app.innerHTML = `Тачка: ${select.options[e.target.selectedIndex].textContent} ${select.options[e.target.selectedIndex].getAttribute('value')}<br>Цена: ${select.options[e.target.selectedIndex].getAttribute('data-val')}$`;
        }
    });
})