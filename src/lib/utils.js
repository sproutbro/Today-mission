function addHiddenInput(form, name, value) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
}

function convertObjectToFormData(obj, form, parentKey = "") {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let fullKey = parentKey ? `${parentKey}[${key}]` : key;
            if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
                convertObjectToFormData(obj[key], form, fullKey);
            } else {
                addHiddenInput(form, fullKey, obj[key]);
            }
        }
    }
}

function convertArrayToFormData(arr, form, parentKey) {
    arr.forEach((value, index) => {
        let fullKey = `${parentKey}[${index}]`;
        if (typeof value === "object" && !Array.isArray(value)) {
            convertObjectToFormData(value, form, fullKey);
        } else if (Array.isArray(value)) {
            convertArrayToFormData(value, form, fullKey);
        } else {
            addHiddenInput(form, fullKey, value);
        }
    });
}

async function post(url, data) {
    try {
        const response = await fetch(url, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export { addHiddenInput, convertObjectToFormData, convertArrayToFormData, post }