import Web3 from 'web3';
// import contract from 'truffle-contract';
// import _ from 'lodash';

const provider = new Web3.providers.HttpProvider('http://localhost:8545');

export const web3 = new Web3(provider);
export const contract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "researchers",
		"outputs": [
			{
				"name": "institution",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "_address",
				"type": "address"
			},
			{
				"name": "_meta",
				"type": "bytes32"
			},
			{
				"name": "_price",
				"type": "uint256"
			},
			{
				"name": "_data",
				"type": "uint256"
			}
		],
		"name": "submitData",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "participants",
		"outputs": [
			{
				"name": "race",
				"type": "uint256"
			},
			{
				"name": "location",
				"type": "uint16"
			},
			{
				"name": "gender",
				"type": "bool"
			},
			{
				"name": "dob",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "typeID",
				"type": "uint256"
			},
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "val",
				"type": "uint256"
			}
		],
		"name": "buy",
		"outputs": [
			{
				"name": "id_",
				"type": "uint256"
			},
			{
				"name": "meta_",
				"type": "bytes32"
			},
			{
				"name": "price_",
				"type": "uint256"
			},
			{
				"name": "data_",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "typeID",
				"type": "uint256"
			}
		],
		"name": "query",
		"outputs": [
			{
				"name": "prices_",
				"type": "uint256[]"
			},
			{
				"name": "meta_",
				"type": "bytes32[]"
			},
			{
				"name": "id_",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "coreData",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "participant",
				"type": "address"
			},
			{
				"name": "meta",
				"type": "bytes32"
			},
			{
				"name": "price",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]).at(0x331aEc0D0Fb993221670480b5f301778f05BAE2D);
