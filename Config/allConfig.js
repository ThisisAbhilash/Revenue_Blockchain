
exports.mongoURL = 'mongodb://127.0.0.1:27017/Revenue';

exports.gethURL = "http://localhost:8545";

exports.ethAdminAccount = "0xc109cda59be53b1c4d47f244f6f4248c33bbb3c9";

exports.ethAdminPassword = "pwc@1234";

exports.contractABI = [{"constant":false,"inputs":[{"name":"_uniqueId","type":"bytes32"},{"name":"_rate","type":"uint256"}],"name":"addAnotherRate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_uniqueId","type":"bytes32"},{"name":"revised_rate","type":"uint256"}],"name":"update_Percent_Of_Id","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"size_of_data","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_uniqueId","type":"bytes32"}],"name":"get_Rate_By_Id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"retailerName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"ratePercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_retailerName","type":"string"},{"name":"_unique_id","type":"bytes32[]"},{"name":"_rate","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

exports.contractData = '0x608060405234801561001057600080fd5b506040516105223803806105228339810180604052810190808051820192919060200180518201929190602001805182019291905050506000836000908051906020019061005f9291906100e6565b506000600281905550600090505b81518110156100dd57818181518110151561008457fe5b906020019060200201516001600085848151811015156100a057fe5b906020019060200201516000191660001916815260200190815260200160002081905550600160025401600281905550808060010191505061006d565b5050505061018b565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061012757805160ff1916838001178555610155565b82800160010185558215610155579182015b82811115610154578251825591602001919060010190610139565b5b5090506101629190610166565b5090565b61018891905b8082111561018457600081600090555060010161016c565b5090565b90565b6103888061019a6000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063015d39df1461007d578063231f9672146100ab57806359cbacb7146100d95780637eef891314610104578063e0305f8414610149578063ff520938146101d9575b600080fd5b6100a960048036038101908080356000191690602001909291908035906020019092919050505061021e565b005b6100d760048036038101908080356000191690602001909291908035906020019092919050505061024e565b005b3480156100e557600080fd5b506100ee610272565b6040518082815260200191505060405180910390f35b34801561011057600080fd5b506101336004803603810190808035600019169060200190929190505050610278565b6040518082815260200191505060405180910390f35b34801561015557600080fd5b5061015e6102a6565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561019e578082015181840152602081019050610183565b50505050905090810190601f1680156101cb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101e557600080fd5b506102086004803603810190808035600019169060200190929190505050610344565b6040518082815260200191505060405180910390f35b80600160008460001916600019168152602001908152602001600020819055506001600254016002819055505050565b80600160008460001916600019168152602001908152602001600020819055505050565b60025481565b6000806000905060016000846000191660001916815260200190815260200160002054905080915050919050565b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561033c5780601f106103115761010080835404028352916020019161033c565b820191906000526020600020905b81548152906001019060200180831161031f57829003601f168201915b505050505081565b600160205280600052604060002060009150905054815600a165627a7a72305820356995691a53d647a8219bd0c4ef5f2af9cf4ffc8072a09fed22216a3ce2f0e40029';