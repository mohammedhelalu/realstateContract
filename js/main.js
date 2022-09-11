async function loadWeb3() {
    console.log("loaded 1");
                if (window.ethereum) {
                    window.web3 = new Web3(window.ethereum);
                    window.ethereum.enable();
                }
            }
            
   async function loadContract() {
                return await new window.web3.eth.Contract( [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_location",
				"type": "string"
			},
			{
				"name": "_squremeter",
				"type": "string"
			},
			{
				"name": "_QR",
				"type": "string"
			}
		],
		"name": "creatproparty",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newowner",
				"type": "address"
			}
		],
		"name": "transferproparty",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "realesates",
		"outputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "location",
				"type": "string"
			},
			{
				"name": "squremeter",
				"type": "string"
			},
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "QR",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
, '0x6fC5D911750A8ACAcb77dFEE60D64E00cF36CEac');
            }  


            async function getCurrentAccount() {
                const accounts = await window.web3.eth.getAccounts();
                return accounts[0];
            }

            async function load() {
                await loadWeb3();
                window.contract = await loadContract();
                
                const account = await getCurrentAccount();
                getAprt(account);
                //document.getElementById('input1').value=message;
               
            } 
            async function getAprt(account){
             const message = await window.contract.methods.realesates(account).call({ from: account });
             console.log(message);
            document.getElementById('info').innerHTML=message.name;  
            document.getElementById('location').innerHTML=message.location;             
            document.getElementById('square').innerHTML=message.squremeter;             
            document.getElementById('qr').innerHTML=message.qr;             
            }
 
    async function save() {
    const account = await getCurrentAccount();
    var name =document.getElementById('name').value;
    var location =document.getElementById('location').value;
    var squremeter =document.getElementById('squremeter').value;
    var qr =document.getElementById('qr').value;
    const message = await window.contract.methods.creatproparty(name,location,squremeter,qr).send({ from: account });
    alert("Done");
    window.location.replace("/");
    }
    
    async function transfer() {
    const account = await getCurrentAccount();
    var address =document.getElementById('input1').value;
    const message = await window.contract.methods.transferproparty(address).send({ from: account });
    alert("Done");
    window.location.replace("/");
    }    
    

load();      