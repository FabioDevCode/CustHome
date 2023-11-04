const prepareUrl = (tag, val) => {
    switch(tag) {
        case 'classic':
            // Google
            return `https://www.google.com/search?q=${val.value.trim().split(' ').join('+')}`;
            break;
        case 'npm':
            // Npm
            return `https://www.npmjs.com/search?q=${encodeURIComponent(val.value)}`;
            break;
        case 'images':
            // Google images
            return `https://www.google.com/search?tbm=isch&q=${val.value.trim().split(' ').join('+')}`;
            break;
        case 'videos':
            // Google videos
            return `https://www.google.com/search?tbm=vid&q=${val.value.trim().split(' ').join('+')}`;
            break;
        case 'maps':
            // Google maps
            return `https://www.google.com/maps/search/${val.value.trim().split(' ').join('+')}`;
            break;
        default:
            break;
    }
};




export default {
    prepareUrl
};