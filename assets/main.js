async function getBusinessData() {
    return await fetch('./assets/business-data.json').then(x => x.json());
}

async function getRoadmapData() {
    return await fetch('./assets/roadmap-data.json').then(x => x.json());
}

function getParam(param_name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param_name).replace('plus', '+');
}