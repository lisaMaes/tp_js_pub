var pubs= require('../mocks/pubs.json');

function generateList(){

    pubs.forEach(function (pub) {

        console.log(pub.name);

    })

}

module.exports = {
    generateList: generateList
};