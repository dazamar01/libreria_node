
const axios = require('axios');
const xml2js = require('xml2js');

const parser = xml2js.Parser({explicitArray: false});

function testService() {
    function getBookByID(id) {
        return new Promise((resolve, reject) => {

            let url = `https://www.goodreads.com/book/show/${id}.xml?key=r5oV4OPffoSbhrmou9GEGA`;

            axios.get(url)
                .then((response) => {
                    parser.parseString(response.data, (err, result)=>{
                        if(err){
                            console.log(err);
                        }else{
                            console.log(result);
                            resolve( result.GoodreadsResponse.book );
                        }
                    });
                })
                .catch((error) => {
                    reject(error);
                    console.log(error);
                });

            
        })
    }
    return { getBookByID }
}
module.exports = testService();