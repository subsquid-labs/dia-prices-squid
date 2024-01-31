export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OracleUpdate",
        "inputs": [
            {
                "type": "string",
                "name": "key",
                "indexed": false
            },
            {
                "type": "uint128",
                "name": "value",
                "indexed": false
            },
            {
                "type": "uint128",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "UpdaterAddressChange",
        "inputs": [
            {
                "type": "address",
                "name": "newUpdater",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "getValue",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "key"
            }
        ],
        "outputs": [
            {
                "type": "uint128",
                "name": ""
            },
            {
                "type": "uint128",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setValue",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "key"
            },
            {
                "type": "uint128",
                "name": "value"
            },
            {
                "type": "uint128",
                "name": "timestamp"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateOracleUpdaterAddress",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOracleUpdaterAddress"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "values",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    }
]
