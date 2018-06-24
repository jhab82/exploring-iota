const IOTA = require('iota.lib.js')
const iota = new IOTA({ provider: 'https://nodes.testnet.iota.org:443' })

const remoteCurl = require('@iota/curl-remote')
remoteCurl(iota, `https://powbox.testnet.iota.org`, 500)

//const transaction ="CNBZCND9UXDHQPLCQXSFJNPM9AIKHTTAROWVMVBYSTGKKOCVEDQQMPKOMJCSB9VV9LCOAECKNY9LEB999"
const bundle ="FSWCIELCABKYKSPQ9FOEKELTNJYEVPVU9JCJXFUTQDKQPUEAJYIUHITGQKYTUXHL9KAQUBLACBREGIGDW"

var bundles = new Set();

//var searchVarsHash = {'hashes':[transaction]}
var searchVarsBundle = {'bundles':[bundle]}
var message

////console.log(searchVarsBundle)

iota.api.findTransactions(searchVarsBundle, (error, sucess)=> {
        if(error) {
                console.log(error)
                } else {
                //console.log(sucess[0])
                iota.api.getBundle(sucess[0], (error, sucess2) => {
                                if(error){console.log(error)}else{
                                        message = sucess2[0].signatureMessageFragment
                                        //message = message.split('9').join('')
                           		//console.log(iota.utils.fromTrytes(message.slice(0,-1)));
				
                           		console.log(iota.utils.fromTrytes(message));
					console.log("-----raw message-----");
                                        console.log(message)
                                }
                        })
        }
})
