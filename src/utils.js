export function getData(brand) {
	return fetch("https://zqmyhd2txa.execute-api.us-east-1.amazonaws.com/dev/shoes/brand/" + brand)
	.then(handleResponse);
}

export async function verifyCaptcha(token) {
    var postToken = token;
    const postData = { token: postToken };
    return fetch('https://zqmyhd2txa.execute-api.us-east-1.amazonaws.com/dev/verifyCaptcha', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    }).then(handleResponse);
}

export function updateReviews(brand, name, size) {
    var putBrand = brand;
    var putName = name;
    var putSize = size;
    const data = { Brand: brand,
                    ProductName: name,
                    size: Number(size)
                };

    fetch('https://zqmyhd2txa.execute-api.us-east-1.amazonaws.com/dev/shoe/updateSizeReviews', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        return true;
    })
    .catch((error) => {
        console.error('Error:', error);
        return false;
    });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}