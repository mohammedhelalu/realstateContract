pragma solidity ^0.4.21;

contract realestate {
    
    
    address contractowner;
    struct realesate {
        string name;
        string location;
        string squremeter;
        address owner;
        string QR;
    }
    
    mapping (address => realesate) public realesates; //realesates[msg.sender] ={}
    
    constructor (){
       contractowner=msg.sender; 
    }
    
    
    function creatproparty(string _name,string _location,string _squremeter,string _QR){
        realesates[msg.sender].name=_name;
        realesates[msg.sender].location=_location;
        realesates[msg.sender].squremeter=_squremeter;
        realesates[msg.sender].QR=_QR;
        realesates[msg.sender].owner=msg.sender;
    }
    
    function transferproparty(address newowner){
       
        realesates[newowner].name=realesates[msg.sender].name;
        realesates[newowner].location=realesates[msg.sender].location;
        realesates[newowner].squremeter=realesates[msg.sender].squremeter;
        realesates[newowner].QR=realesates[msg.sender].QR;
        realesates[newowner].owner= newowner;
        delete realesates[msg.sender];
        
    }
    
    
}