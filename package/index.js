const generateUUID = () => {
    let date = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-3xxx-gxxx-xxxxxxxxxxxx'.replace(/[xg]/g, (letter) => {
        const random = (date + Math.random()*16)%16 | 0;
        date = Math.floor(date/16);
        return (letter=='x' ? random :(random&0x3|0x8)).toString(16);
    });
    return uuid;
}

module.exports = generateUUID;