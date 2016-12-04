var sensor1 = 0 ;
var sensor2 = 0 ;
var sensor3 = 0 ;
var smartsensorContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"isLightsOff","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"sensor2val","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"sensor3val","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"sensor1val","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"sensor1","type":"uint256"},{"name":"sensor2","type":"uint256"},{"name":"sensor3","type":"uint256"}],"name":"changeValues","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"sensor1","type":"uint256"},{"name":"sensor2","type":"uint256"},{"name":"sensor3","type":"uint256"}],"payable":false,"type":"constructor"}]);
var smartsensor = smartsensorContract.new(
   sensor1,
   sensor2,
   sensor3,
   {
     from: web3.eth.accounts[0], 
     data: '60606040526000600055600060015560006002553461000057604051606080610240833981016040528080519060200190919080519060200190919080519060200190919050505b8260008190555081600181905550806002819055505b5050505b6101d18061006f6000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480631b3d602e146100645780633da3033c146100895780635b0000be146100ac578063b83a0900146100cf578063d4c2655f146100f2575b610000565b3461000057610071610121565b60405180821515815260200191505060405180910390f35b34610000576100966101a4565b6040518082815260200191505060405180910390f35b34610000576100b96101aa565b6040518082815260200191505060405180910390f35b34610000576100dc6101b0565b6040518082815260200191505060405180910390f35b346100005761011f60048080359060200190919080359060200190919080359060200190919050506101b6565b005b6000600060005411801561013757506000600154115b1561014957600190506101a1566101a0565b600060025411801561015d57506000600154115b1561016f57600190506101a15661019f565b600060005411801561018357506000600154115b1561019557600190506101a15661019e565b600090506101a1565b5b5b5b90565b60015481565b60025481565b60005481565b8260008190555081600181905550806002819055505b50505056', 
     gas: 3000000
   }, function(e, contract){
    console.log(e, contract);
    if (typeof contract.address != 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
