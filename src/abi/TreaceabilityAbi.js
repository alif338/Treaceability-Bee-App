const TreaceabilityAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "rumahProduksi",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "konsumen",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "peternaks",
				"type": "string"
			}
		],
		"name": "f1_movedProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stups",
				"type": "string"
			}
		],
		"name": "f2_addStupStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "rumahProduksi",
				"type": "string"
			}
		],
		"name": "f3_changeRumahProduksiStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "stups",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "peternaks",
				"type": "string"
			}
		],
		"name": "f4_farming",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getState",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "stups",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "peternaks",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "rumah_produksi",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "konsumen",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "graf",
						"type": "string"
					}
				],
				"internalType": "struct Treaceability.State",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "state",
		"outputs": [
			{
				"internalType": "string",
				"name": "stups",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "peternaks",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "rumah_produksi",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "konsumen",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "graf",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export default TreaceabilityAbi;